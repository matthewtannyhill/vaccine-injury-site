/**
 * IndexNow (https://www.indexnow.org/documentation).
 *
 * The key is public by design: search engines fetch `/{key}.txt` from the
 * site root to confirm ownership. It is not a secret.
 */

export const INDEXNOW_KEY = "4da1a21584d0f28085772faacec53536";
export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
/** Production origin IndexNow submissions must use. Not affected by NEXT_PUBLIC_SITE_URL. */
export const INDEXNOW_SITE_URL = "https://www.vaccineinjuries.org";
export const INDEXNOW_HOST = "www.vaccineinjuries.org";

export function indexNowKeyLocation(): string {
  return `${INDEXNOW_SITE_URL}/${INDEXNOW_KEY}.txt`;
}

export function indexNowKeyPath(): string {
  return `public/${INDEXNOW_KEY}.txt`;
}

export type IndexNowPayload = {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
};

/** Absolute production URL for a site path or an already-absolute URL on this host. */
export function canonicalIndexNowUrl(urlOrPath: string): string | null {
  const trimmed = urlOrPath.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith("/")) {
    if (!isIndexablePath(trimmed)) return null;
    return trimmed === "/" ? INDEXNOW_SITE_URL : `${INDEXNOW_SITE_URL}${trimmed}`;
  }
  try {
    const url = new URL(trimmed);
    if (url.protocol !== "https:") return null;
    if (url.host !== INDEXNOW_HOST) return null;
    if (!isIndexablePath(url.pathname)) return null;
    return url.href;
  } catch {
    return null;
  }
}

function isIndexablePath(pathname: string): boolean {
  if (pathname.startsWith("/api/") || pathname === "/api") return false;
  if (pathname === "/intake/thank-you" || pathname.startsWith("/intake/thank-you/")) return false;
  return true;
}

export function indexNowPayload(urls: string[]): IndexNowPayload {
  const urlList: string[] = [];
  const seen = new Set<string>();
  for (const url of urls) {
    const canonical = canonicalIndexNowUrl(url);
    if (!canonical || seen.has(canonical)) continue;
    seen.add(canonical);
    urlList.push(canonical);
  }
  return {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: indexNowKeyLocation(),
    urlList,
  };
}

/** IndexNow accepts at most 10,000 URLs per POST. */
export function chunkIndexNowUrls(urls: string[], size = 10_000): string[][] {
  const chunks: string[][] = [];
  for (let i = 0; i < urls.length; i += size) chunks.push(urls.slice(i, i + size));
  return chunks;
}

export function parseSitemapLocs(xml: string): string[] {
  const locs: string[] = [];
  for (const match of xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)) {
    const loc = match[1]?.trim();
    if (loc) locs.push(loc);
  }
  return locs;
}

/**
 * Latest GitHub deployment status for one deployment.
 * Statuses are newest-first, matching the GitHub API.
 */
export function interpretDeploymentStatuses(
  statuses: { state?: string }[],
): "success" | "failure" | "pending" {
  const state = statuses[0]?.state;
  if (state === "success") return "success";
  if (state === "failure" || state === "error") return "failure";
  return "pending";
}

export type ContentSliceDiff = {
  /** Slugs whose body changed, including slugs that were added or removed. */
  changed: string[];
  /** Shared preamble/tail changed, so every slug in the file (old and new) should be submitted. */
  all: boolean;
};

const SLUG_LINE = /^ {4}slug: "([^"]+)",$/gm;

/** Splits a content module into per-slug slices, using the `slug:` field lines. */
export function contentSlices(source: string): Map<string, string> {
  const matches = [...source.matchAll(SLUG_LINE)];
  const map = new Map<string, string>();
  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index ?? 0;
    let end = i + 1 < matches.length ? (matches[i + 1].index ?? source.length) : source.length;
    if (i === matches.length - 1) {
      const close = source.indexOf("\n];", start);
      if (close !== -1) end = close;
    }
    const slug = matches[i][1];
    if (slug) map.set(slug, source.slice(start, end));
  }
  return map;
}

