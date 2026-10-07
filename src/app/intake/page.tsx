"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware",
  "Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky",
  "Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi",
  "Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico",
  "New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania",
  "Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
  "Virginia","Washington","West Virginia","Wisconsin","Wyoming",
];

type VaccineNote = "cicp" | "notCovered" | "unsure";

type VaccineOption = { label: string; note?: VaccineNote };

// Option labels are saved as-is to the Airtable "Vaccine Type" field, so keep them readable.
const VACCINE_GROUPS: { label: string; options: VaccineOption[] }[] = [
  {
    label: "Covered by the VICP (National Vaccine Injury Compensation Program)",
    options: [
      { label: "Flu shot or nasal spray (seasonal flu)" },
      { label: "Tetanus, diphtheria, or whooping cough (Tdap, Td, DTaP)" },
      { label: "HPV (Gardasil 9)" },
      { label: "Measles, mumps, rubella (MMR or MMRV)" },
      { label: "Chickenpox (varicella)" },
      { label: "Hepatitis B" },
      { label: "Hepatitis A, or combined Hepatitis A & B (Twinrix)" },
      { label: "Meningococcal / meningitis (MenACWY, MenB)" },
      { label: "Pneumococcal conjugate (Prevnar, Vaxneuvance, Capvaxive)" },
      { label: "Polio (IPV)" },
      { label: "Hib" },
      { label: "Rotavirus" },
      { label: "Combination baby or child shot (Pediarix, Pentacel, Vaxelis, Kinrix, Quadracel)" },
    ],
  },
  {
    label: "COVID-19 and emergency vaccines (CICP)",
    options: [
      { label: "COVID-19 vaccine, any brand (Pfizer, Moderna, Novavax, or J&J 2021–2023)", note: "cicp" },
      { label: "Other emergency vaccine (mpox/smallpox, anthrax, pandemic flu)", note: "cicp" },
    ],
  },
  {
    label: "Other / not sure",
    options: [
      { label: "Shingles (Shingrix)", note: "notCovered" },
      { label: "RSV vaccine or infant RSV shot", note: "notCovered" },
      { label: "Pneumovax 23 (pneumococcal polysaccharide)", note: "notCovered" },
      { label: "Travel or other vaccine", note: "unsure" },
      { label: "I'm not sure which vaccine", note: "unsure" },
    ],
  },
];

const VACCINE_NOTES: Record<VaccineNote, string> = {
  cicp: "COVID-19 and emergency vaccine claims go to the Countermeasures Injury Compensation Program (CICP), not the VICP. CICP claims generally must be filed within 1 year of vaccination.",
  notCovered: "This vaccine isn't currently covered by the VICP. You can still submit your information and we'll help you understand your options.",
  unsure: "That's okay. Share what you know and we'll help you figure it out.",
};

function vaccineNoteFor(label: string): string | null {
  for (const group of VACCINE_GROUPS) {
    const match = group.options.find((o) => o.label === label);
    if (match) return match.note ? VACCINE_NOTES[match.note] : null;
  }
  return null;
}

type FormData = {
  vaccineType: string;
  injuryType: string;
  injuryDate: string;
  state: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  consent: boolean;
};

const INITIAL_FORM: FormData = {
  vaccineType: "",
  injuryType: "",
  injuryDate: "",
  state: "",
  name: "",
  email: "",
  phone: "",
  description: "",
  consent: false,
};

