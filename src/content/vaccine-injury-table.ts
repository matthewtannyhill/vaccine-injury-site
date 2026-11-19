import { SOURCES as S, type Source } from "@/lib/sources";
import type { FaqItem } from "@/lib/seo";

/**
 * Vaccine Injury Table page (/vaccine-injury-table).
 *
 * The rows below are transcribed from the eCFR text of 42 CFR 100.3 retrieved from
 * the eCFR versioner for 2026-11-10 (title 42, part 100, section 100.3). The version
 * history for part 100 lists January 3, 2022 as the latest substantive amendment of
 * § 100.3, reissued without a substantive change on June 3, 2024. Time-period strings
 * are copied, not paraphrased. Qualifications in `tableNotes` quote or closely track
 * paragraph (c) where the definition changes whether a row applies.
 */

export const VACCINE_TABLE_PATH = "/vaccine-injury-table";
export const VACCINE_TABLE_PUBLISHED = "2026-11-18";
export const VACCINE_TABLE_REVIEWED = "2026-11-18";

export const VACCINE_TABLE_TITLE = "Vaccine Injury Table: Onset Windows by Vaccine";
export const VACCINE_TABLE_DESCRIPTION =
  "The Vaccine Injury Table (42 CFR 100.3), copied by vaccine category with each injury and onset window, plus what on-Table and off-Table claims mean.";

export type TableRow = {
  /** Illness column, including the regulation's letter prefix. */
  injury: string;
  /** Sub-row qualifier when one injury has more than one time period. */
  qualifier?: string;
  /** Time period column, copied from 42 CFR 100.3(a). */
  window: string;
  /** Site page that explains this injury, when one exists. */
  href?: string;
};

export type TableCategory = {
  id: string;
  /** Category label, including the Roman numeral, copied from 42 CFR 100.3(a). */
  name: string;
  rows: TableRow[];
};

const W = {
  h4: "≤4 hours.",
  h48: "≤48 hours.",
  h1: "≤1 hour.",
  h72: "≤72 hours.",
  d2_28: "2-28 days (not less than 2 days and not more than 28 days).",
  d5_15: "5-15 days (not less than 5 days and not more than 15 days).",
  d7_42: "7-42 days (not less than 7 days and not more than 42 days).",
  d7_30: "7-30 days (not less than 7 days and not more than 30 days).",
  d1_21: "1-21 days (not less than 1 day and not more than 21 days).",
  d3_42: "3-42 days (not less than 3 days and not more than 42 days).",
  na: "Not applicable.",
  m12: "≤12 months.",
  d30: "≤30 days.",
  m6: "≤6 months.",
} as const;

const H = {
  anaphylaxis: "/injuries/anaphylaxis",
  brachial: "/injuries/brachial-neuritis",
  sirva: "/injuries/sirva",
  syncope: "/injuries/syncope-fainting",
  enceph: "/blog/encephalopathy-after-vaccine-vicp",
  itp: "/injuries/itp-thrombocytopenic-purpura",
  gbs: "/injuries/guillain-barre-syndrome",
  intus: "/blog/intussusception-after-rotavirus-vaccine-vicp",
} as const;

function row(injury: string, window: string, href?: string, qualifier?: string): TableRow {
  return { injury, window, ...(href ? { href } : {}), ...(qualifier ? { qualifier } : {}) };
}

