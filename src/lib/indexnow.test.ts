import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, test } from "node:test";
import { blogPosts } from "@/content/blog/posts";
import { injuryHubs } from "@/content/injuries";
import {
  INDEXNOW_HOST,
  INDEXNOW_KEY,
  INDEXNOW_SITE_URL,
  canonicalIndexNowUrl,
  contentSlices,
  diffContentSlugs,
  filesFromNameStatus,
  indexNowKeyLocation,
  indexNowKeyPath,
  indexNowPayload,
  interpretDeploymentStatuses,
  parseGitNameStatus,
  parseSitemapLocs,
  pathsForChangedFiles,
  type ChangedFileOptions,
} from "@/lib/indexnow";
function fixture(slugs: Record<string, string>, preamble = "export const posts = [", tail = ""): string {
  const body = Object.entries(slugs)
    .map(([slug, content]) => `  {\n    slug: "${slug}",\n    content: "${content}",\n  },`)
    .join("\n");
  return `${preamble}\n${body}\n];\n${tail}`;
}

function options(partial: Partial<ChangedFileOptions> = {}): ChangedFileOptions {
  return {
    allPaths: ["/", "/about", "/blog/alpha", "/injuries/sirva"],
    blogSlugs: ["alpha", "beta"],
    injurySlugs: ["sirva"],
    ...partial,
  };
}

describe("IndexNow key", () => {
  test("the public key file matches the key the submitter sends", () => {
    assert.match(INDEXNOW_KEY, /^[a-zA-Z0-9-]{8,128}$/);
    assert.equal(readFileSync(indexNowKeyPath(), "utf8").trim(), INDEXNOW_KEY);
    assert.equal(indexNowKeyLocation(), `${INDEXNOW_SITE_URL}/${INDEXNOW_KEY}.txt`);
  });
});

describe("IndexNow payload", () => {
  test("keeps only canonical https URLs on the production host", () => {
    const payload = indexNowPayload([
      "/faq",
      `${INDEXNOW_SITE_URL}/about`,
      "/faq",
      "http://www.vaccineinjuries.org/blog",
      "https://example.com/faq",
      "/intake/thank-you",
      "/api/submit-lead",
      "not a url",
    ]);
    assert.equal(payload.host, INDEXNOW_HOST);
    assert.equal(payload.key, INDEXNOW_KEY);
    assert.deepEqual(payload.urlList, [
      `${INDEXNOW_SITE_URL}/faq`,
      `${INDEXNOW_SITE_URL}/about`,
    ]);
    assert.equal(canonicalIndexNowUrl("/"), INDEXNOW_SITE_URL);
  });

  test("reads loc elements out of a sitemap", () => {
    const xml = `<?xml version="1.0"?><urlset>
      <url><loc>https://www.vaccineinjuries.org/</loc></url>
      <url><loc> https://www.vaccineinjuries.org/faq </loc></url>
    </urlset>`;
    assert.deepEqual(parseSitemapLocs(xml), [
      "https://www.vaccineinjuries.org/",
      "https://www.vaccineinjuries.org/faq",
    ]);
  });
});