export default function IntakePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const totalSteps = 3;
  const vaccineNote = vaccineNoteFor(form.vaccineType);

  function update(field: keyof FormData, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function canAdvance() {
    if (step === 1) return form.vaccineType.length > 0 && form.state.length > 0;
    if (step === 2) return form.name.trim().length > 0 && form.email.trim().length > 0 && form.phone.trim().length > 0;
    if (step === 3) return form.consent;
    return false;
  }

  async function handleSubmit() {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
      router.push("/intake/thank-you");
    } catch {
      setError("Network error. Please check your connection and try again.");
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="bg-blue-950 text-white py-10 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-2">Check Your Eligibility</h1>
          <p className="text-blue-200">Free, confidential, no obligation. Takes about 3 minutes.</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50 min-h-[60vh]">
        <div className="max-w-xl mx-auto">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-8">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div key={i} className="flex items-center gap-2 flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${
                    i + 1 < step
                      ? "bg-green-600 text-white"
                      : i + 1 === step
                      ? "bg-blue-700 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {i + 1 < step ? "✓" : i + 1}
                </div>
                {i < totalSteps - 1 && (
                  <div className={`h-0.5 flex-1 ${i + 1 < step ? "bg-green-600" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            {/* Step 1: Claim Details */}
            {step === 1 && (
              <div className="space-y-5">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">About Your Claim</h2>
                <p className="text-gray-500 text-sm mb-4">Tell us about the vaccine and the reaction or injury you experienced.</p>

                <div>
                  <label htmlFor="vaccineType" className="block text-sm font-medium text-gray-700 mb-1">
                    Which vaccine did you receive? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="vaccineType"
                    required
                    aria-describedby={vaccineNote ? "vaccineType-note" : undefined}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={form.vaccineType}
                    onChange={(e) => update("vaccineType", e.target.value)}
                  >
                    <option value="">Select a vaccine</option>
                    {VACCINE_GROUPS.map((group) => (
                      <optgroup key={group.label} label={group.label}>
                        {group.options.map((o) => (
                          <option key={o.label} value={o.label}>{o.label}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  {vaccineNote && (
                    <p id="vaccineType-note" className="mt-2 text-sm text-gray-600" aria-live="polite">
                      {vaccineNote}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What type of injury or reaction did you experience?
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., shoulder pain, Guillain-Barré, myocarditis"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={form.injuryType}
                    onChange={(e) => update("injuryType", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Approximate date of vaccination or injury
                  </label>
                  <input
                    type="month"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={form.injuryDate}
                    onChange={(e) => update("injuryDate", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State where you received the vaccine <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={form.state}
                    onChange={(e) => update("state", e.target.value)}
                  >
                    <option value="">Select a state</option>
                    {US_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Contact Info */}
            {step === 2 && (
              <div className="space-y-5">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Your Contact Information</h2>
                <p className="text-gray-500 text-sm mb-4">We&apos;ll use this to follow up on your inquiry. Your information is confidential.</p>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 555-5555"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Description & Consent */}
            {step === 3 && (
              <div className="space-y-5">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">A Little More Detail</h2>
                <p className="text-gray-500 text-sm mb-4">Optional: briefly describe what happened. Then review and submit.</p>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Brief description of your situation (optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="e.g., I received a flu shot in October 2022 and developed severe shoulder pain within 48 hours. I was diagnosed with SIRVA and have had limited mobility since."
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    value={form.description}
                    onChange={(e) => update("description", e.target.value)}
                  />
                </div>

                <div className="bg-gray-50 rounded-md p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-700 focus:ring-blue-500"
                      checked={form.consent}
                      onChange={(e) => update("consent", e.target.checked)}
                    />
                    <span className="text-sm text-gray-600 leading-relaxed">
                      I agree to be contacted by phone, email, or text regarding my inquiry. I understand this does not create an attorney-client relationship. I have read and agree to the{" "}
                      <a href="/privacy-policy" className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and{" "}
                      <a href="/disclaimer" className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">Disclaimer</a>.{" "}
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                </div>

                {error && (
                  <p className="text-red-600 text-sm">{error}</p>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
              {step > 1 ? (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="text-gray-600 font-medium hover:text-gray-900 transition-colors"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}

              {step < totalSteps ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canAdvance()}
                  className="bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-md hover:bg-blue-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canAdvance() || submitting}
                  className="bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-md hover:bg-blue-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting…" : "Submit My Information"}
                </button>
              )}
            </div>
          </div>

          <p className="text-center text-gray-400 text-xs mt-4">
            Your information is confidential and never sold. See our{" "}
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </section>
    </>
  );
}
