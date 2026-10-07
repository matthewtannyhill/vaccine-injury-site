import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/content/blog/posts";
import { hubsForPost } from "@/content/injuries";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import PostContent from "@/components/PostContent";
import SourcesList from "@/components/SourcesList";
import { EDITORIAL_TEAM, SITE_NAME } from "@/lib/site";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/dates";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const path = `/blog/${post.slug}`;
  const images = post.heroImage ? [{ url: post.heroImage.src, alt: post.heroImage.alt }] : undefined;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: path },
    authors: [{ name: post.author ?? EDITORIAL_TEAM, url: "/about#editorial-team" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: path,
      type: "article",
      siteName: SITE_NAME,
      locale: "en_US",
      publishedTime: post.datePublished,
      modifiedTime: post.lastReviewed,
      authors: [post.author ?? EDITORIAL_TEAM],
      section: post.category,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title: post.title,
      description: post.excerpt,
      ...(images ? { images: images.map((i) => i.url) } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const author = post.author ?? EDITORIAL_TEAM;
  const reviewedLater = post.lastReviewed !== post.datePublished;
  const relatedHubs = hubsForPost(post.slug);

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            path,
            headline: post.title,
            description: post.excerpt,
            datePublished: post.datePublished,
            dateModified: post.lastReviewed,
            author,
            image: post.heroImage?.src,
            section: post.category,
            sources: post.sources,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/blog" },
            { name: post.title, path },
          ]),
        ]}
      />

      <div className="bg-white px-4 pt-6">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-xs text-gray-500">
            <ol className="flex items-center flex-wrap gap-1.5">
              <li>
                <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
              </li>
              <li className="text-gray-400" aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-blue-700 transition-colors">Resources</Link>
              </li>
              <li className="text-gray-400" aria-hidden="true">/</li>
              <li className="text-gray-700 truncate">{post.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="bg-blue-950 text-white py-12 px-4 mt-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-wide mb-3">{post.category}</p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">{post.title}</h1>
          <p className="text-blue-300 text-sm">
            By{" "}
            <Link href="/about#editorial-team" className="underline hover:text-white">
              {author}
            </Link>
            {" · "}Published <time dateTime={post.datePublished}>{post.date}</time>
            {reviewedLater && (
              <>
                {" · "}Last reviewed <time dateTime={post.lastReviewed}>{formatDate(post.lastReviewed)}</time>
              </>
            )}
          </p>
        </div>
      </section>

      {post.heroImage && (
        <div className="relative w-full h-64 md:h-80 overflow-hidden">
          <Image
            src={post.heroImage.src}
            alt={post.heroImage.alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-blue-950/20" />
        </div>
      )}

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <PostContent content={post.content} />

          {relatedHubs.length > 0 && (
            <aside aria-labelledby="related-guides-heading" className="mt-12 border border-blue-100 bg-blue-50 rounded-lg p-6">
              <h2 id="related-guides-heading" className="text-lg font-semibold text-gray-900 mb-3">
                Related injury guides
              </h2>
              <ul className="space-y-1 text-sm">
                {relatedHubs.map((hub) => (
                  <li key={hub.slug}>
                    <Link href={`/injuries/${hub.slug}`} className="text-blue-700 hover:underline">
                      {hub.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm">
                <Link href="/injuries" className="text-blue-700 hover:underline font-medium">
                  See all injury guides →
                </Link>
              </p>
            </aside>
          )}

          <div className="mt-12 pt-8 border-t border-gray-200">
            <SourcesList
              sources={post.sources}
              intro="Official program, court, and government sources used for this article:"
            />
          </div>

          <aside className="mt-10 bg-gray-50 rounded-lg p-6 text-sm text-gray-600 leading-relaxed">
            <p className="font-semibold text-gray-900 mb-2">About this article</p>
            <p>
              Written and reviewed by the {author}. {SITE_NAME} is an independent educational site — not a law
              firm or government agency — and this article is general information, not legal or medical advice.
              Talk to your doctor about vaccine decisions and symptoms, and to a qualified attorney about your
              specific situation.{" "}
              <Link href="/about#editorial-team" className="text-blue-700 hover:underline">
                Learn about our editorial team and sources
              </Link>
              .
            </p>
          </aside>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/blog" className="text-blue-700 hover:underline text-sm font-medium">
              ← Back to all articles
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
