/**
 * FAQ content. Pages render these strings directly and the FAQPage JSON-LD is
 * generated from the same data, so visible text and structured data always match.
 */

export type FAQItem = { q: string; a: string; learnMoreSlug?: string };
export type FAQSection = { category: string; items: FAQItem[] };

export const faqSections: FAQSection[] = [
  {
    category: "Eligibility",
    items: [
      {
        q: "Who can file a vaccine injury claim?",
        a: "Anyone who received a vaccine covered by the National Vaccine Injury Compensation Program (VICP) and suffered a resulting injury may file a claim. This includes adults and children. Family members may also file on behalf of a deceased person.",
        learnMoreSlug: "who-can-file-a-vaccine-injury-claim",
      },
      {
        q: "What vaccines are covered by the VICP?",
        a: "The VICP covers vaccines routinely recommended for children and adults, including: flu, MMR, chickenpox, Hepatitis A and B, HPV, Tdap/DTaP, polio, meningococcal, and others. COVID-19 vaccines are handled under the separate Countermeasures Injury Compensation Program (CICP).",
      },
      {
        q: "What injuries qualify for compensation?",
        a: "The government maintains a Vaccine Injury Table listing injuries presumed to be caused by specific vaccines. Common examples include Guillain-Barré Syndrome (GBS) after flu vaccines, shoulder injuries related to vaccine administration (SIRVA), and anaphylaxis. Off-table injuries can also be compensated if you can prove the vaccine caused them.",
        learnMoreSlug: "what-injuries-qualify-for-vaccine-compensation",
      },
      {
        q: "Is there a time limit to file?",
        a: "Yes. Under the VICP, you generally must file within 36 months of the first symptom of the injury. Strict deadlines apply — do not delay if you think you may have a claim.",
        learnMoreSlug: "how-long-do-i-have-to-file-a-vaccine-injury-claim",
      },
      {
        q: "What's the difference between a Table injury and an off-Table injury?",
        a: "A Table injury is one that appears on the Vaccine Injury Table for a specific vaccine, with a defined timeframe for symptom onset. If your case fits, the law presumes the vaccine caused the injury. Off-Table injuries can still qualify, but you have to prove the vaccine more likely than not caused the condition, usually with medical records and expert opinions.",
        learnMoreSlug: "difference-between-table-injury-and-off-table-injury",
      },
      {
        q: "Is my injury serious enough to qualify under the VICP?",
        a: "The VICP generally requires that the injury lasted more than six months, resulted in inpatient hospitalization and surgical intervention, or resulted in death. Short-term reactions like soreness or low-grade fever usually do not meet the threshold.",
        learnMoreSlug: "what-are-the-severity-requirements-for-a-vicp-claim",
      },
    ],
  },
  {
    category: "Qualifying Injuries",
    items: [
      {
        q: "What is SIRVA?",
        a: "SIRVA — Shoulder Injury Related to Vaccine Administration — is a recognized injury where the injection causes shoulder inflammation, persistent pain, and reduced range of motion. It is different from ordinary short-term soreness. SIRVA appears on the Vaccine Injury Table for many covered vaccines, but timing and early documentation matter a lot to the case.",
        learnMoreSlug: "what-is-sirva-and-can-it-qualify-for-compensation",
      },
    ],
  },
  {
    category: "Filing & Evidence",
    items: [
      {
        q: "What medical records do I need?",
        a: "Start with proof of vaccination, then gather records showing when symptoms began, all treatment received (primary care, urgent care, ER, specialists, imaging, labs, physical therapy), and follow-up notes documenting ongoing symptoms. The case usually depends on whether the records tell a clear story from the vaccine forward, not just on a single diagnosis.",
        learnMoreSlug: "what-medical-records-do-i-need-for-a-vaccine-injury-claim",
      },
      {
        q: "Should I report my reaction to VAERS?",
        a: "Often yes, especially for serious or unexpected reactions. VAERS is a federal safety reporting system — anyone can submit, and a report does not by itself prove the vaccine caused the event. Important: a VAERS report is separate from a compensation claim. Filing one does not preserve your VICP or CICP deadline.",
        learnMoreSlug: "should-i-report-my-vaccine-reaction-to-vaers",
      },
    ],
  },
  {
    category: "The Process",
    items: [
      {
        q: "How does the VICP work?",
        a: "The VICP is a federal no-fault compensation program. Claims are filed in the U.S. Court of Federal Claims (the 'Vaccine Court'). You do not need to prove that the vaccine manufacturer was negligent — only that the vaccine caused your injury.",
        learnMoreSlug: "what-is-the-vaccine-injury-compensation-program",
      },
      {
        q: "How long does a claim take?",
        a: "VICP cases vary widely. Some straightforward cases resolve in under a year; complex cases can take several years. An experienced vaccine injury attorney can give you a more specific estimate based on your facts.",
      },
      {
        q: "What happens after I file a petition?",
        a: "After filing in the U.S. Court of Federal Claims, the case is assigned to a Special Master who manages the review. The government evaluates your records, may request more evidence, and either negotiates a settlement or moves the case toward a hearing. Even strong cases often take a year or longer because of how the process works.",
        learnMoreSlug: "what-happens-after-you-file-a-vicp-petition",
      },
      {
        q: "Do I need an attorney?",
        a: "You are not required to have an attorney, but it is strongly recommended. Vaccine injury law is specialized. Importantly, in cases that result in compensation, attorney fees are paid by the federal government — not out of your award.",
        learnMoreSlug: "how-to-find-a-vaccine-injury-attorney",
      },
    ],
  },
  {
    category: "Cost & Compensation",
    items: [
      {
        q: "What does it cost to file a claim?",
        a: "Filing with the VICP costs nothing. If your case is successful, attorneys' fees and costs are paid separately by the government — they do not come out of your compensation.",
      },
      {
        q: "What can I be compensated for?",
        a: "Compensation can cover: past and future medical expenses, lost earnings, pain and suffering (up to $250,000), and death benefits. The amounts depend on the specifics of your injury and case.",
        learnMoreSlug: "how-much-compensation-is-available-in-a-vaccine-injury-case",
      },
      {
        q: "Does a settlement mean the vaccine caused my injury?",
        a: "Not necessarily. Settlements often resolve cases without a final ruling on causation, and they can reflect practical decisions about cost, time, and litigation risk on both sides. Compensation through settlement is real and meaningful, but it is not the same thing as a formal causation finding.",
        learnMoreSlug: "does-a-vaccine-injury-settlement-mean-the-vaccine-caused-the-injury",
      },
      {
        q: "What if my case is not successful — do I owe legal fees?",
        a: "In most VICP cases, no. The program may pay reasonable attorney fees and costs even if the claim is unsuccessful, as long as it was filed in good faith and had a reasonable basis. CICP claims work differently and do not reimburse attorney fees, so most CICP cases are handled without fees being charged to you. Confirm fee terms with any attorney before signing.",
      },
      {
        q: "Does checking my eligibility cost anything?",
        a: "No. Submitting your information through this site is completely free. There is no obligation, and no attorney-client relationship is created by submitting this form.",
      },
    ],
  },
  {
    category: "COVID-19 Vaccines",
    items: [
      {
        q: "Can I file a claim for a COVID-19 vaccine injury?",
        a: "COVID-19 vaccine injury claims are handled by the Countermeasures Injury Compensation Program (CICP), not the VICP. The CICP has different rules, higher burden of proof requirements, and generally lower compensation. The landscape continues to evolve — if you believe you were injured, you should consult with a legal professional.",
        learnMoreSlug: "can-i-sue-for-covid-vaccine-side-effects",
      },
      {
        q: "What COVID-19 vaccine injuries are recognized?",
        a: "Myocarditis (heart inflammation) following mRNA vaccines is among the most recognized conditions. Other injuries are being evaluated. The CICP and related programs are still developing their tables and procedures.",
      },
      {
        q: "What's the difference between the VICP and the CICP?",
        a: "The VICP covers most routine vaccines (flu, MMR, HPV, etc.) and offers a broader range of compensation including pain and suffering and reimbursed attorney fees. The CICP covers COVID-19 vaccines and certain other countermeasures. It uses a stricter standard of proof, has a much shorter one-year deadline, and does not provide pain and suffering or pay attorney fees.",
      },
      {
        q: "What documents do I need for a CICP claim?",
        a: "At minimum: proof of vaccination (CDC card, pharmacy record, or registry record), medical records from every treating provider, and signed authorization forms for each provider. Records of out-of-pocket costs and lost wages also matter. Because the CICP is document-driven and the deadline is short, getting organized quickly helps a lot.",
        learnMoreSlug: "what-documents-help-a-covid-19-vaccine-injury-claim",
      },
    ],
  },
];

/** All /faq questions, flattened (used for FAQPage structured data). */
export const allFaqItems: FAQItem[] = faqSections.flatMap((section) => section.items);

/** The short "Common Questions" list shown on the homepage. */
export const homeFaqs: FAQItem[] = [
  {
    q: "Is there a deadline to file a vaccine injury claim?",
    a: "Yes. The National Vaccine Injury Compensation Program (VICP) generally requires claims to be filed within 36 months of the first symptom. Don't wait — deadlines vary by program and injury type.",
  },
  {
    q: "Does it cost anything to find out if I qualify?",
    a: "No. Our eligibility review is completely free and confidential. You only pay if you move forward and there is a recovery.",
  },
  {
    q: "What vaccines are covered?",
    a: "The VICP covers most routinely recommended vaccines, including flu, HPV, MMR, Tdap, and others. COVID-19 vaccine claims are handled separately under the CICP program.",
  },
  {
    q: "Do I need to prove the vaccine caused my injury?",
    a: "Not always. The government maintains a Vaccine Injury Table that lists injuries presumed to be caused by certain vaccines — which can simplify or eliminate the need to prove causation.",
  },
];
