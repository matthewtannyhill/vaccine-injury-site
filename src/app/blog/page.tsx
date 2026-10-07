import type { Metadata } from "next";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/content/blog/posts";

export const metadata: Metadata = pageMetadata({
  title: "Resources & Articles",
  ogTitle: "Vaccine Injury Compensation Resources & Articles | VaccineInjuries.org",
  description:
    "In-depth articles about vaccine injury compensation programs, eligibility, the claims process, and how to find legal help.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/blog" },
        ])}
      />
      <section className="bg-blue-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Resources &amp; Articles</h1>
          <p className="text-blue-200 text-lg">
            Clear, accurate information about vaccine injury compensation — written for people navigating this process for the first time.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...blogPosts].reverse().map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                {post.heroImage && (
                  <div className="relative w-full h-40 overflow-hidden">
                    <Image
                      src={post.heroImage.src}
                      alt={post.heroImage.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-blue-700 text-xs font-medium uppercase tracking-wide mb-2">{post.category}</p>
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <p className="text-sm text-gray-400">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
