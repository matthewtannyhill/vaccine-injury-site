"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";

// Note: metadata must be in a separate server component when using "use client"
// For simplicity in V1 we define it separately below

const faqs = [
  {
    category: "Eligibility",
    items: [
      {
        q: "Who can file a vaccine injury claim?",
        a: "Anyone who received a vaccine covered by the National Vaccine Injury Compensation Program (VICP) and suffered a resulting injury may file a claim. This includes adults and children. Family members may also file on behalf of a deceased person.",
      },
      {
        q: "What vaccines are covered by the VICP?",
        a: "The VICP covers vaccines routinely recommended for children and adults, including: flu, MMR, chickenpox, Hepatitis A and B, HPV, Tdap/DTaP, polio, meningococcal, and others. COVID-19 vaccines are handled under the separate Countermeasures Injury Compensation Program (CICP).",
      },
      {
        q: "What injuries qualify for compensation?",
        a: "The government maintains a Vaccine Injury Table listing injuries presumed to be caused by specific vaccines. Common examples include Guillain-Barré Syndrome (GBS) after flu vaccines, shoulder injuries related to vaccine administration (SIRVA), and anaphylaxis. Off-table injuries can also be compensated if you can prove the vaccine caused them.",
      },
      {
        q: "Is there a time limit to file?",
        a: "Yes. Under the VICP, you generally must file within 36 months of the first symptom of the injury. Strict deadlines apply — do not delay if you think you may have a claim.",
      },
    ],
  },
  {
    category: "The Process",
    items: [
      {
        q: "How does the VICP work?",
        a: "The VICP is a federal no-fault compensation program. Claims are filed in the U.S. Court of Federal Claims (the 'Vaccine Court'). You do not need to prove that the vaccine manufacturer was negligent — only that the vaccine caused your injury.",
      },
      {
        q: "How long does a claim take?",
        a: "VICP cases vary widely. Some straightforward cases resolve in under a year; complex cases can take several years. An experienced vaccine injury attorney can give you a more specific estimate based on your facts.",
      },
      {
        q: "Do I need an attorney?",
        a: "You are not required to have an attorney, but it is strongly recommended. Vaccine injury law is specialized. Importantly, in cases that result in compensation, attorney fees are paid by the federal government — not out of your award.",
      },
    ],
  },
  {
    category: "Cost & Compensation",
    items: [
      {
        q: "What does it cost to file a claim?",
        a: "Filing with the VICP costs nothing. If your case is successful, attorneys' fees and costs are paid separately by the government — they do not come out of your compensation.",
      },
      {
        q: "What can I be compensated for?",
        a: "Compensation can cover: past and future medical expenses, lost earnings, pain and suffering (up to $250,000), and death benefits. The amounts depend on the specifics of your injury and case.",
      },
      {
        q: "Does checking my eligibility cost anything?",
        a: "No. Submitting your information through this site is completely free. There is no obligation, and no attorney-client relationship is created by submitting this form.",
      },
    ],
  },
  {
    category: "COVID-19 Vaccines",
    items: [
      {
        q: "Can I file a claim for a COVID-19 vaccine injury?",
        a: "COVID-19 vaccine injury claims are handled by the Countermeasures Injury Compensation Program (CICP), not the VICP. The CICP has different rules, higher burden of proof requirements, and generally lower compensation. The landscape continues to evolve — if you believe you were injured, you should consult with a legal professional.",
      },
      {
        q: "What COVID-19 vaccine injuries are recognized?",
        a: "Myocarditis (heart inflammation) following mRNA vaccines is among the most recognized conditions. Other injuries are being evaluated. The CICP and related programs are still developing their tables and procedures.",
      },
    ],
  },
];

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
                      >
                        <span>{item.q}</span>
                        <span className="text-blue-700 ml-4 flex-shrink-0">{isOpen ? "−" : "+"}</span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
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
