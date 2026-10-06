"use client";

import { useState } from "react";
import Link from "next/link";
import { faqSections as faqs } from "@/content/faq";
import SourcesList from "@/components/SourcesList";
import { CORE_SOURCES } from "@/lib/sources";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <>
      <section className="bg-blue-950 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-blue-200 text-lg">
            Answers to the most common questions about vaccine injury claims, compensation, and the legal process.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-xl font-bold text-blue-900 mb-4 border-b border-gray-200 pb-2">
                {section.category}
              </h2>
              <div className="space-y-2">
                {section.items.map((item) => {
                  const key = `${section.category}-${item.q}`;
                  const isOpen = openIndex === key;
                  return (
                    <div key={item.q} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        className="w-full text-left px-5 py-4 font-medium text-gray-900 hover:bg-gray-50 flex justify-between items-center"
                        onClick={() => setOpenIndex(isOpen ? null : key)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.q}</span>
                        <span className="text-blue-700 ml-4 flex-shrink-0">{isOpen ? "−" : "+"}</span>
                      </button>
                      {/* Answers stay in the HTML (hidden when collapsed) so crawlers and the FAQPage structured data see the same text. */}
                      <div
                        hidden={!isOpen}
                        className="px-5 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-3"
                      >
                        {item.a}
                        {item.learnMoreSlug && (
                          <div className="mt-3">
                            <Link
                              href={`/blog/${item.learnMoreSlug}`}
                              className="text-blue-700 hover:underline text-sm font-medium"
                            >
                              Read the full guide →
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <SourcesList
            sources={CORE_SOURCES}
            heading="Official sources"
            id="official-sources"
            intro="Our answers are based on these official program, court, and federal law resources. Rules can change, so it is always worth checking the current version."
          />
        </div>

        <div className="max-w-3xl mx-auto mt-12 bg-blue-50 rounded-lg p-6 text-center">
          <p className="text-gray-700 mb-4">Still have questions? The fastest way to find out if you qualify is to submit your information.</p>
          <Link
            href="/intake"
            className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-800 transition-colors"
          >
            Check My Eligibility — Free
          </Link>
        </div>
      </section>
    </>
  );
}
