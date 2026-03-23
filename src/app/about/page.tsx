import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn what VaccineInjuries.org is, how it works, and what happens after you submit your information. We are not a law firm and do not provide legal advice.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-300 uppercase text-sm font-semibold tracking-widest mb-4">
            About This Site
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Helping people understand vaccine injury claims and take the next step
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            We created this site to make vaccine injury information easier to understand for people
            who are trying to figure out what to do after a serious reaction or complication.
          </p>
        </div>
      </section>

      {/* Hero photo strip */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80"
          alt="Person reviewing documents at a desk"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-blue-950/40" />
      </div>

      {/* What We Do */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What we do</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            For many families, the process is confusing right from the start. It can be hard to tell
            whether an injury may qualify for compensation, what records matter, where to begin, or
            whether it makes sense to speak with a lawyer. Our goal is to make that first step simpler.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Educational information",
                body: "Plain-English explanations of vaccine injury claims, compensation programs, and the general process — without unnecessary jargon.",
              },
              {
                title: "Claim pathway guidance",
                body: "Help understanding the difference between possible claim pathways, including traditional vaccine injury claims and COVID-related compensation programs.",
              },
              {
                title: "Connection to legal help",
                body: "A way to connect with attorneys or law firms that handle vaccine injury matters, if you decide you want legal review.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who this site is for</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            This site is for people who believe they or a loved one may have experienced a serious
            vaccine-related injury and want to learn more about their options. That may include
            people who are:
          </p>
          <ul className="space-y-3">
            {[
              "Trying to understand whether their situation may qualify for review",
              "Gathering information after symptoms began following a vaccination",
              "Looking for help after being overwhelmed by the legal or administrative process",
              "Seeking a lawyer who handles vaccine injury matters",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center">
                  ✓
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why This Process Is Different */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What makes this process different
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Vaccine injury claims are not like most personal injury cases. These cases often involve
            specific filing rules, medical records, deadlines, and federal compensation frameworks
            that can be difficult to navigate without guidance.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            That is one reason many people start by looking for reliable information and a qualified
            legal review before deciding whether to move forward.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">How it works</h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Read educational content",
                body: "Start by browsing our articles and eligibility information to understand the landscape before making any decisions.",
              },
              {
                step: "2",
                title: "Submit your information",
                body: "If you want help, you can submit basic information about your situation through our intake form.",
              },
              {
                step: "3",
                title: "Your submission is reviewed",
                body: "Your submission may be reviewed and routed to an attorney or law firm that handles vaccine injury matters.",
              },
              {
                step: "4",
                title: "A firm may reach out",
                body: "If a participating firm believes your case may be worth discussing, they may contact you directly to learn more.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 text-white font-bold text-lg flex items-center justify-center">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="border border-gray-200 rounded-lg p-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Important transparency</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              This website is an informational and connection platform. Please read the following
              before submitting any information:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "This site is not a law firm.",
                "This site is not a government agency.",
                "We do not provide legal advice.",
                "Submitting information through this site does not create an attorney-client relationship.",
                "If you request a review, you may be contacted by an independent attorney or law firm.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 text-gray-400">—</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500">
              Before submitting any information, please review our{" "}
              <Link href="/privacy-policy" className="text-blue-700 underline hover:text-blue-800">
                Privacy Policy
              </Link>
              ,{" "}
              <Link href="/disclaimer" className="text-blue-700 underline hover:text-blue-800">
                Terms and Disclaimer
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Why We Built This */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why we built this</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              People dealing with a possible vaccine injury are often already handling medical stress,
              uncertainty, and paperwork. The last thing they need is a confusing website or vague
              explanations.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              We built this platform to make the process easier to understand, help people decide
              whether they want a legal review, and make it easier to connect with the right kind of help.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are building this site to be informative first and conversion-focused second. That
              means our content is meant to help people understand the process, not pressure them into
              taking action before they are ready.
            </p>
          </div>
          <div className="relative w-full h-72 md:h-80 rounded-xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
              alt="Two people in a professional consultation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTABanner />
    </>
  );
}
