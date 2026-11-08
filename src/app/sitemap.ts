import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { indexablePages } from "@/lib/site-urls";

// lastModified values are ISO dates (YYYY-MM-DD). Bump CORE_PAGES_LAST_MODIFIED in
// src/lib/site.ts when core pages change; blog posts and injury hubs use their own
// lastReviewed date. The path list lives in src/lib/site-urls.ts so IndexNow submits
// the same URLs the sitemap advertises.
export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePages().map((page) => ({
    url: page.path === "/" ? SITE_URL : `${SITE_URL}${page.path}`,
    lastModified: page.lastModified,
    priority: page.priority,
  }));
}
