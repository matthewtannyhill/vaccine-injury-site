import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import { homeFaqs as faqs } from "@/content/faq";
import { faqPageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Vaccine Injury Claims — Get Connected With an Attorney",
  ogTitle: "Vaccine Injury Claims — Get Connected With an Attorney | VaccineInjuries.org",
  description:
    "If you experienced a serious reaction after a vaccine, you may have options under federal compensation programs. Submit your information free — we can connect you with an independent attorney.",
  path: "/",
});



export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs, "/")} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-wide mb-4">
            Free to Submit — Connect With an Attorney
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Were You Injured by a Vaccine?
          </h1>
          <p className="text-blue-100 text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
            Federal programs exist specifically to compensate people who suffer serious reactions from recommended vaccines.
            You may have a claim — and getting connected costs nothing.
          </p>
          <p className="text-blue-200 text-base mb-8 max-w-2xl mx-auto leading-relaxed">
            Serious vaccine injuries are uncommon. When they do happen, federal programs may help cover medical costs and
            other losses. VaccineInjuries.org is an independent educational site — not a law firm or government agency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/intake"
              className="bg-white text-blue-900 font-semibold px-8 py-4 rounded-md hover:bg-blue-50 transition-colors text-lg"
            >
              Get Connected With an Attorney
            </Link>
            <Link
              href="/how-it-works"
              className="border border-blue-400 text-blue-100 font-medium px-8 py-4 rounded-md hover:bg-blue-800 transition-colors text-lg"
            >
              How It Works
            </Link>
          </div>
          <p className="text-blue-400 text-sm mt-6">No cost. No obligation. Takes about 3 minutes.</p>
        </div>
      </section>

      {/* Education section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Is Vaccine Injury Compensation?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The U.S. government created a no-fault compensation system for people injured by vaccines. It&apos;s separate from standard lawsuits — and most people don&apos;t know it exists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Federal Programs",
                body: "The National Vaccine Injury Compensation Program (VICP) and the Countermeasures Injury Compensation Program (CICP) were created specifically to compensate vaccine-injured individuals.",
              },
              {
                title: "No-Fault System",
                body: "You don't need to prove negligence or that a manufacturer did something wrong. If your injury is listed on the Vaccine Injury Table, the burden shifts to the government.",
              },
              {
                title: "Who It Covers",
                body: "Anyone — adults or children — who received a covered vaccine and experienced a qualifying injury, illness, or disability may be eligible. Families of those who died may also qualify.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />

      {/* Trust / People section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="A professional consultation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-blue-700 text-sm font-semibold uppercase tracking-widest mb-3">
              Built for real people
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
              A resource designed to reduce confusion, not add to it
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vaccine injury claims involve specific rules, federal programs, and strict deadlines
              that most people have never heard of. We built this site to close that information gap —
              giving you a clear picture of the process before you decide whether to move forward.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are informational first. There is no pressure to act before you are ready.
            </p>
            <Link
              href="/about"
              className="text-blue-700 font-semibold hover:underline"
            >
              Learn more about this site →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg">Three straightforward steps to understand your options.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Answer a Few Questions",
                body: "Tell us about the vaccine, the reaction, and when it happened. This takes about 3 minutes and is completely confidential.",
              },
              {
                step: "2",
                title: "We Review Your Information",
                body: "We review your submission for basic details, like the vaccine, the timing, and how to reach you. We don't provide legal advice or decide whether you qualify.",
              },
              {
                step: "3",
                title: "Get Connected to Legal Help",
                body: "If you'd like, we connect you with an independent attorney who handles vaccine injury cases and can evaluate your situation.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/faq" className="text-blue-700 font-medium hover:underline">
              View all frequently asked questions →
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTABanner />
    </>
  );
}
