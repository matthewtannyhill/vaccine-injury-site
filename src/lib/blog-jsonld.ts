import type { BlogPost } from "@/content/blog/posts";
import { extractFaqItems } from "@/lib/faq-extract";
import { EDITORIAL_TEAM } from "@/lib/site";
import { articleJsonLd, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";

/** BlogPosting + BreadcrumbList, plus FAQPage when the post has a visible Q&A section. */
export function blogPageJsonLd(post: BlogPost): object[] {
  const path = `/blog/${post.slug}`;
  const faqs = extractFaqItems(post.content);
  return [
    articleJsonLd({
      path,
      headline: post.title,
      description: post.excerpt,
      datePublished: post.datePublished,
      dateModified: post.lastReviewed,
      author: post.author ?? EDITORIAL_TEAM,
      image: post.heroImage?.src,
      section: post.category,
      sources: post.sources,
    }),
    ...(faqs.length > 0 ? [faqPageJsonLd(faqs, path)] : []),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/blog" },
      { name: post.title, path },
    ]),
  ];
}
