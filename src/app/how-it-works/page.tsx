import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  alternates: { canonical: "/how-it-works" },
  title: "How It Works",
  description:
    "Learn how our free vaccine injury case review process works — from eligibility check to connecting you with experienced legal help.",
};

export default function HowItWorksPage() {
  return (
    <>
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
              title: "Complete the Short Eligibility Form",
              body: [
                "Tell us which vaccine you received and when, what symptoms or injuries you experienced, your state, and your contact information.",
                "This takes about 3 minutes. Your information is confidential and never shared without your consent.",
              ],
            },
            {
              step: "Step 2",
              title: "Our Team Reviews Your Submission",
              body: [
                "Once we receive your form, we review the details to assess whether your situation may qualify under the National Vaccine Injury Compensation Program (VICP) or other applicable programs.",
                "We look at the type of vaccine, the injury or reaction, the timing, and other relevant factors.",
              ],
            },
            {
              step: "Step 3",
              title: "We Contact You Within 1–2 Business Days",
              body: [
                "If your case looks like it may qualify, we will reach out by phone or email to discuss next steps.",
                "If it doesn't appear to qualify, we will let you know and explain why — no guesswork.",
              ],
            },
            {
              step: "Step 4",
              title: "Get Connected With a Vaccine Injury Attorney",
              body: [
                "If appropriate, we connect you with an attorney experienced in vaccine injury claims.",
                "Most vaccine injury attorneys work on a contingency basis — meaning you pay nothing unless there is a recovery. Attorney fees in VICP cases are paid by the government, not out of your compensation.",
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
              "There is no cost to submit your information or receive an initial review.",
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
