/**
 * Notify IndexNow (https://api.indexnow.org) that production URLs changed.
 *
 * The key is public. Search engines fetch it from the site root:
 *   https://www.vaccineinjuries.org/<key>.txt
 * No repository secret is required.
 *
 * Examples:
 *   npm run indexnow -- --sitemap
 *   npm run indexnow -- --sitemap --dry-run
 *   npm run indexnow -- https://www.vaccineinjuries.org/faq /blog/some-slug
 *   npm run indexnow -- --file urls.txt
 *   npm run indexnow -- --changed --wait --soft
 *
 * --sitemap submits every URL in the live production sitemap. Run that once
 * after this key file is deployed, for the initial full submission.
 * Later pushes to main should use --changed, which submits only URLs whose
 * source files differ. --soft exits 0 on failure so a deploy is never blocked.
 */
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { blogPosts } from "@/content/blog/posts";
import { injuryHubs } from "@/content/injuries";
import {
  INDEXNOW_ENDPOINT,
  INDEXNOW_KEY,
  INDEXNOW_SITE_URL,
  chunkIndexNowUrls,
  filesFromNameStatus,
  indexNowKeyLocation,
  indexNowKeyPath,
  indexNowPayload,
  interpretDeploymentStatuses,
  parseGitNameStatus,
  parseSitemapLocs,
  pathsForChangedFiles,
} from "@/lib/indexnow";
import { indexablePaths } from "@/lib/site-urls";

const ZERO_SHA = /^0+$/;
const FLAGS_WITH_VALUES = new Set(["--base", "--head", "--file"]);

function hasFlag(args: string[], flag: string): boolean {
  return args.includes(flag);
}

function optionValue(args: string[], flag: string): string | undefined {
  const index = args.indexOf(flag);
  if (index === -1) return undefined;
  const next = args[index + 1];
  if (!next || next.startsWith("--")) return undefined;
  return next;
}