export function diffContentSlugs(before: string | null, after: string | null): ContentSliceDiff {
  if (before == null && after == null) return { changed: [], all: false };
  if (before == null || after == null) {
    const only = contentSlices(before ?? after ?? "");
    return { changed: [...only.keys()], all: true };
  }

  const previous = contentSlices(before);
  const next = contentSlices(after);
  const changed = new Set<string>();
  for (const [slug, text] of next) {
    if (previous.get(slug) !== text) changed.add(slug);
  }
  for (const slug of previous.keys()) {
    if (!next.has(slug)) changed.add(slug);
  }

  const previousStart = previous.size ? before.indexOf('\n    slug: "') : 0;
  const nextStart = next.size ? after.indexOf('\n    slug: "') : 0;
  const previousClose = previous.size ? before.lastIndexOf("\n];") : before.length;
  const nextClose = next.size ? after.lastIndexOf("\n];") : after.length;
  const preambleChanged = before.slice(0, Math.max(previousStart, 0)) !== after.slice(0, Math.max(nextStart, 0));
  const tailChanged = before.slice(Math.max(previousClose, 0)) !== after.slice(Math.max(nextClose, 0));

  return { changed: [...changed], all: preambleChanged || tailChanged };
}

export type ChangedFileOptions = {
  /** Every indexable path, used when a shared layout/file changes. */
  allPaths: string[];
  blogSlugs: string[];
  injurySlugs: string[];
  /** File contents when `src/content/blog/posts.ts` changed. Null means the file did not exist at that rev. */
  posts?: { before: string | null; after: string | null };
  injuries?: { before: string | null; after: string | null };
};

type Effect =
  | { kind: "paths"; paths: string[] }
  | { kind: "all" }
  | { kind: "blog-posts" }
  | { kind: "injury-hubs" }
  | { kind: "blog-and-hubs" }
  | { kind: "sourced-pages" }
  | { kind: "cta" }
  | { kind: "posts-file" }
  | { kind: "injuries-file" };

/**
 * Files that change what a crawler would extract. Unknown files (tests, docs,
 * the IndexNow workflow itself) contribute no URLs, so a push that does not
 * touch pages does not ping IndexNow.
 */
const FILE_EFFECTS: Record<string, Effect> = {
  "src/app/page.tsx": { kind: "paths", paths: ["/"] },
  "src/app/about/page.tsx": { kind: "paths", paths: ["/about"] },
  "src/app/blog/page.tsx": { kind: "paths", paths: ["/blog"] },
  "src/app/blog/[slug]/page.tsx": { kind: "blog-posts" },
  "src/app/injuries/page.tsx": { kind: "paths", paths: ["/injuries"] },
  "src/app/injuries/[slug]/page.tsx": { kind: "injury-hubs" },
  "src/app/faq/page.tsx": { kind: "paths", paths: ["/faq"] },
  "src/app/faq/layout.tsx": { kind: "paths", paths: ["/faq"] },
  "src/app/how-it-works/page.tsx": { kind: "paths", paths: ["/how-it-works"] },
  "src/app/intake/page.tsx": { kind: "paths", paths: ["/intake"] },
  "src/app/intake/layout.tsx": { kind: "paths", paths: ["/intake"] },
  "src/app/disclaimer/page.tsx": { kind: "paths", paths: ["/disclaimer"] },
  "src/app/privacy-policy/page.tsx": { kind: "paths", paths: ["/privacy-policy"] },
  "src/app/layout.tsx": { kind: "all" },
  "src/app/globals.css": { kind: "all" },
  "src/components/Nav.tsx": { kind: "all" },
  "src/components/Footer.tsx": { kind: "all" },
  "src/components/JsonLd.tsx": { kind: "all" },
  "src/lib/seo.ts": { kind: "all" },
  "src/lib/site.ts": { kind: "all" },
  "next.config.ts": { kind: "all" },
  "src/components/PostContent.tsx": { kind: "blog-and-hubs" },
  "src/lib/markdown-blocks.ts": { kind: "blog-and-hubs" },
  "src/lib/dates.ts": { kind: "blog-and-hubs" },
  "src/components/FilingDeadlines.tsx": { kind: "injury-hubs" },
  "src/lib/faq-extract.ts": { kind: "blog-posts" },
  "src/lib/blog-jsonld.ts": { kind: "blog-posts" },
  "src/content/blog/posts.ts": { kind: "posts-file" },
  "src/content/injuries.ts": { kind: "injuries-file" },
  "src/content/faq.ts": { kind: "paths", paths: ["/", "/faq"] },
  "src/lib/sources.ts": { kind: "sourced-pages" },
  "src/components/SourcesList.tsx": { kind: "sourced-pages" },
  "src/components/CTABanner.tsx": { kind: "cta" },
  "public/llms.txt": { kind: "paths", paths: ["/llms.txt"] },
};

