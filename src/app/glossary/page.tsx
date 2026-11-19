import type { Metadata } from "next";
import Link from "next/link";
import {
  GLOSSARY_DESCRIPTION,
  GLOSSARY_PATH,
  GLOSSARY_PUBLISHED,
  GLOSSARY_REVIEWED,
  GLOSSARY_SET_NAME,
  GLOSSARY_TITLE,
  glossaryDefinitionText,
  glossaryTermsSorted,
  uniqueGlossarySources,
} from "@/content/glossary";
import JsonLd from "@/components/JsonLd";
import SourcesList from "@/components/SourcesList";
import { EDITORIAL_TEAM, SITE_NAME } from "@/lib/site";
import { formatDate } from "@/lib/dates";
import { breadcrumbJsonLd, definedTermSetJsonLd, pageMetadata, referenceWebPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: { absolute: GLOSSARY_TITLE },
  description: GLOSSARY_DESCRIPTION,
  path: GLOSSARY_PATH,
});

const linkClass = "text-blue-700 underline hover:text-blue-800";

export default function GlossaryPage() {
  const terms = glossaryTermsSorted();
  const sources = uniqueGlossarySources();
  const letters = [...new Set(terms.map((term) => term.name[0]?.toUpperCase() ?? ""))].filter(Boolean);

  return (
    <>
      <JsonLd
        data={[
          referenceWebPageJsonLd({
            path: GLOSSARY_PATH,
            name: GLOSSARY_TITLE,
            description: GLOSSARY_DESCRIPTION,
            datePublished: GLOSSARY_PUBLISHED,
            dateModified: GLOSSARY_REVIEWED,
            sources,
          }),
          definedTermSetJsonLd(
            terms.map((term) => ({
              id: term.id,
              name: term.name,
              description: glossaryDefinitionText(term),
              alternateName: term.alternateName,
            })),
            GLOSSARY_PATH,
            GLOSSARY_SET_NAME,
          ),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Glossary", path: GLOSSARY_PATH },
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
              <li className="text-gray-700">Glossary</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="bg-blue-950 text-white py-12 px-4 mt-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-wide mb-3">Reference</p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">VICP glossary</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            These are short definitions of terms that come up in VICP and CICP claims, including the Vaccine Injury
            Table, on-Table and off-Table claims, filing deadlines, and the $250,000 statutory amounts for pain and
            suffering and for a vaccine-related death. Each definition follows the statute, regulation, court rule, or
            HRSA page linked under it.
          </p>
          <p className="text-blue-300 text-sm mt-4">
            By{" "}
            <Link href="/about#editorial-team" className="underline hover:text-white">
              {EDITORIAL_TEAM}
            </Link>
            {" · "}Last reviewed <time dateTime={GLOSSARY_REVIEWED}>{formatDate(GLOSSARY_REVIEWED)}</time>
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Glossary letters" className="mb-8">
            <ol className="flex flex-wrap gap-2 text-sm">
              {letters.map((letter) => (
                <li key={letter}>
                  <a
                    href={`#letter-${letter}`}
                    className="inline-flex w-9 h-9 items-center justify-center border border-gray-200 rounded-md font-medium text-gray-700 hover:border-blue-300 hover:text-blue-700"
                  >
                    {letter}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 text-gray-700 leading-relaxed mb-10">
            <p>
              <strong className="text-gray-900">Where to start.</strong>{" "}
              The{" "}
              <Link href="/vaccine-injury-table" className={linkClass}>
                Vaccine Injury Table
              </Link>{" "}
              lists every current onset window. The{" "}
              <Link href="/faq" className={linkClass}>
                FAQ
              </Link>{" "}
              answers common filing questions. This glossary defines the words those pages use.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Definitions are general information, not legal advice. {SITE_NAME} is not a law firm.
            </p>
          </div>

          <div className="space-y-10">
            {terms.map((term, index) => {
              const letter = term.name[0]?.toUpperCase() ?? "";
              const previous = index > 0 ? terms[index - 1]?.name[0]?.toUpperCase() : "";
              const showLetter = letter !== previous;
              return (
                <article key={term.id} id={term.id} className="scroll-mt-20 border-b border-gray-100 pb-8">
                  {term.aliasIds?.map((alias) => (
                    <span key={alias} id={alias} />
                  ))}
                  {showLetter && (
                    <p id={`letter-${letter}`} className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-2 scroll-mt-20">
                      {letter}
                    </p>
                  )}
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{term.name}</h2>
                  {term.definition.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="text-gray-700 leading-relaxed mb-3">
                      {paragraph}
                    </p>
                  ))}
                  {term.links && term.links.length > 0 && (
                    <ul className="text-sm space-y-1 mb-3">
                      {term.links.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className={linkClass}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="text-sm text-gray-500">
                    Source:{" "}
                    {term.sources.map((source, sourceIndex) => (
                      <span key={source.url}>
                        {sourceIndex > 0 && "; "}
                        <a href={source.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          {source.title}
                        </a>
                      </span>
                    ))}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-12">
            <SourcesList
              sources={sources}
              heading="Sources used in this glossary"
              intro="Dollar figures are the amounts in 42 U.S.C. § 300aa-15(a) for a vaccine administered after October 1, 1988. Table windows are copied from 42 CFR 100.3."
            />
          </div>

          <aside className="bg-gray-50 rounded-lg p-6 text-sm text-gray-600 leading-relaxed mt-12">
            <p className="font-semibold text-gray-900 mb-2">Not legal or medical advice</p>
            <p>
              Written and reviewed by the {EDITORIAL_TEAM}. {SITE_NAME} is an independent educational site. It is not
              a law firm or a government agency. A definition on this page is not a decision about any petition.{" "}
              <Link href="/about#editorial-team" className={linkClass}>
                How this site reviews sources
              </Link>
              .
            </p>
          </aside>

          <section className="border border-blue-100 bg-blue-50 rounded-lg p-6 text-center mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Want to talk with an attorney?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can submit your information and we can connect you with an independent attorney who handles vaccine
              injury claims. Submitting is free. It does not create an attorney-client relationship, and we do not
              decide whether you have a claim.
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
