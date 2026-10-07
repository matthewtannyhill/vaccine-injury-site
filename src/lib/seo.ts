import type { Metadata } from "next";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  EDITORIAL_TEAM,
  EDITORIAL_TEAM_URL,
} from "@/lib/site";
import type { Source } from "@/lib/sources";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Absolute URL for a site path ("/" maps to the bare origin, no trailing slash). */
export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/**
 * Page-level metadata with canonical + Open Graph + Twitter tags.
 * Next.js replaces (does not merge) nested `openGraph`/`twitter` objects from parent
 * layouts, so every page should build them through this helper.
 */
export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
}: {
  title: string;
  description: string;
  path: string;
  /** Title used for social cards (defaults to `title`). */
  ogTitle?: string;
}): Metadata {
  const socialTitle = ogTitle ?? title;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
    },
  };
}

// ─── JSON-LD builders ─────────────────────────────────────────────────────────

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "en-US",
  publisher: { "@id": ORGANIZATION_ID },
};

export type FaqItem = { q: string; a: string };

/** FAQPage built from the exact strings rendered on the page. */
export function faqPageJsonLd(items: FaqItem[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: absoluteUrl(path),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function articleJsonLd({
  path,
  headline,
  description,
  datePublished,
  dateModified,
  author,
  image,
  section,
  sources,
}: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author?: string;
  image?: string;
  section?: string;
  sources?: Source[];
}) {
  const url = absoluteUrl(path);
  const authorName = author ?? EDITORIAL_TEAM;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: authorName,
      url: EDITORIAL_TEAM_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
      url: SITE_URL,
    },
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en-US",
    ...(image ? { image: [image] } : {}),
    ...(section ? { articleSection: section } : {}),
    ...(sources && sources.length
      ? {
          citation: sources.map((s) => ({
            "@type": "CreativeWork",
            name: s.title,
            url: s.url,
          })),
        }
      : {}),
  };
}
