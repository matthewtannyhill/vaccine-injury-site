import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/blog/posts";
import { injuryHubs } from "@/content/injuries";
import {
  TABLE_RELATED_POSTS,
  VACCINE_TABLE_DESCRIPTION,
  VACCINE_TABLE_PATH,
  VACCINE_TABLE_PUBLISHED,
  VACCINE_TABLE_REVIEWED,
  VACCINE_TABLE_TITLE,
  tableFaqs,
  tableNotes,
  vaccineTableCategories,
  vaccineTableSources,
} from "@/content/vaccine-injury-table";
import JsonLd from "@/components/JsonLd";
import SourcesList from "@/components/SourcesList";
import { EDITORIAL_TEAM, SITE_NAME } from "@/lib/site";
import { SOURCES } from "@/lib/sources";
import { formatDate } from "@/lib/dates";
import { breadcrumbJsonLd, faqPageJsonLd, pageMetadata, referenceArticleJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: { absolute: VACCINE_TABLE_TITLE },
  description: VACCINE_TABLE_DESCRIPTION,
  path: VACCINE_TABLE_PATH,
});

const SHORT_LABEL: Record<string, string> = {
  tetanus: "Tetanus toxoid",
  pertussis: "Pertussis",
  mmr: "MMR components",
  rubella: "Rubella",
  measles: "Measles",
  opv: "Oral polio",
  ipv: "Inactivated polio",
  "hepatitis-b": "Hepatitis B",
  hib: "Hib",
  varicella: "Varicella",
  rotavirus: "Rotavirus",
  pneumococcal: "Pneumococcal conjugate",
  "hepatitis-a": "Hepatitis A",
  influenza: "Seasonal influenza",
  meningococcal: "Meningococcal",
  hpv: "HPV",
  "new-vaccine": "New covered vaccines",
};

const linkClass = "text-blue-700 underline hover:text-blue-800";

