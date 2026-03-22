import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You — We Received Your Submission",
  description: "Thank you for submitting your vaccine injury inquiry. We will review your information and be in touch soon.",
};

export default function ThankYouPage() {
  return (
    <section className="py-24 px-4 bg-gray-50 min-h-[70vh] flex items-center">
      <div className="max-w-xl mx-auto text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">We Received Your Information</h1>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Thank you for reaching out. Our team will review your submission and contact you within 1–2 business days to discuss your situation and next steps.
        </p>

        <div className="bg-blue-50 rounded-lg p-5 text-left mb-8">
          <h2 className="font-semibold text-blue-900 mb-2">What happens next?</h2>
          <ul className="text-blue-800 text-sm space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">1.</span>
              <span>We review your submission against program eligibility criteria.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">2.</span>
              <span>A team member contacts you by phone or email within 1–2 business days.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">3.</span>
              <span>If your case looks like it may qualify, we connect you with a vaccine injury attorney.</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="text-blue-700 font-medium hover:underline"
          >
            Return to Home
          </Link>
          <Link
            href="/faq"
            className="text-blue-700 font-medium hover:underline"
          >
            Read Our FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}
