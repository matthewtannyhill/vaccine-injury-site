import type { Metadata } from "next";
import Link from "next/link";
import { injuryHubs } from "@/content/injuries";
import JsonLd from "@/components/JsonLd";
import CTABanner from "@/components/CTABanner";
import { SOURCES } from "@/lib/sources";
import { absoluteUrl, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Vaccine Injury Guides",
  ogTitle: "Vaccine Injury Guides: SIRVA, GBS, and More | VaccineInjuries.org",
  description:
    "Plain-language guides to injuries that come up in vaccine compensation claims — SIRVA, Guillain-Barré syndrome, transverse myelitis, CIDP, brachial neuritis, anaphylaxis, ITP, and fainting injuries.",
  path: "/injuries",
});

export default function InjuriesIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Injury Guides", path: "/injuries" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Vaccine Injury Guides",
            itemListElement: injuryHubs.map((hub, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: hub.name,
              url: absoluteUrl(`/injuries/${hub.slug}`),
            })),
          },
        ]}
      />

      <section className="bg-blue-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Vaccine Injury Guides</h1>
          <p className="text-blue-200 text-lg">
            Plain-language explanations of injuries that come up in federal vaccine injury claims — what they are,
            how the rules treat them, and what records matter.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 text-gray-700 leading-relaxed mb-10">
            <p>
              <strong className="text-gray-900">Good to know:</strong> Serious vaccine injuries are uncommon, and
              most people have only mild, short-lived side effects. These guides are for people who are dealing
              with an injury and want to understand their options. They are general information, not medical or
              legal advice.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Each guide notes whether the injury appears on the federal{" "}
              <a
                href={SOURCES.injuryTable.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-800"
              >
                Vaccine Injury Table (42 CFR 100.3)
              </a>
              , quoting the regulation&apos;s time periods directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {injuryHubs.map((hub) => (
              <Link
                key={hub.slug}
                href={`/injuries/${hub.slug}`}
                className="group border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col"
              >
                <p
                  className={`text-xs font-medium uppercase tracking-wide mb-2 ${
                    hub.onTable ? "text-blue-700" : "text-gray-500"
                  }`}
                >
                  {hub.tableLabel}
                </p>
                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors mb-2 leading-snug">
                  {hub.name}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{hub.summary}</p>
                <p className="text-sm text-blue-700 font-medium mt-4">Read the guide →</p>
              </Link>
            ))}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mt-10">
            Don&apos;t see your injury here? Other injuries may still be claimed as off-Table injuries. Read{" "}
            <Link href="/blog/what-injuries-qualify-for-vaccine-compensation" className="text-blue-700 underline hover:text-blue-800">
              what injuries qualify for vaccine compensation
            </Link>{" "}
            or browse all{" "}
            <Link href="/blog" className="text-blue-700 underline hover:text-blue-800">
              articles
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