export default function VaccineInjuryTablePage() {
  const relatedPosts = TABLE_RELATED_POSTS.map((slug) => blogPosts.find((post) => post.slug === slug)).filter(
    (post): post is (typeof blogPosts)[number] => Boolean(post),
  );

  return (
    <>
      <JsonLd
        data={[
          referenceArticleJsonLd({
            path: VACCINE_TABLE_PATH,
            headline: VACCINE_TABLE_TITLE,
            description: VACCINE_TABLE_DESCRIPTION,
            datePublished: VACCINE_TABLE_PUBLISHED,
            dateModified: VACCINE_TABLE_REVIEWED,
            sources: vaccineTableSources,
          }),
          faqPageJsonLd(tableFaqs, VACCINE_TABLE_PATH),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Vaccine Injury Table", path: VACCINE_TABLE_PATH },
          ]),
        ]}
      />

      <div className="bg-white px-4 pt-6">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-xs text-gray-500">
            <ol className="flex items-center flex-wrap gap-1.5">
              <li>
                <Link href="/" className="hover:text-blue-700 transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-400" aria-hidden="true">
                /
              </li>
              <li className="text-gray-700">Vaccine Injury Table</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="bg-blue-950 text-white py-12 px-4 mt-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-wide mb-3">Reference</p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Vaccine Injury Table</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            The Vaccine Injury Table, in{" "}
            <a href={SOURCES.injuryTable.url} className="underline hover:text-white">
              42 CFR 100.3
            </a>
            , lists vaccine categories, the injuries associated with them, and the time period for the first symptom.
            When the vaccine, the injury, and that timing all fit the Table, including its definitions, the claim is
            called on-Table, and the law presumes the vaccine caused the injury unless another cause is shown. An
            injury that is not listed, or that starts outside the time period, is off-Table. Off-Table claims can
            still be filed, with medical proof that the vaccine caused the injury.
          </p>
          <p className="text-blue-100 text-lg leading-relaxed mt-4">
            COVID-19 vaccines are not on this Table. HRSA directs those claims to the{" "}
            <a href={SOURCES.hrsaCicp.url} className="underline hover:text-white">
              Countermeasures Injury Compensation Program (CICP)
            </a>
            .
          </p>
          <p className="text-blue-300 text-sm mt-4">
            By{" "}
            <Link href="/about#editorial-team" className="underline hover:text-white">
              {EDITORIAL_TEAM}
            </Link>
            {" · "}Last reviewed <time dateTime={VACCINE_TABLE_REVIEWED}>{formatDate(VACCINE_TABLE_REVIEWED)}</time>
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 text-gray-700 leading-relaxed">
            <p>
              <strong className="text-gray-900">A matching onset window is one requirement.</strong>{" "}
              The injury also
              has to meet the Table&apos;s definition. The petition has to meet the severity rule in{" "}
              <a href={SOURCES.usc300aa11.url} className={linkClass}>
                42 U.S.C. § 300aa-11(c)(1)(D)
              </a>
              : residual effects for more than 6 months after vaccination, or death from the vaccine, or inpatient
              hospitalization and surgical intervention. It also has to be filed on time. Under{" "}
              <a href={SOURCES.usc300aa13.url} className={linkClass}>
                42 U.S.C. § 300aa-13
              </a>
              , compensation depends on proof of the petition&apos;s requirements by a preponderance of the evidence,
              and on there not being a preponderance of the evidence that the injury is due to factors unrelated to
              the vaccine. The result in another case does not predict this one.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              This page is general information, not legal or medical advice. {SITE_NAME} is not a law firm.
            </p>
          </div>

          <nav aria-label="On this page">
            <h2 className="text-sm font-semibold text-gray-900 mb-2">On this page</h2>
            <ul className="flex flex-wrap gap-2 text-sm">
              {[
                ["#deadlines", "Filing deadlines"],
                ["#table", "The Table"],
                ["#qualifications", "Qualifications"],
                ["#related", "Guides and articles"],
                ["#questions", "Questions"],
                ["/glossary", "Glossary"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-block border border-gray-200 rounded-full px-3 py-1 text-gray-700 hover:border-blue-300 hover:text-blue-700"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section id="deadlines" aria-labelledby="deadlines-heading">
            <h2 id="deadlines-heading" className="text-2xl font-bold text-gray-900 mb-4">
              Filing deadlines
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For a vaccine administered after October 1, 1988,{" "}
              <a href={SOURCES.usc300aa16.url} className={linkClass}>
                42 U.S.C. § 300aa-16
              </a>{" "}
              sets the limits:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
              <li>
                <strong>Injury:</strong>{" "}
                the petition may not be filed after 36 months from the first symptom or
                manifestation of onset or of the significant aggravation of the injury.
              </li>
              <li>
                <strong>Death:</strong>{" "}
                the petition may not be filed after 24 months from the death, and it may not
                be filed more than 48 months after the first symptom of the injury from which the death resulted.
              </li>
              <li>
                <strong>A Table revision</strong>{" "}
                that newly allows a petition, or that significantly increases the
                likelihood of compensation, gives 2 years from the revision&apos;s effective date to file. Compensation
                under that revision is not available for an injury or death that occurred more than 8 years before the
                revision.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              A report to{" "}
              <a href={SOURCES.vaers.url} className={linkClass}>
                VAERS
              </a>{" "}
              is not a petition. COVID-19 countermeasure requests follow the CICP&apos;s own deadline, generally one
              year from the date the countermeasure was administered or used. See the guide to{" "}
              <Link href="/blog/how-long-do-i-have-to-file-a-vaccine-injury-claim" className={linkClass}>
                vaccine injury filing deadlines
              </Link>
              .
            </p>
          </section>

          <section id="table" aria-labelledby="table-heading" className="scroll-mt-20">
            <h2 id="table-heading" className="text-2xl font-bold text-gray-900 mb-4">
              The Table, by vaccine category
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The rows below are copied from the current eCFR text of 42 CFR 100.3. eCFR records January 3, 2022 as
              the latest substantive amendment of that section. The time-period column uses the regulation&apos;s
              words, including &quot;Not applicable&quot; where the Table uses that phrase. Linked injury names go to a
              guide on this site. The official text is on{" "}
              <a href={SOURCES.injuryTable.url} className={linkClass}>
                eCFR
              </a>
              .
            </p>
            <ul className="flex flex-wrap gap-2 text-sm mb-8">
              {vaccineTableCategories.map((category) => (
                <li key={category.id}>
                  <a href={`#${category.id}`} className="text-blue-700 hover:underline">
                    {SHORT_LABEL[category.id] ?? category.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {vaccineTableCategories.map((category) => (
            <section key={category.id} id={category.id} aria-labelledby={`${category.id}-heading`} className="scroll-mt-20">
              <h3 id={`${category.id}-heading`} className="text-lg font-semibold text-gray-900 mb-3 leading-snug">
                {category.name}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200">
                  <caption className="sr-only">
                    {category.name}. Time period for first symptom or manifestation of onset or of significant
                    aggravation after vaccine administration, copied from 42 CFR 100.3.
                  </caption>
                  <thead className="bg-gray-50 text-gray-900">
                    <tr>
                      <th scope="col" className="text-left font-semibold p-3 border-b border-gray-200">
                        Illness, disability, injury, or condition
                      </th>
                      <th scope="col" className="text-left font-semibold p-3 border-b border-gray-200 w-2/5">
                        Time period for first symptom
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.rows.map((entry) => (
                      <tr key={`${entry.injury}-${entry.qualifier ?? ""}-${entry.window}`} className="border-b border-gray-100 align-top">
                        <td className="p-3 text-gray-700">
                          {entry.href ? (
                            <Link href={entry.href} className={linkClass}>
                              {entry.injury}
                            </Link>
                          ) : (
                            entry.injury
                          )}
                          {entry.qualifier && <span className="block text-gray-600 mt-1">{entry.qualifier}</span>}
                        </td>
                        <td className="p-3 text-gray-700">{entry.window}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-12 mt-12">
          <section id="qualifications" aria-labelledby="qualifications-heading" className="scroll-mt-20">
            <h2 id="qualifications-heading" className="text-2xl font-bold text-gray-900 mb-4">
              Qualifications that change whether a row applies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Paragraph (c) of 42 CFR 100.3 defines the injuries named above. The notes below track the parts that
              most often decide whether a petition is on-Table. The regulation&apos;s full text controls.
            </p>
            <div className="space-y-10">
              {tableNotes.map((note) => (
                <section key={note.id} id={note.id} aria-labelledby={`${note.id}-heading`} className="scroll-mt-20">
                  <h3 id={`${note.id}-heading`} className="text-xl font-semibold text-gray-900 mb-3">
                    {note.title}
                  </h3>
                  {note.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="text-gray-700 leading-relaxed mb-3">
                      {paragraph}
                    </p>
                  ))}
                  {note.quote && (
                    <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-600 mb-3">
                      &ldquo;{note.quote.text}&rdquo;
                      <span className="block not-italic text-xs text-gray-500 mt-1">— {note.quote.cite}</span>
                    </blockquote>
                  )}
                  {note.links && note.links.length > 0 && (
                    <ul className="text-sm space-y-1">
                      {note.links.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className={linkClass}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </section>

          <section id="related" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-2xl font-bold text-gray-900 mb-4">
              Injury guides and related articles
            </h2>
            <ul className="flex flex-wrap gap-2 text-sm mb-6">
              {injuryHubs.map((hub) => (
                <li key={hub.slug}>
                  <Link
                    href={`/injuries/${hub.slug}`}
                    className="inline-block border border-gray-200 rounded-full px-3 py-1 text-gray-700 hover:border-blue-300 hover:text-blue-700"
                  >
                    {hub.shortName}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {relatedPosts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className={linkClass}>
                    {post.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/glossary" className={linkClass}>
                  VICP and CICP glossary
                </Link>
              </li>
              <li>
                <Link href="/injuries" className={linkClass}>
                  All injury guides
                </Link>
              </li>
            </ul>
          </section>

          <section id="questions" aria-labelledby="questions-heading">
            <h2 id="questions-heading" className="text-2xl font-bold text-gray-900 mb-4">
              Questions
            </h2>
            <div className="space-y-6">
              {tableFaqs.map((item) => (
                <div key={item.q}>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <SourcesList
            sources={vaccineTableSources}
            intro="The Table rows were checked against the current eCFR text of 42 CFR 100.3. Deadlines, severity, and the compensation standard are from the Vaccine Act sections linked here. COVID-19 program placement is from HRSA."
          />

          <aside className="bg-gray-50 rounded-lg p-6 text-sm text-gray-600 leading-relaxed">
            <p className="font-semibold text-gray-900 mb-2">Not legal or medical advice</p>
            <p>
              Written and reviewed by the {EDITORIAL_TEAM}. {SITE_NAME} is an independent educational site. It is not
              a law firm or a government agency. This page copies the federal Table so it is easier to read. It cannot
              tell you whether a petition meets the Table. Talk with a doctor about symptoms, and with a qualified
              attorney about your situation.{" "}
              <Link href="/about#editorial-team" className={linkClass}>
                How this site reviews sources
              </Link>
              .
            </p>
          </aside>

          <section className="border border-blue-100 bg-blue-50 rounded-lg p-6 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Want to talk with an attorney?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can submit your information and we can connect you with an independent attorney who handles vaccine
              injury claims. Submitting is free. It does not create an attorney-client relationship, and we do not
              decide whether a petition meets the Table.
            </p>
            <Link
              href="/intake"
              className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-800 transition-colors"
            >
              Get Connected With an Attorney
            </Link>
          </section>
        </div>
      </section>
    </>
  );
}
