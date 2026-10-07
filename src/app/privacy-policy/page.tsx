import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  ogTitle: "Privacy Policy | VaccineInjuries.org",
  description:
    "Privacy policy for VaccineInjuries.org.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Information We Collect</h2>
            <p>When you submit the eligibility form on this site, we collect the following information:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Your name, email address, and phone number</li>
              <li>Your state of residence</li>
              <li>Vaccine type and injury or reaction details</li>
              <li>A brief description of your situation</li>
            </ul>
            <p className="mt-2">We also collect standard technical information such as IP address, browser type, and pages visited through analytics tools.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Review your eligibility for vaccine injury compensation programs</li>
              <li>Contact you about your inquiry</li>
              <li>Connect you with legal professionals who may be able to assist you</li>
              <li>Improve the content and functionality of this website</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">How We Share Your Information</h2>
            <p>
              We may share your information with attorneys or legal intake partners for the purpose of evaluating your potential claim. We do not sell your personal information to data brokers or marketers.
            </p>
            <p className="mt-2">
              We require any party we share your information with to use it only for the purpose of legal case evaluation and to maintain reasonable data security standards.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Data Retention</h2>
            <p>
              We retain your submitted information for a period reasonably necessary to fulfill the purposes described above, or as required by law. You may request deletion of your information at any time by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Cookies and Analytics</h2>
            <p>
              This site may use cookies and third-party analytics tools (such as Google Analytics) to understand how visitors use the site. These tools may collect anonymized usage data. You can disable cookies in your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Your Rights</h2>
            <p>
              Depending on your state of residence, you may have rights to access, correct, or delete your personal data. To exercise these rights, contact us at the address below.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact</h2>
            <p>
              For privacy-related questions or requests, please contact us at:{" "}
              <a href="mailto:privacy@vaccineinjuries.org" className="text-blue-700 hover:underline">
                privacy@vaccineinjuries.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
