import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog/posts";
import { SITE_URL, CORE_PAGES_LAST_MODIFIED } from "@/lib/site";

// lastModified values are ISO dates (YYYY-MM-DD). Bump CORE_PAGES_LAST_MODIFIED in
// src/lib/site.ts when core pages change; blog posts use their own lastReviewed date.
const staticPages: MetadataRoute.Sitemap = [
  { url: SITE_URL, lastModified: CORE_PAGES_LAST_MODIFIED, priority: 1.0 },
  { url: `${SITE_URL}/about`, lastModified: CORE_PAGES_LAST_MODIFIED, priority: 0.8 },
  { url: `${SITE_URL}/blog`, lastModified: CORE_PAGES_LAST_MODIFIED, priority: 0.7 },
  { url: `${SITE_URL}/faq`, lastModified: CORE_PAGES_LAST_MODIFIED, priority: 0.8 },
  { url: `${SITE_URL}/how-it-works`, lastModified: CORE_PAGES_LAST_MODIFIED, priority: 0.8 },
  { url: `${SITE_URL}/intake`, lastModified: CORE_PAGES_LAST_MODIFIED, priority: 0.9 },
  { url: `${SITE_URL}/disclaimer`, lastModified: CORE_PAGES_LAST_MODIFIED, priority: 0.3 },
  { url: `${SITE_URL}/privacy-policy`, lastModified: CORE_PAGES_LAST_MODIFIED, priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.lastReviewed ?? post.datePublished,
    priority: 0.7,
  }));

  return [...staticPages, ...posts];
}
