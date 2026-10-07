import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { injuryHubs, getInjuryHub } from "@/content/injuries";
import { blogPosts } from "@/content/blog/posts";
import JsonLd from "@/components/JsonLd";
import PostContent, { renderInline } from "@/components/PostContent";
import SourcesList from "@/components/SourcesList";
import FilingDeadlines from "@/components/FilingDeadlines";
import { EDITORIAL_TEAM, SITE_NAME } from "@/lib/site";
import { SOURCES } from "@/lib/sources";
import { breadcrumbJsonLd, conditionPageJsonLd, faqPageJsonLd, pageMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/dates";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return injuryHubs.map((hub) => ({ slug: hub.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hub = getInjuryHub(slug);
  if (!hub) return {};
  return pageMetadata({
    title: hub.metaTitle,
    ogTitle: `${hub.metaTitle} | ${SITE_NAME}`,
    description: hub.description,
    path: `/injuries/${hub.slug}`,
  });
}

export default async function InjuryHubPage({ params }: Props) {
  const { slug } = await params;
  const hub = getInjuryHub(slug);
  if (!hub) notFound();

  const path = `/injuries/${hub.slug}`;
  const related = hub.relatedPosts
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter((p): p is (typeof blogPosts)[number] => Boolean(p));
  const otherHubs = injuryHubs.filter((h) => h.slug !== hub.slug);

  return (
    <>
      <JsonLd
        data={[
          conditionPageJsonLd({
            path,
            name: hub.name,
            description: hub.description,
            condition: hub.name,
            datePublished: hub.datePublished,
            lastReviewed: hub.lastReviewed,
            sources: hub.sources,
          }),
          faqPageJsonLd(hub.faqs, path),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Injury Guides", path: "/injuries" },
            { name: hub.shortName, path },
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
                <Link href="/injuries" className="hover:text-blue-700 transition-colors">Injury Guides</Link>
              </li>
              <li className="text-gray-400" aria-hidden="true">/</li>
              <li className="text-gray-700 truncate">{hub.shortName}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="bg-blue-950 text-white py-12 px-4 mt-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-wide mb-3">Injury Guide</p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">{hub.name}</h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-4">{hub.summary}</p>
          <p className="text-blue-300 text-sm">
            By{" "}
            <Link href="/about#editorial-team" className="underline hover:text-white">
              {EDITORIAL_TEAM}
            </Link>
            {" · "}Last reviewed <time dateTime={hub.lastReviewed}>{formatDate(hub.lastReviewed)}</time>
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 text-gray-700 leading-relaxed">
            <p>
              <strong className="text-gray-900">Good to know:</strong> {hub.uncommonNote}
            </p>
            <p className="mt-2 text-sm text-gray-600">
              This guide is general information, not medical or legal advice. If you have symptoms, please talk to
              a doctor.
            </p>
          </div>

          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="text-2xl font-bold text-gray-900 mb-4">
              What is {hub.term}?
            </h2>
            <PostContent content={hub.overview} />
          </section>

          <section aria-labelledby="symptoms-heading">
            <h2 id="symptoms-heading" className="text-2xl font-bold text-gray-900 mb-4">
              Typical symptoms
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
              {hub.symptoms.map((item) => (
                <li key={item}>{renderInline(item)}</li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">When symptoms typically start</h3>
            <p className="text-gray-700 leading-relaxed">{renderInline(hub.onset)}</p>
          </section>

          <section aria-labelledby="table-heading">
            <h2 id="table-heading" className="text-2xl font-bold text-gray-900 mb-4">
              Is {hub.term} on the Vaccine Injury Table?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">{renderInline(hub.tableIntro)}</p>

            {hub.tableEntries.length > 0 && (
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border border-gray-200">
                  <caption className="text-left text-xs text-gray-500 mb-2">
                    Quoted from the Vaccine Injury Table,{" "}
                    <a
                      href={SOURCES.injuryTable.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline hover:text-blue-800"
                    >
                      42 CFR 100.3
                    </a>
                  </caption>
                  <thead className="bg-gray-50 text-gray-900">
                    <tr>
                      <th scope="col" className="text-left font-semibold p-3 border-b border-gray-200">
                        Vaccine
                      </th>
                      <th scope="col" className="text-left font-semibold p-3 border-b border-gray-200 w-1/3">
                        Time period for first symptom
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {hub.tableEntries.map((entry) => (
                      <tr key={entry.vaccines} className="border-b border-gray-100 align-top">
                        <td className="p-3 text-gray-700">{entry.vaccines}</td>
                        <td className="p-3 text-gray-700 whitespace-nowrap sm:whitespace-normal">{entry.window}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {hub.tableQuote && (
              <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-600 mb-4">
                &ldquo;{hub.tableQuote}&rdquo;
                <span className="block not-italic text-xs text-gray-500 mt-1">— 42 CFR 100.3(c)</span>
              </blockquote>
            )}

            <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
              {hub.tableNotes.map((note) => (
                <li key={note}>{renderInline(note)}</li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              New to these terms? Read{" "}
              <Link
                href="/blog/difference-between-table-injury-and-off-table-injury"
                className="text-blue-700 underline hover:text-blue-800"
              >
                the difference between Table and off-Table injuries
              </Link>
              .
            </p>
          </section>

          <FilingDeadlines />

          <section aria-labelledby="records-heading">
            <h2 id="records-heading" className="text-2xl font-bold text-gray-900 mb-4">
              Records that matter
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You don&apos;t need to have everything gathered before asking questions. These are the records that
              typically help show what happened and when:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
              {hub.records.map((item) => (
                <li key={item}>{renderInline(item)}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {hub.faqs.map((item) => (
                <div key={item.q}>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {related.length > 0 && (
            <section aria-labelledby="related-heading">
              <h2 id="related-heading" className="text-2xl font-bold text-gray-900 mb-4">
                Related articles
              </h2>
              <ul className="space-y-2">
                {related.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="text-blue-700 hover:underline">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="pt-8 border-t border-gray-200">
            <SourcesList
              sources={hub.sources}
              intro="Official regulations and government health sources used for this guide:"
            />
          </div>

          <aside className="bg-gray-50 rounded-lg p-6 text-sm text-gray-600 leading-relaxed">
            <p className="font-semibold text-gray-900 mb-2">Not legal or medical advice</p>
            <p>
              Written and reviewed by the {EDITORIAL_TEAM}. {SITE_NAME} is an independent educational site — not a
              law firm or government agency. This guide explains how federal programs describe this injury; it
              can&apos;t tell you whether you have a claim, and it isn&apos;t a diagnosis. Talk to your doctor about
              symptoms and treatment, and to a qualified attorney about your situation.{" "}
              <Link href="/about#editorial-team" className="text-blue-700 hover:underline">
                Learn about our editorial team and sources
              </Link>
              .
            </p>
          </aside>

          <section className="border border-blue-100 bg-blue-50 rounded-lg p-6 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Want to talk through your situation?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you&apos;re dealing with an injury like this after a vaccine, you can request a free,
              no-obligation case review. If your situation may qualify, we can connect you with an independent
              attorney who handles vaccine injury claims.
            </p>
            <Link
              href="/intake"
              className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-800 transition-colors"
            >
              Request a Free Case Review
            </Link>
          </section>

          <nav aria-labelledby="other-guides-heading" className="pt-8 border-t border-gray-200">
            <h2 id="other-guides-heading" className="text-lg font-semibold text-gray-900 mb-3">
              Other injury guides
            </h2>
            <ul className="flex flex-wrap gap-2 text-sm">
              {otherHubs.map((h) => (
                <li key={h.slug}>
                  <Link
                    href={`/injuries/${h.slug}`}
                    className="inline-block border border-gray-200 rounded-full px-3 py-1 text-gray-700 hover:border-blue-300 hover:text-blue-700 transition-colors"
                  >
                    {h.shortName}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              <Link href="/injuries" className="text-blue-700 hover:underline text-sm font-medium">
                ← All injury guides
              </Link>
            </p>
          </nav>
        </div>
      </section>
    </>
  );
}