function routeFromAppFile(file: string): string | null {
  if (!file.startsWith("src/app/") || file.includes("[")) return null;
  if (file.endsWith("/page.tsx")) {
    const rel = file.slice("src/app/".length).replace(/\/page\.tsx$/, "");
    const path = `/${rel}`;
    if (path.startsWith("/api") || path.startsWith("/intake/thank-you")) return null;
    return path;
  }
  if (file.endsWith("/layout.tsx")) {
    const rel = file.slice("src/app/".length).replace(/\/layout\.tsx$/, "");
    if (!rel) return null;
    return `/${rel}`;
  }
  return null;
}

function blogPaths(slugs: string[]): string[] {
  return slugs.map((slug) => `/blog/${slug}`);
}

function injuryPaths(slugs: string[]): string[] {
  return slugs.map((slug) => `/injuries/${slug}`);
}

function addPaths(target: Set<string>, paths: string[]) {
  for (const path of paths) target.add(path);
}

/**
 * Site paths whose HTML changed between two commits. Paths are site-relative
 * (`/blog/some-slug`), deduped, and stable-sorted. Deleted slugs are included
 * so IndexNow can recrawl the removed URL.
 */
export function pathsForChangedFiles(files: string[], options: ChangedFileOptions): string[] {
  const paths = new Set<string>();

  for (const file of files) {
    const effect = FILE_EFFECTS[file];
    if (!effect) {
      const route = routeFromAppFile(file);
      if (route) paths.add(route);
      continue;
    }

    switch (effect.kind) {
      case "paths":
        addPaths(paths, effect.paths);
        break;
      case "all":
        addPaths(paths, options.allPaths);
        break;
      case "blog-posts":
        addPaths(paths, blogPaths(options.blogSlugs));
        break;
      case "injury-hubs":
        addPaths(paths, injuryPaths(options.injurySlugs));
        break;
      case "blog-and-hubs":
        addPaths(paths, blogPaths(options.blogSlugs));
        addPaths(paths, injuryPaths(options.injurySlugs));
        break;
      case "sourced-pages":
        addPaths(paths, ["/about", "/faq", "/disclaimer", ...blogPaths(options.blogSlugs), ...injuryPaths(options.injurySlugs)]);
        break;
      case "cta":
        addPaths(paths, ["/", "/about", "/how-it-works", "/injuries", ...blogPaths(options.blogSlugs)]);
        break;
      case "posts-file":
        addContentFilePaths(paths, "/blog", blogPaths, options.posts, options.blogSlugs);
        break;
      case "injuries-file":
        addContentFilePaths(paths, "/injuries", injuryPaths, options.injuries, options.injurySlugs);
        break;
    }
  }

  return [...paths].sort();
}

function addContentFilePaths(
  paths: Set<string>,
  indexPath: string,
  toPaths: (slugs: string[]) => string[],
  contents: { before: string | null; after: string | null } | undefined,
  catalogSlugs: string[],
) {
  const before = contents?.before ?? null;
  const after = contents?.after ?? null;
  // Contents missing (for example git show failed): submit the whole collection
  // rather than silently dropping a real content edit.
  if (before == null && after == null) {
    addPaths(paths, toPaths(catalogSlugs));
    paths.add(indexPath);
    return;
  }
  const diff = diffContentSlugs(before, after);
  const slugs = diff.all
    ? [...new Set([...contentSlugs(before), ...contentSlugs(after), ...catalogSlugs])]
    : diff.changed;
  if (slugs.length === 0) return;
  addPaths(paths, toPaths(slugs));
  paths.add(indexPath);
}

function contentSlugs(source: string | null): string[] {
  if (!source) return [];
  return [...contentSlices(source).keys()];
}

export type NameStatusChange = { path: string; oldPath?: string };

/** Parses `git diff --name-status` output, including renames. */
export function filesFromNameStatus(changes: NameStatusChange[]): string[] {
  const files = new Set<string>();
  for (const change of changes) {
    files.add(change.path);
    if (change.oldPath) files.add(change.oldPath);
  }
  return [...files];
}

export function parseGitNameStatus(output: string): NameStatusChange[] {
  const changes: NameStatusChange[] = [];
  for (const line of output.split("\n")) {
    if (!line.trim()) continue;
    const [status = "", first = "", second = ""] = line.split("\t");
    if (status.startsWith("R") || status.startsWith("C")) {
      if (second) changes.push({ path: second, oldPath: first });
      else if (first) changes.push({ path: first });
    } else if (first) {
      changes.push({ path: first });
    }
  }
  return changes;
}
