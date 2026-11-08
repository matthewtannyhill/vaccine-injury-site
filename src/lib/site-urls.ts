import { blogPosts } from "@/content/blog/posts";
import { injuryHubs } from "@/content/injuries";
import { CORE_PAGES_LAST_MODIFIED } from "@/lib/site";

export type IndexablePage = {
  path: string;
  lastModified: string;
  priority: number;
};

/**
 * Canonical indexable paths, in sitemap order. `/intake/thank-you` is omitted
 * (noindex). Adding a blog post or injury hub here is enough for the sitemap
 * and for IndexNow's full-site list to pick it up.
 */
export function indexablePages(): IndexablePage[] {
  const staticPages: IndexablePage[] = [
    { path: "/", lastModified: CORE_PAGES_LAST_MODIFIED, priority: 1.0 },
    { path: "/about", lastModified: CORE_PAGES_LAST_MODIFIED, priority: 0.8 },
    { path: "/blog", lastModified: CORE_PAGES_LAST_MODIFIED, priority: 0.7 },
    { path: "/injuries", lastModified: CORE_PAGES_LAST_MODIFIED, priority: 0.8 },
    { path: "/faq", lastModified: CORE_PAGES_LAST_MODIFIED, priority: 0.8 },
    { path: "/how-it-works", lastModified: CORE_PAGES_LAST_MODIFIED, priority: 0.8 },
    { path: "/intake", lastModified: CORE_PAGES_LAST_MODIFIED, priority: 0.9 },
    { path: "/disclaimer", lastModified: CORE_PAGES_LAST_MODIFIED, priority: 0.3 },
    { path: "/privacy-policy", lastModified: CORE_PAGES_LAST_MODIFIED, priority: 0.3 },
  ];

  const hubs: IndexablePage[] = injuryHubs.map((hub) => ({
    path: `/injuries/${hub.slug}`,
    lastModified: hub.lastReviewed,
    priority: 0.8,
  }));

  const posts: IndexablePage[] = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    lastModified: post.lastReviewed ?? post.datePublished,
    priority: 0.7,
  }));

  return [...staticPages, ...hubs, ...posts];
}

export function indexablePaths(): string[] {
  return indexablePages().map((page) => page.path);
}
