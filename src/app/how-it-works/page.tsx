import type { Metadata } from "next";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = pageMetadata({
  title: "How It Works",
  ogTitle: "How Getting Connected Works | VaccineInjuries.org",
  description:
    "Learn how our free connection process works — from submitting your information to connecting you with an independent vaccine injury attorney.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "How It Works", path: "/how-it-works" },
        ])}
      />
      <section className="bg-blue-950 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">How It Works</h1>
          <p className="text-blue-200 text-lg">
            From your first question to connecting with legal representation — here&apos;s what the process looks like.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          {[
            {
              step: "Step 1",
              title: "Submit Your Information",
              body: [
                "Tell us which vaccine you received and when, what symptoms or injuries you experienced, your state, and your contact information.",
                "This takes about 3 minutes. Your information is confidential and never shared without your consent.",
              ],
            },
            {
              step: "Step 2",
              title: "Our Team Reviews Your Submission",
              body: [
                "Once we receive your form, we review it for basic details, like the vaccine, the timing, and how to reach you, so we can connect you with an independent vaccine-injury attorney who can evaluate your situation.",
                "We don't provide legal advice or decide whether you qualify under the VICP, the CICP, or any other program.",
              ],
            },
            {
              step: "Step 3",
              title: "We Contact You Within 1–2 Business Days",
              body: [
                "We will reach out by phone or email to confirm your details and explain next steps.",
                "Whether you may have a claim is for an independent attorney to evaluate. There's no pressure and no obligation.",
              ],
            },
            {
              step: "Step 4",
              title: "Get Connected With a Vaccine Injury Attorney",
              body: [
                "If appropriate, we connect you with an attorney experienced in vaccine injury claims.",
                "For VICP claims, attorneys' fees and costs are paid by the program, separately from any award. Lawyers can't charge you a contingency fee for a VICP case. For COVID-19 claims under the CICP, the program doesn't pay attorneys' fees, so ask any attorney about costs upfront.",
              ],
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step.replace("Step ", "")}
                </div>
              </div>
              <div>
                <p className="text-blue-700 text-sm font-medium mb-1">{item.step}</p>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h2>
                {item.body.map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-2">{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What You Should Know</h2>
          <ul className="space-y-3 text-gray-600">
            {[
              "There is no cost to submit your information through this site.",
              "Submitting this form does not create an attorney-client relationship.",
              "Deadlines apply — VICP claims must generally be filed within 36 months of the first symptom.",
              "Your information is handled confidentially and is not sold or shared with marketers.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-blue-600 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner />

      <section className="py-10 px-4 bg-white text-center">
        <p className="text-gray-500 text-sm">
          Have more questions?{" "}
          <Link href="/faq" className="text-blue-700 hover:underline font-medium">
            Read our FAQ
          </Link>
        </p>
      </section>
    </>
  );
}
