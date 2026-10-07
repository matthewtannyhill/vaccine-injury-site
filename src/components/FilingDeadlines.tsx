import Link from "next/link";
import { SOURCES } from "@/lib/sources";

/**
 * Shared filing-deadline summary for injury hub pages. Wording follows HRSA:
 * VICP: hrsa.gov/vaccine-compensation/eligible; CICP: hrsa.gov/cicp/filing-process.
 */
export default function FilingDeadlines() {
  return (
    <section aria-labelledby="deadlines-heading">
      <h2 id="deadlines-heading" className="text-2xl font-bold text-gray-900 mb-4">
        Filing deadlines
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Both federal programs have strict deadlines. Missing one can end a claim, even a strong one, so it helps to
        write down key dates early.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-gray-200 rounded-lg p-5">
          <h3 className="font-semibold text-gray-900 mb-2">VICP (most routine vaccines)</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 leading-relaxed">
            <li>
              <strong>Injury claims:</strong> generally within 3 years after the first symptom or manifestation of
              onset or of the significant aggravation of the injury.
            </li>
            <li>
              <strong>Death claims:</strong> within 2 years of the death and within 4 years of the first symptom of
              the injury that led to the death.
            </li>
            <li>
              <strong>Table changes:</strong> if the Vaccine Injury Table is changed in a way that newly covers an
              injury, a claim may be filed within 2 years of the change for injuries up to 8 years before it.
            </li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-lg p-5">
          <h3 className="font-semibold text-gray-900 mb-2">CICP (COVID-19 vaccines and other countermeasures)</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 leading-relaxed">
            <li>
              <strong>Generally within 1 year</strong> of the date the vaccine or other covered countermeasure was
              given.
            </li>
            <li>
              HRSA notes that a letter of intent can be submitted to help meet the deadline while records are
              gathered.
            </li>
            <li>The CICP does not pay attorneys&apos; fees.</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mt-4 text-sm">
        <strong>Severity requirement (VICP):</strong> the effects of the injury generally must have lasted more than
        6 months, or resulted in inpatient hospitalization and surgical intervention, or resulted in death.
        Reporting a reaction to VAERS is not the same as filing a claim. See HRSA&apos;s{" "}
        <a
          href={SOURCES.hrsaWhoCanFile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline hover:text-blue-800"
        >
          VICP eligibility rules
        </a>{" "}
        and{" "}
        <a
          href={SOURCES.hrsaCicpFiling.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline hover:text-blue-800"
        >
          CICP filing process
        </a>
        , or our guide to{" "}
        <Link
          href="/blog/how-long-do-i-have-to-file-a-vaccine-injury-claim"
          className="text-blue-700 underline hover:text-blue-800"
        >
          vaccine injury filing deadlines
        </Link>
        .
      </p>
    </section>
  );
}