function positionals(args: string[]): string[] {
  const values = new Set<number>();
  args.forEach((arg, index) => {
    const next = args[index + 1];
    if (!next || next.startsWith("--")) return;
    if (FLAGS_WITH_VALUES.has(arg)) values.add(index + 1);
    // A URL after --sitemap is the sitemap location, not a page to submit.
    if (arg === "--sitemap" && next.startsWith("http")) values.add(index + 1);
  });
  return args.filter((arg, index) => !arg.startsWith("--") && !values.has(index));
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function git(args: string[]): string {
  return execFileSync("git", args, { encoding: "utf8" });
}

function gitShow(rev: string, file: string): string | null {
  try {
    return execFileSync("git", ["show", `${rev}:${file}`], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
  } catch {
    return null;
  }
}

function assertKeyFileInRepo() {
  let onDisk: string;
  try {
    onDisk = readFileSync(indexNowKeyPath(), "utf8");
  } catch {
    throw new Error(`Missing ${indexNowKeyPath()}. IndexNow needs the public key file at the site root.`);
  }
  if (onDisk.trim() !== INDEXNOW_KEY) {
    throw new Error(`${indexNowKeyPath()} does not match the IndexNow key in src/lib/indexnow.ts.`);
  }
}

async function assertKeyLive() {
  const location = indexNowKeyLocation();
  let lastError = `Key file ${location} was not checked.`;
  for (let attempt = 1; attempt <= 6; attempt++) {
    try {
      const response = await fetch(location, { redirect: "follow" });
      if (!response.ok) {
        throw new Error(`Key file ${location} returned HTTP ${response.status}. Deploy to production before submitting.`);
      }
      const body = (await response.text()).trim();
      if (body !== INDEXNOW_KEY) {
        throw new Error(`Key file ${location} did not contain the expected key. Deploy the latest production build before submitting.`);
      }
      console.log(`[indexnow] Key file is live at ${location}.`);
      return;
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
      console.log(`[indexnow] Key file not ready (attempt ${attempt}/6): ${lastError}`);
      if (attempt < 6) await sleep(10_000);
    }
  }
  throw new Error(lastError);
}

async function github<T>(path: string, token: string): Promise<T> {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "vaccineinjuries-indexnow",
    },
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub API ${path} returned HTTP ${response.status}: ${text.slice(0, 300)}`);
  }
  return (await response.json()) as T;
}

async function productionState(repo: string, sha: string, token: string): Promise<"success" | "failure" | "pending" | "missing"> {
  const deployments = await github<Array<{ id: number }>>(
    `/repos/${repo}/deployments?sha=${encodeURIComponent(sha)}&environment=Production&per_page=5`,
    token,
  );
  const deployment = deployments[0];
  if (!deployment) return "missing";
  const statuses = await github<Array<{ state?: string }>>(
    `/repos/${repo}/deployments/${deployment.id}/statuses?per_page=5`,
    token,
  );
  return interpretDeploymentStatuses(statuses);
}

async function waitForProduction(repo: string, sha: string, token: string) {
  const deadline = Date.now() + 12 * 60 * 1000;
  while (Date.now() < deadline) {
    const state = await productionState(repo, sha, token);
    if (state === "success") {
      console.log(`[indexnow] Production deployment of ${sha.slice(0, 7)} succeeded.`);
      // Give the production alias a moment to point at the finished deployment.
      await sleep(15_000);
      return;
    }
    if (state === "failure") {
      throw new Error(`Production deployment of ${sha} failed. Not submitting to IndexNow.`);
    }
    console.log(`[indexnow] Waiting for the Vercel production deployment of ${sha.slice(0, 7)} (${state}).`);
    await sleep(15_000);
  }
  throw new Error(`Timed out waiting for the production deployment of ${sha}.`);
}

function changedPaths(base: string, head: string): string[] {
  if (ZERO_SHA.test(base)) {
    throw new Error(
      `No parent commit (${base}). Skipping automatic submission. For a one-time full submit, run: npm run indexnow -- --sitemap`,
    );
  }
  const status = git(["diff", "--name-status", "--find-renames", base, head]);
  const files = filesFromNameStatus(parseGitNameStatus(status));
  const postsFile = "src/content/blog/posts.ts";
  const injuriesFile = "src/content/injuries.ts";
  return pathsForChangedFiles(files, {
    allPaths: indexablePaths(),
    blogSlugs: blogPosts.map((post) => post.slug),
    injurySlugs: injuryHubs.map((hub) => hub.slug),
    posts: files.includes(postsFile)
      ? { before: gitShow(base, postsFile), after: gitShow(head, postsFile) }
      : undefined,
    injuries: files.includes(injuriesFile)
      ? { before: gitShow(base, injuriesFile), after: gitShow(head, injuriesFile) }
      : undefined,
  });
}

async function urlsFromArgs(args: string[]): Promise<string[]> {
  if (hasFlag(args, "--changed")) {
    const base = optionValue(args, "--base") || process.env.INDEXNOW_BEFORE || "HEAD~1";
    const head = optionValue(args, "--head") || process.env.INDEXNOW_SHA || "HEAD";
    console.log(`[indexnow] Diffing ${base}...${head}.`);
    return changedPaths(base, head);
  }
  if (hasFlag(args, "--all")) return indexablePaths();
  if (hasFlag(args, "--sitemap")) {
    const sitemapUrl = optionValue(args, "--sitemap") || `${INDEXNOW_SITE_URL}/sitemap.xml`;
    console.log(`[indexnow] Reading ${sitemapUrl}.`);
    const response = await fetch(sitemapUrl);
    if (!response.ok) throw new Error(`Sitemap ${sitemapUrl} returned HTTP ${response.status}.`);
    return parseSitemapLocs(await response.text());
  }
  const file = optionValue(args, "--file");
  if (file) {
    return readFileSync(file, "utf8")
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"));
  }
  return positionals(args);
}

async function submit(urls: string[], dryRun: boolean) {
  const payload = indexNowPayload(urls);
  if (payload.urlList.length === 0) {
    console.log("[indexnow] No URLs to submit.");
    return;
  }
  console.log(`[indexnow] ${payload.urlList.length} URL(s):`);
  for (const url of payload.urlList) console.log(`  ${url}`);
  if (dryRun) {
    console.log("[indexnow] Dry run; nothing was submitted.");
    return;
  }
  await assertKeyLive();
  for (const urlList of chunkIndexNowUrls(payload.urlList)) {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ ...payload, urlList }),
    });
    const text = await response.text();
    if (response.status !== 200 && response.status !== 202) {
      throw new Error(`IndexNow returned HTTP ${response.status}: ${text.slice(0, 500)}`);
    }
    console.log(`[indexnow] Submitted ${urlList.length} URL(s): HTTP ${response.status}${text ? ` ${text.slice(0, 200)}` : ""}.`);
  }
}

function printHelp() {
  console.log(`Submit URLs to IndexNow for ${INDEXNOW_SITE_URL}.

  npm run indexnow -- --sitemap [--dry-run]
      Fetch the live sitemap and submit every URL. Use this once, after the
      key file is deployed, for the initial full submission.

  npm run indexnow -- --all [--dry-run]
      Submit the local indexable URL list (the same paths the sitemap builds).

  npm run indexnow -- --file urls.txt
      Submit the URLs in a file, one per line. # comments are ignored.

  npm run indexnow -- https://www.vaccineinjuries.org/faq /about
      Submit specific URLs or site paths.

  npm run indexnow -- --changed [--base SHA] [--head SHA] [--wait] [--soft] [--dry-run]
      Submit only URLs whose source files changed between two commits.
      --wait blocks until GitHub reports the Vercel production deployment
      of the head SHA as successful. --soft exits 0 if something fails.

The key file is ${indexNowKeyPath()} and is served at ${indexNowKeyLocation()}.
No repository secret is required.
`);
}

async function run(args: string[]) {
  if (hasFlag(args, "--help") || hasFlag(args, "-h")) {
    printHelp();
    return;
  }
  assertKeyFileInRepo();
  const dryRun = hasFlag(args, "--dry-run");
  const explicit =
    hasFlag(args, "--changed") || hasFlag(args, "--all") || hasFlag(args, "--sitemap") || Boolean(optionValue(args, "--file"));
  const urls = await urlsFromArgs(args);
  if (urls.length === 0 && !explicit) {
    printHelp();
    throw new Error("No URLs given. Pass --sitemap, --all, --changed, --file, or a list of URLs.");
  }
  if (urls.length === 0) {
    console.log("[indexnow] No URLs to submit.");
    return;
  }
  if (hasFlag(args, "--wait") && !dryRun) {
    const repo = process.env.GITHUB_REPOSITORY;
    const token = process.env.GITHUB_TOKEN;
    const sha = optionValue(args, "--head") || process.env.INDEXNOW_SHA || process.env.GITHUB_SHA;
    if (!repo || !token || !sha) {
      throw new Error("--wait needs GITHUB_REPOSITORY, GITHUB_TOKEN, and a head SHA (INDEXNOW_SHA or --head).");
    }
    await waitForProduction(repo, sha, token);
  }
  await submit(urls, dryRun);
}

const soft = hasFlag(process.argv.slice(2), "--soft");
try {
  await run(process.argv.slice(2));
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`[indexnow] ${message}`);
  process.exit(soft ? 0 : 1);
}
