import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-blue-700 text-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Not sure if you have a claim?
        </h2>
        <p className="text-blue-100 mb-6 text-lg">
          Answer a few quick questions and we&apos;ll help you understand your options — at no cost.
        </p>
        <Link
          href="/intake"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-md hover:bg-blue-50 transition-colors"
        >
          Check My Eligibility — It&apos;s Free
        </Link>
      </div>
    </section>
  );
}