export const vaccineTableCategories: TableCategory[] = [
  {
    id: "tetanus",
    name: "I. Vaccines containing tetanus toxoid (e.g., DTaP, DTP, DT, Td, or TT)",
    rows: [
      row("A. Anaphylaxis", W.h4, H.anaphylaxis),
      row("B. Brachial Neuritis", W.d2_28, H.brachial),
      row("C. Shoulder Injury Related to Vaccine Administration", W.h48, H.sirva),
      row("D. Vasovagal syncope", W.h1, H.syncope),
    ],
  },
  {
    id: "pertussis",
    name: "II. Vaccines containing whole cell pertussis bacteria, extracted or partial cell pertussis bacteria, or specific pertussis antigen(s) (e.g., DTP, DTaP, P, DTP-Hib)",
    rows: [
      row("A. Anaphylaxis", W.h4, H.anaphylaxis),
      row("B. Encephalopathy or encephalitis", W.h72, H.enceph),
      row("C. Shoulder Injury Related to Vaccine Administration", W.h48, H.sirva),
      row("D. Vasovagal syncope", W.h1, H.syncope),
    ],
  },
  {
    id: "mmr",
    name: "III. Vaccines containing measles, mumps, and rubella virus or any of its components (e.g., MMR, MM, MMRV)",
    rows: [
      row("A. Anaphylaxis", W.h4, H.anaphylaxis),
      row("B. Encephalopathy or encephalitis", W.d5_15, H.enceph),
      row("C. Shoulder Injury Related to Vaccine Administration", W.h48, H.sirva),
      row("D. Vasovagal syncope", W.h1, H.syncope),
    ],
  },
  {
    id: "rubella",
    name: "IV. Vaccines containing rubella virus (e.g., MMR, MMRV)",
    rows: [row("A. Chronic arthritis", W.d7_42)],
  },
  {
    id: "measles",
    name: "V. Vaccines containing measles virus (e.g., MMR, MM, MMRV)",
    rows: [
      row("A. Thrombocytopenic purpura", W.d7_30, H.itp),
      row(
        "B. Vaccine-Strain Measles Viral Disease in an immunodeficient recipient",
        W.na,
        undefined,
        "Vaccine-strain virus identified",
      ),
      row(
        "B. Vaccine-Strain Measles Viral Disease in an immunodeficient recipient",
        W.m12,
        undefined,
        "If strain determination is not done or if laboratory testing is inconclusive",
      ),
    ],
  },
  {
    id: "opv",
    name: "VI. Vaccines containing polio live virus (OPV)",
    rows: [
      row("A. Paralytic Polio", W.d30, undefined, "in a non-immunodeficient recipient"),
      row("A. Paralytic Polio", W.m6, undefined, "in an immunodeficient recipient"),
      row("A. Paralytic Polio", W.na, undefined, "in a vaccine associated community case"),
      row("B. Vaccine-Strain Polio Viral Infection", W.d30, undefined, "in a non-immunodeficient recipient"),
      row("B. Vaccine-Strain Polio Viral Infection", W.m6, undefined, "in an immunodeficient recipient"),
      row("B. Vaccine-Strain Polio Viral Infection", W.na, undefined, "in a vaccine associated community case"),
    ],
  },
  {
    id: "ipv",
    name: "VII. Vaccines containing polio inactivated virus (e.g., IPV)",
    rows: [
      row("A. Anaphylaxis", W.h4, H.anaphylaxis),
      row("B. Shoulder Injury Related to Vaccine Administration", W.h48, H.sirva),
      row("C. Vasovagal syncope", W.h1, H.syncope),
    ],
  },
  {
    id: "hepatitis-b",
    name: "VIII. Hepatitis B vaccines",
    rows: [
      row("A. Anaphylaxis", W.h4, H.anaphylaxis),
      row("B. Shoulder Injury Related to Vaccine Administration", W.h48, H.sirva),
      row("C. Vasovagal syncope", W.h1, H.syncope),
    ],
  },
  {
    id: "hib",
    name: "IX. Haemophilus influenzae type b (Hib) vaccines",
    rows: [
      row("A. Shoulder Injury Related to Vaccine Administration", W.h48, H.sirva),
      row("B. Vasovagal syncope", W.h1, H.syncope),
    ],
  },
  {
    id: "varicella",
    name: "X. Varicella vaccines",
    rows: [
      row("A. Anaphylaxis", W.h4, H.anaphylaxis),
      row(
        "B. Disseminated varicella vaccine-strain viral disease",
        W.na,
        undefined,
        "Vaccine-strain virus identified",
      ),
      row(
        "B. Disseminated varicella vaccine-strain viral disease",
        W.d7_42,
        undefined,
        "If strain determination is not done or if laboratory testing is inconclusive",
      ),
      row("C. Varicella vaccine-strain viral reactivation", W.na),
      row("D. Shoulder Injury Related to Vaccine Administration", W.h48, H.sirva),
      row("E. Vasovagal syncope", W.h1, H.syncope),
    ],
  },
  {
    id: "rotavirus",
    name: "XI. Rotavirus vaccines",
    rows: [row("A. Intussusception", W.d1_21, H.intus)],
  },
  {
    id: "pneumococcal",
    name: "XII. Pneumococcal conjugate vaccines",
    rows: [
      row("A. Shoulder Injury Related to Vaccine Administration", W.h48, H.sirva),
      row("B. Vasovagal syncope", W.h1, H.syncope),
    ],
  },
  {
    id: "hepatitis-a",
    name: "XIII. Hepatitis A vaccines",
    rows: [
      row("A. Shoulder Injury Related to Vaccine Administration", W.h48, H.sirva),
      row("B. Vasovagal syncope", W.h1, H.syncope),
    ],
  },
  {
    id: "influenza",
    name: "XIV. Seasonal influenza vaccines",
    rows: [
      row("A. Anaphylaxis", W.h4, H.anaphylaxis),
      row("B. Shoulder Injury Related to Vaccine Administration", W.h48, H.sirva),
      row("C. Vasovagal syncope", W.h1, H.syncope),
      row("D. Guillain-Barré Syndrome", W.d3_42, H.gbs),
    ],
  },
  {
    id: "meningococcal",
    name: "XV. Meningococcal vaccines",
    rows: [
      row("A. Anaphylaxis", W.h4, H.anaphylaxis),
      row("B. Shoulder Injury Related to Vaccine Administration", W.h48, H.sirva),
      row("C. Vasovagal syncope", W.h1, H.syncope),
    ],
  },
  {
    id: "hpv",
    name: "XVI. Human papillomavirus (HPV) vaccines",
    rows: [
      row("A. Anaphylaxis", W.h4, H.anaphylaxis),
      row("B. Shoulder Injury Related to Vaccine Administration", W.h48, H.sirva),
      row("C. Vasovagal syncope", W.h1, H.syncope),
    ],
  },
  {
    id: "new-vaccine",
    name: "XVII. Any new vaccine recommended by the Centers for Disease Control and Prevention for routine administration to children and/or pregnant women, after publication by the Secretary of a notice of coverage",
    rows: [
      row("A. Shoulder Injury Related to Vaccine Administration", W.h48, H.sirva),
      row("B. Vasovagal syncope", W.h1, H.syncope),
    ],
  },
];