describe("content diffs", () => {
  test("a single edited slug is the only content change", () => {
    const before = fixture({ alpha: "one", beta: "two" });
    const after = fixture({ alpha: "one", beta: "three" });
    assert.deepEqual(diffContentSlugs(before, after), { changed: ["beta"], all: false });
  });

  test("added and removed slugs are reported", () => {
    const before = fixture({ alpha: "one" });
    const after = fixture({ alpha: "one", beta: "two" });
    assert.deepEqual(diffContentSlugs(before, after).changed.sort(), ["alpha", "beta"]);
    assert.deepEqual(diffContentSlugs(after, before).changed.sort(), ["alpha", "beta"]);
  });

  test("a shared preamble change marks the whole file", () => {
    const before = fixture({ alpha: "one", beta: "two" });
    const after = fixture({ alpha: "one", beta: "two" }, "export const items = [");
    const diff = diffContentSlugs(before, after);
    assert.equal(diff.all, true);
    assert.deepEqual(diff.changed, []);
  });

  test("editing the body of one real post does not flag its neighbors", () => {
    const source = readFileSync("src/content/blog/posts.ts", "utf8");
    const slug = blogPosts[3]?.slug;
    assert.ok(slug);
    const marker = "The basic seriousness standard";
    assert.equal(source.split(marker).length, 2);
    assert.ok(contentSlices(source).get(slug)?.includes(marker));
    const after = source.replace(marker, `${marker} today`);
    assert.deepEqual(diffContentSlugs(source, after), { changed: [slug], all: false });
  });

  test("the real content modules slice into one entry per slug", () => {
    const posts = contentSlices(readFileSync("src/content/blog/posts.ts", "utf8"));
    const hubs = contentSlices(readFileSync("src/content/injuries.ts", "utf8"));
    assert.deepEqual([...posts.keys()].sort(), blogPosts.map((post) => post.slug).sort());
    assert.deepEqual([...hubs.keys()].sort(), injuryHubs.map((hub) => hub.slug).sort());
  });
});

describe("paths for a push", () => {
  test("maps a page file to that page and ignores docs", () => {
    assert.deepEqual(pathsForChangedFiles(["src/app/faq/page.tsx", "README.md"], options()), ["/faq"]);
  });

  test("maps a new static page and skips the noindex thank-you page", () => {
    assert.deepEqual(
      pathsForChangedFiles(
        ["src/app/example/page.tsx", "src/app/intake/thank-you/page.tsx"],
        options(),
      ),
      ["/example"],
    );
  });

  test("a shared layout change submits every indexable path", () => {
    assert.deepEqual(pathsForChangedFiles(["src/app/layout.tsx"], options()), [
      "/",
      "/about",
      "/blog/alpha",
      "/injuries/sirva",
    ]);
  });

  test("an edited post submits that post and the blog index, not the other posts", () => {
    const before = fixture({ alpha: "one", beta: "two" });
    const after = fixture({ alpha: "one", beta: "three" });
    assert.deepEqual(
      pathsForChangedFiles(["src/content/blog/posts.ts"], options({ posts: { before, after } })),
      ["/blog", "/blog/beta"],
    );
  });

  test("a preamble edit submits every post in the file", () => {
    const before = fixture({ alpha: "one", beta: "two" });
    const after = fixture({ alpha: "one", beta: "two" }, "export const items = [");
    assert.deepEqual(
      pathsForChangedFiles(["src/content/blog/posts.ts"], options({ posts: { before, after } })),
      ["/blog", "/blog/alpha", "/blog/beta"],
    );
  });

  test("the blog template submits every post and not the index", () => {
    assert.deepEqual(pathsForChangedFiles(["src/app/blog/[slug]/page.tsx"], options()), [
      "/blog/alpha",
      "/blog/beta",
    ]);
  });

  test("parses git name-status including renames", () => {
    const output = ["M\tsrc/app/faq/page.tsx", "R100\tsrc/old.ts\tsrc/new.ts", "D\tsrc/gone.ts"].join("\n");
    const changes = parseGitNameStatus(output);
    assert.deepEqual(filesFromNameStatus(changes).sort(), ["src/app/faq/page.tsx", "src/gone.ts", "src/new.ts", "src/old.ts"]);
  });
});

describe("deployment status", () => {
  test("uses the newest status", () => {
    assert.equal(interpretDeploymentStatuses([{ state: "success" }, { state: "pending" }]), "success");
    assert.equal(interpretDeploymentStatuses([{ state: "in_progress" }]), "pending");
    assert.equal(interpretDeploymentStatuses([{ state: "failure" }]), "failure");
    assert.equal(interpretDeploymentStatuses([{ state: "error" }]), "failure");
    assert.equal(interpretDeploymentStatuses([]), "pending");
  });
});
