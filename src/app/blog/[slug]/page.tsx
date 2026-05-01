import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/content/blog/posts";
import CTABanner from "@/components/CTABanner";

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
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Convert markdown-ish content to simple paragraphs for V1
  const sections = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-blue-700 text-sm transition-colors"
          >
            ← Blog
          </Link>
        </div>
      </div>

      <section className="bg-blue-950 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-wide mb-3">{post.category}</p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">{post.title}</h1>
          <p className="text-blue-300 text-sm">{post.date}</p>
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
          <div className="text-gray-700 leading-relaxed space-y-4">
            {sections.map((section, i) => {
              if (section.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-3">
                    {section.replace("## ", "")}
                  </h2>
                );
              }
              if (section.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-semibold text-gray-900 mt-6 mb-2">
                    {section.replace("### ", "")}
                  </h3>
                );
              }
              if (section.startsWith("- ")) {
                const items = section.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i} className="list-disc pl-5 space-y-1">
                    {items.map((item, j) => (
                      <li key={j}>{item.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              if (section.startsWith("1. ")) {
                const items = section.split("\n").filter((l) => /^\d+\./.test(l));
                return (
                  <ol key={i} className="list-decimal pl-5 space-y-1">
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^\d+\.\s/, "")}</li>
                    ))}
                  </ol>
                );
              }
              return <p key={i}>{section}</p>;
            })}
          </div>

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