export function flatVaccineTableRows() {
  return vaccineTableCategories.flatMap((category) =>
    category.rows.map((entry) => ({
      categoryId: category.id,
      category: category.name,
      injury: entry.injury,
      qualifier: entry.qualifier ?? "",
      window: entry.window,
    })),
  );
}

export type TableNote = {
  id: string;
  title: string;
  paragraphs: string[];
  quote?: { text: string; cite: string };
  links?: { href: string; label: string }[];
};

export const tableNotes: TableNote[] = [
  {
    id: "reading-the-table",
    title: "The definitions are part of the Table",
    paragraphs: [
      "Paragraph (a) of the regulation sets out the vaccines, the injuries, and the time period for the first symptom or manifestation of onset or of the significant aggravation. Paragraph (c), the Qualifications and Aids to Interpretation, defines those terms. An injury that does not meet paragraph (c) is not a Table injury.",
      "Paragraph (b) adds three rules that apply across the Table. An acute complication or sequela of a listed injury, including death, is also a Table injury, unless paragraph (c) excludes it. In deciding whether an injury meets the Table, the Court considers the entire medical record. An idiopathic condition that meets a paragraph (c) definition is still a Table condition.",
    ],
    quote: {
      text: "Conditions and injuries that do not meet the terms of the qualifications and aids to interpretation are not within the Table.",
      cite: "42 CFR 100.3(a)",
    },
  },
  {
    id: "anaphylaxis",
    title: "Anaphylaxis",
    paragraphs: [
      "Where anaphylaxis is listed, the time period is ≤4 hours. It is listed for tetanus-toxoid vaccines, pertussis-containing vaccines, measles/mumps/rubella component vaccines, inactivated polio, hepatitis B, varicella, seasonal influenza, meningococcal, and HPV vaccines. It is not listed for Hib, rotavirus, pneumococcal conjugate, hepatitis A, or live oral polio (OPV) vaccines, or for category XVII (new vaccines).",
      "The definition requires one acute event with two or more organ systems involved at the same time. The regulation notes that most cases resolve without sequela, which is separate from the program's severity requirement.",
    ],
    quote: {
      text: "Anaphylaxis is an acute, severe, and potentially lethal systemic reaction that occurs as a single discrete event with simultaneous involvement of two or more organ systems.",
      cite: "42 CFR 100.3(c)(1)",
    },
    links: [{ href: "/injuries/anaphylaxis", label: "Anaphylaxis injury guide" }],
  },
  {
    id: "sirva",
    title: "SIRVA",
    paragraphs: [
      "Shoulder Injury Related to Vaccine Administration is listed for most injected vaccine categories in the Table, with a time period of ≤48 hours. Measles, mumps, and rubella vaccines, including MMR, are covered under category III. Categories IV (rubella-only) and V (measles-only) do not list SIRVA. It is also not listed for rotavirus or live oral polio (OPV). The regulation describes SIRVA as a musculoskeletal injury of the shoulder after a vaccine intended for intramuscular use in the upper arm, and states that it is not a neurological injury.",
      "All four of the following are required: no history of pain, inflammation, or dysfunction of that shoulder before the injection that would explain the later findings; pain within the Table time period; pain and reduced range of motion limited to the shoulder that received the injection; and no other condition that would explain the symptoms.",
    ],
    quote: {
      text: "SIRVA manifests as shoulder pain and limited range of motion occurring after the administration of a vaccine intended for intramuscular administration in the upper arm.",
      cite: "42 CFR 100.3(c)(10)",
    },
    links: [{ href: "/injuries/sirva", label: "SIRVA injury guide" }],
  },
  {
    id: "syncope",
    title: "Vasovagal syncope",
    paragraphs: [
      "Vasovagal syncope is listed for most injected vaccine categories, with a time period of ≤1 hour. It is on the same categories as SIRVA. Measles, mumps, and rubella vaccines, including MMR, are covered under category III. Categories IV (rubella-only) and V (measles-only) do not list it, and neither do rotavirus or live oral polio (OPV). The definition requires loss of consciousness and postural tone caused by a transient decrease in blood flow to the brain after an injected vaccine. Loss of consciousness from organic heart disease, cardiac arrhythmias, transient ischemic attacks, hyperventilation, metabolic conditions, neurological conditions, or seizures is not vasovagal syncope under the Table. Recurrent episodes after the time period are not a sequela of an episode that met the Table.",
    ],
    quote: {
      text: "Vasovagal syncope (also sometimes called neurocardiogenic syncope) means loss of consciousness (fainting) and postural tone caused by a transient decrease in blood flow to the brain occurring after the administration of an injected vaccine.",
      cite: "42 CFR 100.3(c)(13)",
    },
    links: [{ href: "/injuries/syncope-fainting", label: "Fainting injury guide" }],
  },
  {
    id: "gbs",
    title: "Guillain-Barré syndrome",
    paragraphs: [
      "Guillain-Barré Syndrome is listed only for seasonal influenza vaccines. The time period is 3-42 days (not less than 3 days and not more than 42 days). The definition describes an acute monophasic peripheral neuropathy. For each subtype, the interval from the first symptoms to the nadir of weakness is between 12 hours and 28 days, followed by a clinical plateau or by improvement without significant relapse. Death may occur without a plateau. Treatment-related fluctuations can occur within 9 weeks of symptom onset; recurrence after that time frame would not be consistent with GBS.",
      "Paragraph (c)(15)(vi) lists diagnoses that exclude Table GBS. The list includes chronic immune demyelinating polyradiculopathy (CIDP) and myelitis, and the regulation says the list is not exhaustive.",
    ],
    quote: {
      text: "GBS is an acute monophasic peripheral neuropathy that encompasses a spectrum of four clinicopathological subtypes described below. For each subtype of GBS, the interval between the first appearance of symptoms and the nadir of weakness is between 12 hours and 28 days.",
      cite: "42 CFR 100.3(c)(15)(i)",
    },
    links: [
      { href: "/injuries/guillain-barre-syndrome", label: "Guillain-Barré syndrome guide" },
      { href: "/injuries/cidp", label: "CIDP guide" },
    ],
  },
  {
    id: "brachial-neuritis",
    title: "Brachial neuritis",
    paragraphs: [
      "Brachial neuritis is listed for vaccines containing tetanus toxoid. The time period is 2-28 days (not less than 2 days and not more than 28 days). The regulation describes dysfunction limited to the upper extremity nerve plexus. Deep, steady, often severe aching pain in the shoulder and upper arm usually heralds onset, followed in days or weeks by weakness. It may be on the same side as the injection, the opposite side, or both sides.",
      "A Table brachial neuritis requires all of the following: pain in the affected arm and shoulder as a presenting symptom within the time period; weakness, with the regulation's rules for when nerve studies are required; examination and any nerve studies consistent with a brachial plexus problem; and no other condition that would explain the symptoms.",
    ],
    links: [{ href: "/injuries/brachial-neuritis", label: "Brachial neuritis guide" }],
  },
  {
    id: "encephalopathy",
    title: "Encephalopathy and encephalitis",
    paragraphs: [
      "Encephalopathy or encephalitis is listed for pertussis-containing vaccines at ≤72 hours, and for vaccines containing measles, mumps, and rubella virus or any of its components at 5-15 days (not less than 5 days and not more than 15 days). A Table encephalopathy requires an acute encephalopathy inside that window that results in a chronic encephalopathy. A chronic encephalopathy, as paragraph (d) defines it, is a change in mental or neurologic status that persists for at least 6 months from the first symptom.",
      "Seizures alone do not establish an acute encephalopathy. Encephalitis adds evidence of brain inflammation to neurologic dysfunction, and it likewise must result in a chronic encephalopathy. Paragraphs (c)(2) and (c)(3) also list exclusionary causes, such as an unrelated infection or trauma.",
    ],
    quote: {
      text: "Seizures in themselves are not sufficient to constitute a diagnosis of encephalopathy and in the absence of other evidence of an acute encephalopathy seizures shall not be viewed as the first symptom or manifestation of an acute encephalopathy.",
      cite: "42 CFR 100.3(c)(2)(i)(D)",
    },
    links: [{ href: "/blog/encephalopathy-after-vaccine-vicp", label: "Encephalopathy and encephalitis guide" }],
  },
  {
    id: "itp",
    title: "Thrombocytopenic purpura",
    paragraphs: [
      "Thrombocytopenic purpura is listed for vaccines containing measles virus. The time period is 7-30 days (not less than 7 days and not more than 30 days). The definition requires clinical signs such as petechiae, significant bruising, or spontaneous bleeding, plus a serum platelet count less than 50,000/mm3 with normal red and white blood cell indices. The same paragraph excludes thrombocytopenia attributed to a list of other causes. If testing is done and the viral illness is attributed to the vaccine-strain measles virus, the presumption of causation remains in effect.",
    ],
    links: [{ href: "/injuries/itp-thrombocytopenic-purpura", label: "ITP injury guide" }],
  },
  {
    id: "chronic-arthritis",
    title: "Chronic arthritis",
    paragraphs: [
      "Chronic arthritis is listed for vaccines containing rubella virus. The time period is 7-42 days (not less than 7 days and not more than 42 days). The definition is persistent joint swelling with at least two additional manifestations of warmth, tenderness, pain with movement, or limited range of motion, lasting for at least 6 months. Paragraph (c)(5) also requires medical documentation of the acute arthritis, of persistence for more than 6 months, and of an antibody response to rubella virus. Joint pain or stiffness without swelling is not chronic arthritis under that paragraph.",
    ],
  },
  {
    id: "intussusception",
    title: "Intussusception",
    paragraphs: [
      "Intussusception is listed for rotavirus vaccines. The time period is 1-21 days (not less than 1 day and not more than 21 days). Paragraph (c)(4)(ii) says the following are not a Table intussusception: onset with or after the third dose of a rotavirus-containing vaccine; onset within 14 days after an infectious disease associated with intussusception; onset in a person with a preexisting lead point such as a polyp or Meckel's diverticulum; onset with specified bowel abnormalities; and onset with specified underlying conditions, including cystic fibrosis, celiac disease, or Kawasaki disease.",
    ],
    links: [{ href: "/blog/intussusception-after-rotavirus-vaccine-vicp", label: "Intussusception guide" }],
  },
  {
    id: "vaccine-strain",
    title: "Vaccine-strain viral disease",
    paragraphs: [
      "For vaccine-strain measles viral disease in an immunodeficient recipient, and for disseminated varicella vaccine-strain viral disease, the Table uses two time periods. If testing identifies the vaccine-strain virus, the time period is \"Not applicable.\" If strain determination is not done or the laboratory result is inconclusive, measles illness in any organ must occur within 12 months, and disseminated varicella illness must occur 7-42 days after vaccination. If testing shows wild-type virus or another non-vaccine strain, the condition is not a Table injury.",
      "Varicella vaccine-strain viral reactivation has a time period of \"Not applicable\" and requires laboratory confirmation of vaccine-strain virus. Live oral polio vaccine has separate time periods for paralytic polio and vaccine-strain polio viral infection, depending on whether the recipient is immunodeficient, and \"Not applicable\" for a vaccine-associated community case. \"Immunodeficient recipient\" is defined in paragraph (c)(14).",
    ],
  },
];

