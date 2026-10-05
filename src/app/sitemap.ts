import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog/posts";
import { SITE_URL } from "@/lib/site";

const staticPages: MetadataRoute.Sitemap = [
  { url: SITE_URL, priority: 1.0 },
  { url: `${SITE_URL}/about`, priority: 0.8 },
  { url: `${SITE_URL}/blog`, priority: 0.7 },
  { url: `${SITE_URL}/faq`, priority: 0.8 },
  { url: `${SITE_URL}/how-it-works`, priority: 0.8 },
  { url: `${SITE_URL}/intake`, priority: 0.9 },
  { url: `${SITE_URL}/disclaimer`, priority: 0.3 },
  { url: `${SITE_URL}/privacy-policy`, priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.7,
  }));

  return [...staticPages, ...posts];
}
