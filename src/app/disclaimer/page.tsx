import type { Metadata } from "next";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import SourcesList from "@/components/SourcesList";
import { CORE_SOURCES } from "@/lib/sources";

export const metadata: Metadata = pageMetadata({
  title: "Disclaimer",
  ogTitle: "Disclaimer | VaccineInjuries.org",
  description:
    "Disclaimer for VaccineInjuries.org: an independent educational site, not a law firm or government agency. Information here is not legal or medical advice.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <section className="py-16 px-4 bg-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Disclaimer", path: "/disclaimer" },
        ])}
      />
      <div className="max-w-3xl mx-auto prose prose-gray">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Disclaimer</h1>
        <p className="text-gray-500 text-sm mb-8">
          Last updated: <time dateTime="2026-10-06">October 6, 2026</time>
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Not a Law Firm or Government Agency</h2>
            <p>
              VaccineInjuries.org is an independent educational and connection website. We are not a law firm, we do not provide legal services, and we do not represent anyone. We are not a government agency and are not affiliated with the Health Resources and Services Administration (HRSA), the U.S. Court of Federal Claims, or any other federal program. If you request a free case review, you may be contacted by an independent attorney or law firm that handles vaccine injury matters.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Not Medical Advice</h2>
            <p>
              The information on this website is for general informational purposes only and is not medical advice. It is not a substitute for professional diagnosis or treatment. Talk to your doctor or another qualified health care provider about vaccine decisions and about any symptoms you are experiencing. If you think you may be having a medical emergency, call 911 or your local emergency number.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Not Legal Advice</h2>
            <p>
              The information provided on this website is for general informational purposes only and does not constitute legal advice. Nothing on this site should be taken as legal advice for any individual case or situation. The information on this website is not intended to create, and receipt or viewing of this information does not constitute, an attorney-client relationship.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No Attorney-Client Relationship</h2>
            <p>
              Submitting a form, contacting us, or reading this website does not create an attorney-client relationship. You should not act or refrain from acting on the basis of any content on this site without seeking legal or other professional advice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Accuracy of Information</h2>
            <p>
              We make reasonable efforts to provide accurate, timely information about vaccine injury compensation programs. However, laws and regulations change, and we make no representations or warranties about the completeness, accuracy, or timeliness of the information on this site. Always verify current rules and deadlines with a licensed attorney.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Results Not Guaranteed</h2>
            <p>
              Any description of past results, outcomes, or settlements on this site does not constitute a guarantee, warranty, or prediction regarding the outcome of any future legal matter. Results vary significantly depending on the individual facts and circumstances of each case.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Third-Party Links</h2>
            <p>
              This site may contain links to external websites. We do not control or endorse those sites and are not responsible for their content, accuracy, or practices.
            </p>
          </div>

          <div>
            <SourcesList
              sources={CORE_SOURCES}
              heading="Official Program Information"
              id="official-sources"
              intro="For authoritative, current rules and deadlines, refer to these official sources:"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact</h2>
            <p>
              If you have questions about this disclaimer, please review our{" "}
              <a href="/privacy-policy" className="text-blue-700 hover:underline">Privacy Policy</a> or use the contact information provided in that document.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