export const tableFaqs: FaqItem[] = [
  {
    q: "What is the Vaccine Injury Table?",
    a: "It is the federal list in 42 CFR 100.3 of vaccine categories, the injuries associated with them, and the time period in which the first symptom or manifestation of onset, or of significant aggravation, must occur. The Qualifications and Aids to Interpretation in paragraph (c) are part of the Table. An injury that does not meet those qualifications is not a Table injury.",
  },
  {
    q: "What is an on-Table claim?",
    a: "An on-Table claim is one in which the vaccine, the injury, and the timing all meet the Vaccine Injury Table, including its definitions. When they do, the law presumes the vaccine caused the injury unless a preponderance of the evidence shows the injury was due to factors unrelated to the vaccine.",
  },
  {
    q: "What is an off-Table claim?",
    a: "An off-Table claim is a petition for an injury that is not on the Table for that vaccine, or that does not meet the Table's time period or definition. Off-Table claims can still be filed. The person filing then has to prove the vaccine caused the injury, usually with medical records and medical opinion.",
  },
  {
    q: "Does matching an onset window mean the claim will succeed?",
    a: "No. The onset window is one requirement. The injury also has to meet the Table's definition, the petition has to meet the severity requirement (effects lasting more than 6 months, or inpatient hospitalization and surgical intervention, or death), and it has to be filed on time. A special master can deny a Table claim when the evidence shows the injury was due to something unrelated to the vaccine. The outcome of another case does not predict this one.",
  },
  {
    q: "Are COVID-19 vaccines on this Table?",
    a: "No. COVID-19 vaccines are not listed in 42 CFR 100.3. HRSA directs claims associated with a COVID-19 vaccine, or with other COVID-19 countermeasures, to the Countermeasures Injury Compensation Program. That program has its own rules, including a filing deadline of one year from the date the countermeasure was administered or used.",
  },
  {
    q: "How long do I have to file a VICP petition?",
    a: "For an injury from a vaccine given after October 1, 1988, a petition generally must be filed within 36 months after the first symptom or manifestation of onset or of the significant aggravation of the injury. For a death, the petition must be filed within 24 months of the death and not more than 48 months after the first symptom of the injury from which the death resulted. A report to VAERS is not a petition and does not stop that clock.",
  },
];

export const TABLE_RELATED_POSTS = [
  "difference-between-table-injury-and-off-table-injury",
  "what-injuries-qualify-for-vaccine-compensation",
  "how-long-do-i-have-to-file-a-vaccine-injury-claim",
  "what-are-the-severity-requirements-for-a-vicp-claim",
  "how-to-prove-vaccine-caused-injury-althen-test",
  "can-i-sue-for-covid-vaccine-side-effects",
  "flu-shot-injury-vicp-compensation",
] as const;

export const vaccineTableSources: Source[] = [
  S.injuryTable,
  S.usc300aa14,
  S.usc300aa11,
  S.usc300aa13,
  S.usc300aa16,
  S.hrsaCoveredVaccines,
  S.hrsaWhoCanFile,
  S.hrsaCicp,
  S.hrsaCicpVsVicp,
  S.hrsaCicpFiling,
  S.vaers,
];
