import { SOURCES as S, type Source } from "@/lib/sources";
import type { FaqItem } from "@/lib/seo";

/**
 * Injury hub pages (/injuries/[slug]).
 *
 * Accuracy rules for this file:
 * - Vaccine Injury Table entries and onset windows are quoted from 42 CFR 100.3
 *   (S.injuryTable). Never paraphrase a time window; copy it or leave it out.
 * - Medical descriptions come from NIH (NINDS, NHLBI, MedlinePlus) or CDC pages listed in
 *   each hub's `sources`.
 * - No statistics. Say "uncommon" or "rare" only where the cited source does.
 * - FAQ text is rendered verbatim and reused for FAQPage structured data.
 */

export type TableEntry = {
  /** Vaccine category as named in 42 CFR 100.3. */
  vaccines: string;
  /** Time period for first symptom, quoted from 42 CFR 100.3. */
  window: string;
};

export type InjuryHub = {
  slug: string;
  /** Full display name (H1). */
  name: string;
  /** Short name for cards, breadcrumbs, and links. */
  shortName: string;
  /** Name as used mid-sentence in headings ("What is {term}?"). */
  term: string;
  /** <title> (the layout appends " | VaccineInjuries.org"). */
  metaTitle: string;
  description: string;
  /** One- or two-sentence summary for the hero and the index card. */
  summary: string;
  onTable: boolean;
  /** Short label for the index card, e.g. "On the Table for flu vaccines". */
  tableLabel: string;
  /** Calm note that the injury is uncommon (no numbers). */
  uncommonNote: string;
  /** Plain-language overview. Lightweight markdown (paragraphs, links, **bold**). */
  overview: string;
  symptoms: string[];
  onset: string;
  tableIntro: string;
  tableEntries: TableEntry[];
  /** Verbatim quote from the 42 CFR 100.3 definition (qualifications and aids to interpretation). */
  tableQuote?: string;
  tableNotes: string[];
  records: string[];
  faqs: FaqItem[];
  /** Blog post slugs (must exist in src/content/blog/posts.ts). */
  relatedPosts: string[];
  sources: Source[];
  /** ISO YYYY-MM-DD. */
  datePublished: string;
  lastReviewed: string;
};

const PUBLISHED = "2026-10-06";
const REVIEWED = "2026-10-06";

// Vaccine category names as written in the Table (42 CFR 100.3(a)).
const CAT = {
  tetanus: "Vaccines containing tetanus toxoid (e.g., DTaP, DTP, DT, Td, or TT)",
  pertussis:
    "Vaccines containing whole cell pertussis bacteria, extracted or partial cell pertussis bacteria, or specific pertussis antigen(s) (e.g., DTP, DTaP, P, DTP-Hib)",
  mmr: "Vaccines containing measles, mumps, and rubella virus or any of its components (e.g., MMR, MM, MMRV)",
  measles: "Vaccines containing measles virus (e.g., MMR, MM, MMRV)",
  ipv: "Vaccines containing polio inactivated virus (e.g., IPV)",
  hepB: "Hepatitis B vaccines",
  hib: "Haemophilus influenzae type b (Hib) vaccines",
  varicella: "Varicella vaccines",
  pcv: "Pneumococcal conjugate vaccines",
  hepA: "Hepatitis A vaccines",
  flu: "Seasonal influenza vaccines",
  mening: "Meningococcal vaccines",
  hpv: "Human papillomavirus (HPV) vaccines",
  newVaccine:
    "Any new vaccine recommended by the Centers for Disease Control and Prevention for routine administration to children and/or pregnant women, after publication by the Secretary of a notice of coverage",
} as const;

const allInjected = (window: string): TableEntry[] =>
  [
    CAT.tetanus,
    CAT.pertussis,
    CAT.mmr,
    CAT.ipv,
    CAT.hepB,
    CAT.hib,
    CAT.varicella,
    CAT.pcv,
    CAT.hepA,
    CAT.flu,
    CAT.mening,
    CAT.hpv,
    CAT.newVaccine,
  ].map((vaccines) => ({ vaccines, window }));

export const injuryHubs: InjuryHub[] = [
  // ─── SIRVA ───────────────────────────────────────────────────────────────────
  {
    slug: "sirva",
    name: "SIRVA (Shoulder Injury Related to Vaccine Administration)",
    shortName: "SIRVA",
    term: "SIRVA",
    metaTitle: "SIRVA: Shoulder Injury After a Vaccine — Symptoms, Table Rules & Deadlines",
    description:
      "What SIRVA is, how it differs from ordinary soreness, how the Vaccine Injury Table defines it (pain within 48 hours), filing deadlines, and which records matter.",
    summary:
      "A shoulder injury — not a nerve injury — that can follow a shot given in the upper arm, with pain and reduced range of motion that don't fade like ordinary soreness.",
    onTable: true,
    tableLabel: "On the Table for most covered vaccines",
    uncommonNote:
      "Mild soreness where a shot was given is common and usually passes within days. SIRVA is different and uncommon. Most people who get vaccinated in the arm never develop it.",
    overview: `SIRVA stands for shoulder injury related to vaccine administration. It describes shoulder pain and limited range of motion that begin soon after a vaccine is given into the upper arm. The federal Vaccine Injury Table explains that these symptoms are thought to result from vaccine or needle trauma reaching the bursa and other structures around the shoulder joint, which causes inflammation.

SIRVA is a **musculoskeletal** injury, involving tendons, ligaments, and bursae, rather than a nerve injury. That distinction matters: a nerve problem in the arm after a vaccine, such as [brachial neuritis](/injuries/brachial-neuritis), is evaluated differently.

Your doctor may record the injury using a more specific shoulder diagnosis. For a claim, what matters is the overall picture in the medical records, including when the pain started. Under the Table, the Court considers the entire medical record.`,
    symptoms: [
      "Pain in the shoulder of the arm that received the shot",
      "Reduced range of motion, such as trouble lifting the arm, reaching overhead, or reaching behind the back",
      "Pain and stiffness that persist instead of fading over a few days",
      "Symptoms limited to the shoulder where the vaccine was given",
    ],
    onset:
      "For a Table SIRVA claim, the regulation requires that pain begin within 48 hours of vaccination. Because timing is central, the earliest medical note that records your shoulder pain, and when it began, carries a lot of weight.",
    tableIntro:
      "Yes. Shoulder Injury Related to Vaccine Administration is listed on the Vaccine Injury Table for nearly every vaccine category that is injected, with the same time period for each:",
    tableEntries: allInjected("≤48 hours."),
    tableQuote:
      "SIRVA manifests as shoulder pain and limited range of motion occurring after the administration of a vaccine intended for intramuscular administration in the upper arm.",
    tableNotes: [
      "The Table definition requires all four of these: no history of pain, inflammation, or dysfunction of that shoulder before the vaccine that would explain the symptoms; pain within the time period; pain and reduced range of motion limited to the shoulder where the shot was given; and no other condition that would explain the symptoms.",
      "The regulation states that SIRVA \"is not a neurological injury.\" Abnormal nerve testing points away from Table SIRVA, though it may support a different claim.",
      "SIRVA is not listed for rotavirus or oral polio vaccines, which are not given as shots in the arm. COVID-19 vaccines are not covered by the VICP; those claims go to the [CICP](/blog/can-i-sue-for-covid-vaccine-side-effects).",
      "If the facts don't fit the Table definition, an off-Table claim may still be possible, but it requires proof that the vaccine caused the injury.",
    ],
    records: [
      "Vaccination record showing the date, the vaccine given, and which arm",
      "The first medical notes documenting shoulder pain and when it started (urgent care, primary care, pharmacy follow-up, or patient portal messages)",
      "Orthopedic evaluations and any imaging reports, such as MRI or ultrasound",
      "Physical therapy records, including range-of-motion measurements",
      "Records of injections, surgery, or other treatment for the shoulder",
      "Earlier records showing that shoulder had no prior problems",
      "Notes on how the injury affects work, sleep, and daily tasks",
    ],
    faqs: [
      {
        q: "Is a sore arm after a shot the same as SIRVA?",
        a: "No. Mild soreness where a shot was given is common and usually fades within a few days. SIRVA refers to shoulder pain and reduced range of motion that begin within 48 hours of the vaccine and persist, and it has a specific definition in the Vaccine Injury Table.",
      },
      {
        q: "Which vaccines list SIRVA on the Vaccine Injury Table?",
        a: "SIRVA is listed for nearly every injected vaccine category covered by the VICP, including seasonal flu, tetanus-containing vaccines such as Tdap and Td, HPV, hepatitis A and B, pneumococcal conjugate, and meningococcal vaccines. It is not listed for rotavirus or oral polio vaccines. COVID-19 vaccines are not part of the VICP.",
      },
      {
        q: "Does SIRVA have to last a certain amount of time to qualify?",
        a: "The VICP generally requires that the effects of an injury last more than six months after vaccination, or result in inpatient hospitalization and surgical intervention, or result in death. Whether a particular shoulder injury meets that requirement depends on the medical records.",
      },
      {
        q: "What if I had shoulder problems before the vaccine?",
        a: "The Table definition requires no prior history of pain, inflammation, or dysfunction in that shoulder that would explain the symptoms after the vaccine. Earlier shoulder issues do not automatically rule out a claim, but they can make a Table claim harder, so the earlier records would be reviewed closely.",
      },
    ],
    relatedPosts: [
      "what-is-sirva-and-can-it-qualify-for-compensation",
      "flu-shot-injury-vicp-compensation",
      "tdap-td-vaccine-vicp-coverage",
      "hpv-vaccine-vicp-coverage",
      "pneumococcal-vaccine-vicp-coverage",
      "difference-between-table-injury-and-off-table-injury",
      "what-injuries-qualify-for-vaccine-compensation",
      "what-medical-records-do-i-need-for-a-vaccine-injury-claim",
    ],
    sources: [S.injuryTable, S.hrsaCoveredVaccines, S.hrsaWhoCanFile, S.hrsaVicp],
    datePublished: PUBLISHED,
    lastReviewed: REVIEWED,
  },

  // ─── GBS ─────────────────────────────────────────────────────────────────────
  {
    slug: "guillain-barre-syndrome",
    name: "Guillain-Barré Syndrome (GBS)",
    shortName: "Guillain-Barré syndrome",
    term: "Guillain-Barré syndrome",
    metaTitle: "Guillain-Barré Syndrome (GBS) After a Vaccine — Table Rules & Deadlines",
    description:
      "A plain-language guide to Guillain-Barré syndrome after vaccination: symptoms, the Vaccine Injury Table rule for seasonal flu vaccines (3–42 days), deadlines, and records.",
    summary:
      "A rare disorder in which the immune system attacks the peripheral nerves, causing weakness that can come on quickly. It is on the Table for seasonal flu vaccines.",
    onTable: true,
    tableLabel: "On the Table for seasonal flu vaccines",
    uncommonNote:
      "Guillain-Barré syndrome is rare. NINDS notes that it usually starts a few days or weeks after a respiratory or gastrointestinal infection, and that most people eventually recover.",
    overview: `Guillain-Barré syndrome (GBS) is a rare neurological disorder in which the body's immune system mistakenly attacks part of the peripheral nervous system, the nerves outside the brain and spinal cord. According to the [National Institute of Neurological Disorders and Stroke](https://www.ninds.nih.gov/health-information/disorders/guillain-barre-syndrome), it often begins suddenly and can worsen over hours, days, or weeks.

The [CDC](https://www.cdc.gov/vaccine-safety/about/guillain-barre.html) notes that GBS often follows an infection with a virus or bacteria. Timing after a vaccine, on its own, doesn't show that the vaccine was the cause, which is why the full medical history, including any recent illness, matters.

People with GBS are usually treated in the hospital. NINDS notes that most people eventually recover, even from severe cases, though some continue to have weakness afterward.`,
    symptoms: [
      "Weakness that often starts in the feet and legs and can spread upward",
      "Tingling, \"pins and needles,\" or pain, often in the feet, hands, legs, or back",
      "Difficulty walking, climbing stairs, or keeping balance",
      "In more serious cases, trouble with facial or eye muscles, swallowing, or breathing",
      "Changes in heart rate or blood pressure",
    ],
    onset:
      "NINDS notes that most people reach their weakest point within the first two weeks after symptoms appear, and that GBS usually starts a few days or weeks after a respiratory or gastrointestinal infection. For a Table claim after a seasonal flu vaccine, the first symptom must begin 3 to 42 days after vaccination (the exact wording is below).",
    tableIntro:
      "Yes, for one vaccine category. Guillain-Barré syndrome is listed on the Vaccine Injury Table for seasonal flu vaccines only:",
    tableEntries: [{ vaccines: CAT.flu, window: "3-42 days (not less than 3 days and not more than 42 days)." }],
    tableNotes: [
      "The Table describes GBS as \"an acute monophasic peripheral neuropathy\" in which the time from first symptoms to the worst point of weakness \"is between 12 hours and 28 days,\" followed by a plateau or improvement.",
      "The Table excludes cases where another diagnosis is more likely, and it lists conditions that rule out Table GBS, including chronic immune demyelinating polyradiculopathy ([CIDP](/injuries/cidp)) and myelitis.",
      "After other VICP-covered vaccines, GBS is not on the Table. A claim would be off-Table and would need proof that the vaccine caused it.",
      "COVID-19 vaccines are covered by the CICP rather than the VICP, and there is currently no COVID-19 injury table.",
    ],
    records: [
      "Vaccination record showing the vaccine and date",
      "Emergency room and hospital records, including the admission history of when symptoms began",
      "Neurology consultations and the discharge diagnosis",
      "Nerve conduction studies or EMG, and lumbar puncture (spinal fluid) results",
      "Treatment records, such as IVIG or plasma exchange",
      "Records of any illness in the weeks before symptoms started",
      "Rehabilitation, physical therapy, and follow-up records showing recovery or lasting effects",
    ],
    faqs: [
      {
        q: "Is Guillain-Barré syndrome on the Vaccine Injury Table?",
        a: "Yes, for seasonal flu vaccines. The Table lists GBS when the first symptom begins 3 to 42 days after a seasonal influenza vaccine and the case meets the Table's definition. For other covered vaccines, GBS is not on the Table, so a claim would need to prove the vaccine caused it.",
      },
      {
        q: "Does getting GBS after a vaccine mean the vaccine caused it?",
        a: "Not necessarily. GBS often follows a viral or bacterial infection, and timing alone does not prove cause. That is why the medical records, including any recent illness, are reviewed closely.",
      },
      {
        q: "What if my GBS followed a COVID-19 vaccine?",
        a: "COVID-19 vaccine claims go to the Countermeasures Injury Compensation Program (CICP), not the VICP. There is currently no COVID-19 injury table, and the CICP generally requires filing within one year of vaccination.",
      },
      {
        q: "How long do I have to file a GBS claim with the VICP?",
        a: "Generally within three years after the first symptom. If GBS led to a death, the claim must be filed within two years of the death and within four years of the first symptom. These deadlines are strict, so it helps to write down your dates early.",
      },
    ],
    relatedPosts: [
      "guillain-barre-vaccine-injury-claims",
      "flu-shot-injury-vicp-compensation",
      "what-injuries-qualify-for-vaccine-compensation",
      "difference-between-table-injury-and-off-table-injury",
      "can-i-sue-for-covid-vaccine-side-effects",
      "first-30-days-suspected-vaccine-injury",
    ],
    sources: [S.injuryTable, S.nindsGbs, S.cdcGbs, S.hrsaWhoCanFile, S.hrsaCicp, S.hrsaCicpFiling],
    datePublished: PUBLISHED,
    lastReviewed: REVIEWED,
  },

  // ─── TRANSVERSE MYELITIS ─────────────────────────────────────────────────────
  {
    slug: "transverse-myelitis",
    name: "Transverse Myelitis",
    shortName: "Transverse myelitis",
    term: "transverse myelitis",
    metaTitle: "Transverse Myelitis After a Vaccine — Off-Table Claims & Deadlines",
    description:
      "What transverse myelitis is, its symptoms and onset, why it is an off-Table VICP claim, filing deadlines, and the records that matter.",
    summary:
      "Inflammation of the spinal cord that can cause weakness, pain, numbness, and bladder or bowel problems. It is not on the Vaccine Injury Table.",
    onTable: false,
    tableLabel: "Not on the Table (off-Table claim)",
    uncommonNote:
      "Transverse myelitis is uncommon. NINDS notes that it is usually caused by other conditions, such as infections or immune system disorders, and that a vaccine is a rare trigger.",
    overview: `Transverse myelitis is inflammation of the spinal cord. According to the [National Institute of Neurological Disorders and Stroke](https://www.ninds.nih.gov/health-information/disorders/transverse-myelitis), the inflammation can damage the myelin that insulates nerve fibers, which interrupts signals between the spinal cord and the rest of the body.

NINDS lists several possible causes, including infections, other immune system conditions such as multiple sclerosis, and a post-infectious or post-vaccine autoimmune response. It notes that a vaccine is a rare trigger, and in some cases no cause is found.

Most people have at least partial recovery, according to NINDS, though recovery can take months or longer and some people have lasting effects.`,
    symptoms: [
      "Weakness in the legs, and sometimes the arms",
      "Pain, often in the lower back or as sharp, shooting pain in the legs, arms, or around the torso",
      "Numbness, tingling, burning, or sensitivity to touch, sometimes felt as a band around the trunk",
      "Bladder and bowel problems",
    ],
    onset:
      "NINDS describes transverse myelitis as either acute (developing over minutes to several days) or subacute (usually developing over one to four weeks). Because it is not on the Table, there is no regulatory onset window; instead, the timing is one piece of the causation evidence.",
    tableIntro:
      "No. Transverse myelitis is not listed on the Vaccine Injury Table for any vaccine. A VICP claim for transverse myelitis is an off-Table claim.",
    tableEntries: [],
    tableNotes: [
      "In an off-Table claim, the petitioner must show that the vaccine more likely than not caused the condition. This usually involves medical records, medical literature, and expert opinion.",
      "Off-Table claims can be compensated, but they are typically more complex and take longer than Table claims.",
      "The Table's definition of Guillain-Barré syndrome lists myelitis as a condition that rules out Table GBS, so the final diagnosis in the records matters.",
      "COVID-19 vaccine claims go to the CICP, which has no COVID-19 injury table and a one-year filing deadline.",
    ],
    records: [
      "Vaccination record showing the vaccine and date",
      "A clear timeline of when the first symptoms appeared",
      "MRI reports of the spine and brain",
      "Lumbar puncture (spinal fluid) and blood test results",
      "Neurology records, including tests used to rule out other causes",
      "Hospital, rehabilitation, and urology or bowel-care records",
      "Follow-up records showing recovery or lasting effects",
    ],
    faqs: [
      {
        q: "Is transverse myelitis on the Vaccine Injury Table?",
        a: "No. Transverse myelitis is not listed on the Vaccine Injury Table, so a VICP claim would be an off-Table claim. Off-Table claims can be compensated, but they require evidence that the vaccine more likely than not caused the condition.",
      },
      {
        q: "Can a vaccine cause transverse myelitis?",
        a: "The National Institute of Neurological Disorders and Stroke lists a post-infectious or post-vaccine autoimmune response among possible causes and notes that a vaccine is a rare trigger. Many cases have other causes, and some have no identified cause. Whether a vaccine caused a specific case is decided on the evidence.",
      },
      {
        q: "What evidence matters most in an off-Table claim?",
        a: "Usually a clear timeline from vaccination to first symptoms, imaging and test results confirming the diagnosis, records showing that other likely causes were considered, and an expert medical opinion explaining how the vaccine could have caused the condition.",
      },
      {
        q: "Is there a deadline to file?",
        a: "Yes. VICP claims generally must be filed within three years after the first symptom. COVID-19 vaccine claims go to the CICP, which generally requires filing within one year of vaccination.",
      },
    ],
    relatedPosts: [
      "difference-between-table-injury-and-off-table-injury",
      "what-are-the-severity-requirements-for-a-vicp-claim",
      "what-medical-records-do-i-need-for-a-vaccine-injury-claim",
      "how-long-do-i-have-to-file-a-vaccine-injury-claim",
      "what-happens-after-you-file-a-vicp-petition",
      "first-30-days-suspected-vaccine-injury",
    ],
    sources: [S.nindsTm, S.injuryTable, S.hrsaCoveredVaccines, S.hrsaWhoCanFile, S.hrsaCicpFiling],
    datePublished: PUBLISHED,
    lastReviewed: REVIEWED,
  },

  // ─── CIDP ────────────────────────────────────────────────────────────────────
  {
    slug: "cidp",
    name: "CIDP (Chronic Inflammatory Demyelinating Polyneuropathy)",
    shortName: "CIDP",
    term: "CIDP",
    metaTitle: "CIDP After a Vaccine — Off-Table Claims, GBS Differences & Deadlines",
    description:
      "What CIDP is, how it differs from Guillain-Barré syndrome, why it is an off-Table VICP claim, filing deadlines, and which records matter.",
    summary:
      "A long-lasting or recurring nerve disorder in which the immune system damages the covering of peripheral nerves. It is not on the Vaccine Injury Table.",
    onTable: false,
    tableLabel: "Not on the Table (off-Table claim)",
    uncommonNote:
      "CIDP is uncommon, and in many cases no cause is identified. A diagnosis of CIDP after a vaccine does not, by itself, mean the vaccine caused it.",
    overview: `Chronic inflammatory demyelinating polyneuropathy (CIDP) is a disorder in which inflammation damages myelin, the protective covering of the peripheral nerves. According to [MedlinePlus](https://medlineplus.gov/ency/article/000777.htm), it is caused by an abnormal immune response, and in many cases the cause cannot be identified.

MedlinePlus describes CIDP as the chronic form of [Guillain-Barré syndrome](/injuries/guillain-barre-syndrome). The difference is the course: GBS is a single episode that reaches its worst point within weeks, while CIDP continues over a longer period or comes back in repeated episodes.

Some people are first diagnosed with GBS and later re-diagnosed with CIDP when symptoms keep progressing or return. That change can matter a great deal for a compensation claim.`,
    symptoms: [
      "Trouble walking because of weakness or numbness in the feet or legs",
      "Trouble using the arms and hands because of weakness",
      "Numbness, tingling, burning, or pain, usually starting in the feet",
      "Fatigue",
      "Symptoms that continue long term or come back in repeated episodes",
    ],
    onset:
      "CIDP develops more gradually than GBS and follows a longer course. Because it is not on the Table, there is no regulatory onset window. Pinning down when symptoms first appeared still matters, both for causation and because the VICP filing deadline runs from the first symptom.",
    tableIntro:
      "No. CIDP is not listed on the Vaccine Injury Table for any vaccine. A VICP claim for CIDP is an off-Table claim.",
    tableEntries: [],
    tableNotes: [
      "The Table's definition of Guillain-Barré syndrome specifically excludes cases with an \"ultimate diagnosis\" of \"chronic immune demyelinating polyradiculopathy (CIDP).\" So even after a seasonal flu vaccine, a final diagnosis of CIDP is not treated as Table GBS.",
      "In an off-Table claim, the petitioner must show that the vaccine more likely than not caused the condition, usually with medical records and expert opinion.",
      "COVID-19 vaccine claims go to the CICP, which has no COVID-19 injury table and a one-year filing deadline.",
    ],
    records: [
      "Vaccination record showing the vaccine and date",
      "Neurology records from the first visit onward, including any earlier GBS diagnosis",
      "Nerve conduction studies and EMG, especially repeated studies over time",
      "Lumbar puncture (spinal fluid) results",
      "Treatment records, such as IVIG, steroids, or plasma exchange, and how you responded",
      "Records showing other possible causes were considered",
      "Notes on how symptoms affect walking, work, and daily life",
    ],
    faqs: [
      {
        q: "Is CIDP on the Vaccine Injury Table?",
        a: "No. CIDP is not listed on the Vaccine Injury Table for any vaccine. The Table's definition of Guillain-Barré syndrome also lists CIDP as an exclusion, so a CIDP diagnosis is handled as an off-Table claim.",
      },
      {
        q: "What if I was first diagnosed with GBS and later told it was CIDP?",
        a: "That happens, and it matters for a claim. Because the Table excludes an ultimate diagnosis of CIDP from Table GBS, the final diagnosis can change whether a case is presented as a Table or off-Table claim. Keep all of your neurology records, including later ones.",
      },
      {
        q: "How is CIDP different from Guillain-Barré syndrome?",
        a: "Both involve the immune system damaging the covering of peripheral nerves. GBS is a single episode that reaches its worst point within weeks, while CIDP is chronic and may continue or return over time. MedlinePlus describes CIDP as the chronic form of Guillain-Barré syndrome.",
      },
      {
        q: "Is there a deadline for a CIDP claim?",
        a: "Yes. Under the VICP, a claim generally must be filed within three years after the first symptom or manifestation of onset. Because CIDP can develop gradually, it is important to identify when symptoms first started.",
      },
    ],
    relatedPosts: [
      "guillain-barre-vaccine-injury-claims",
      "difference-between-table-injury-and-off-table-injury",
      "what-are-the-severity-requirements-for-a-vicp-claim",
      "what-medical-records-do-i-need-for-a-vaccine-injury-claim",
      "how-long-do-i-have-to-file-a-vaccine-injury-claim",
      "flu-shot-injury-vicp-compensation",
    ],
    sources: [S.medlineCidp, S.injuryTable, S.hrsaCoveredVaccines, S.hrsaWhoCanFile, S.hrsaCicpFiling],
    datePublished: PUBLISHED,
    lastReviewed: REVIEWED,
  },

  // ─── BRACHIAL NEURITIS ───────────────────────────────────────────────────────
  {
    slug: "brachial-neuritis",
    name: "Brachial Neuritis",
    shortName: "Brachial neuritis",
    term: "brachial neuritis",
    metaTitle: "Brachial Neuritis After a Vaccine — Table Rules (2–28 Days) & Deadlines",
    description:
      "What brachial neuritis is, how it differs from SIRVA, the Vaccine Injury Table rule for tetanus-containing vaccines (2–28 days), deadlines, and records.",
    summary:
      "A nerve injury involving the brachial plexus, usually starting with deep shoulder and arm pain followed by weakness. It is on the Table for tetanus-containing vaccines.",
    onTable: true,
    tableLabel: "On the Table for tetanus-containing vaccines",
    uncommonNote:
      "Brachial neuritis is uncommon, and it can also occur after infections, surgery, or with no known trigger. Most people vaccinated with Tdap or Td never experience it.",
    overview: `Brachial neuritis is a disorder of the brachial plexus, the network of nerves that runs from the neck through the shoulder and into the arm. Doctors may also call it brachial plexopathy or Parsonage-Turner syndrome, which [MedlinePlus](https://medlineplus.gov/ency/article/001418.htm) describes as a rare inflammatory or post-viral brachial plexus disease.

The Vaccine Injury Table describes it this way: a deep, steady, often severe aching pain in the shoulder and upper arm usually comes first, and it is typically followed in days or weeks by weakness in the affected arm muscles. Unlike [SIRVA](/injuries/sirva), brachial neuritis is a **nerve** injury. The Table notes it can appear on the same side as the injection, the opposite side, or both arms.`,
    symptoms: [
      "Deep, steady, often severe aching pain in the shoulder and upper arm",
      "Weakness in arm or shoulder muscles that follows the pain, often days or weeks later",
      "Numbness or other sensory changes (usually less noticeable than the weakness)",
      "Shrinking (atrophy) of affected muscles over time",
    ],
    onset:
      "For a Table claim after a tetanus-containing vaccine, the first symptom must begin 2 to 28 days after vaccination (the exact wording is below). Pain in the arm and shoulder is typically the first symptom.",
    tableIntro:
      "Yes, for one vaccine category. Brachial neuritis is listed on the Vaccine Injury Table for vaccines containing tetanus toxoid, which includes Tdap, Td, DTaP, DT, and TT:",
    tableEntries: [{ vaccines: CAT.tetanus, window: "2-28 days (not less than 2 days and not more than 28 days)." }],
    tableQuote:
      "This term is defined as dysfunction limited to the upper extremity nerve plexus (i.e., its trunks, divisions, or cords).",
    tableNotes: [
      "The Table definition requires: arm and shoulder pain as a presenting symptom within the time period; weakness; exam findings (and nerve studies, if done) consistent with a brachial plexus problem; and no other condition that would explain the symptoms.",
      "If weakness is limited to muscles supplied by a single nerve, nerve conduction studies and EMG localizing the injury to the brachial plexus are required for the diagnosis.",
      "After vaccines that don't contain tetanus toxoid, brachial neuritis is not on the Table. A claim would be off-Table and would need proof of causation.",
    ],
    records: [
      "Vaccination record showing the vaccine (for example, Tdap or Td), date, and arm",
      "The first notes documenting shoulder and arm pain and when it began",
      "Neurology evaluations describing the pattern of weakness",
      "Nerve conduction studies and EMG reports",
      "MRI or other imaging used to rule out neck or shoulder causes",
      "Physical or occupational therapy records",
      "Follow-up records showing recovery or lasting weakness",
    ],
    faqs: [
      {
        q: "Is brachial neuritis on the Vaccine Injury Table?",
        a: "Yes, for vaccines containing tetanus toxoid, such as Tdap, Td, DTaP, DT, and TT. The first symptom must begin not less than 2 days and not more than 28 days after vaccination, and the case must meet the Table's definition.",
      },
      {
        q: "How is brachial neuritis different from SIRVA?",
        a: "Brachial neuritis is a nerve injury involving the brachial plexus, usually with pain followed by weakness, and it can affect either arm or both. SIRVA is an injury to the structures of the shoulder joint, limited to the arm that received the shot, with pain starting within 48 hours.",
      },
      {
        q: "Do I need nerve tests?",
        a: "Sometimes. Under the Table definition, if weakness is limited to muscles supplied by a single nerve, nerve conduction studies and EMG localizing the injury to the brachial plexus are required. Your doctor decides which tests are medically appropriate.",
      },
      {
        q: "What if I had a flu shot, not a tetanus shot?",
        a: "Brachial neuritis is listed on the Table only for vaccines containing tetanus toxoid. After other covered vaccines, a claim would generally be off-Table and would need proof that the vaccine caused the injury.",
      },
    ],
    relatedPosts: [
      "brachial-neuritis-vaccine-injury",
      "tdap-td-vaccine-vicp-coverage",
      "what-is-sirva-and-can-it-qualify-for-compensation",
      "difference-between-table-injury-and-off-table-injury",
      "understanding-vaccine-injury-claims-legal-rights-and-options",
    ],
    sources: [S.injuryTable, S.medlineBrachial, S.hrsaCoveredVaccines, S.hrsaWhoCanFile],
    datePublished: PUBLISHED,
    lastReviewed: REVIEWED,
  },

  // ─── ANAPHYLAXIS ─────────────────────────────────────────────────────────────
  {
    slug: "anaphylaxis",
    name: "Anaphylaxis",
    shortName: "Anaphylaxis",
    term: "anaphylaxis",
    metaTitle: "Anaphylaxis After a Vaccine — Table Rules (Within 4 Hours) & Deadlines",
    description:
      "What anaphylaxis is, its symptoms, the Vaccine Injury Table rule (within 4 hours) and which vaccines it covers, severity rules, deadlines, and records.",
    summary:
      "A severe, rapid allergic reaction involving more than one body system. It is on the Table for many covered vaccines when it starts within 4 hours.",
    onTable: true,
    tableLabel: "On the Table for many covered vaccines",
    uncommonNote:
      "Anaphylaxis after vaccination is uncommon. The Vaccine Injury Table notes that most cases resolve without lasting effects.",
    overview: `Anaphylaxis is a serious allergic reaction that can begin very quickly and may be life-threatening ([MedlinePlus](https://medlineplus.gov/anaphylaxis.html)). The Vaccine Injury Table describes it as an acute, severe reaction that happens as a single event and involves two or more organ systems at the same time, such as the skin, airway, heart and blood vessels, or digestive tract.

**If someone may be having anaphylaxis, call 911 right away.** Questions about compensation can wait until the person is safe.

Because most cases resolve fully with prompt treatment, the VICP's severity requirement is often the key question in an anaphylaxis claim.`,
    symptoms: [
      "Hives, itching, redness, or swelling of the lips, tongue, or throat",
      "Trouble breathing, wheezing, or a tight throat",
      "Dizziness, fainting, or a weak or rapid pulse",
      "Nausea, vomiting, or stomach cramps",
    ],
    onset:
      "The Table notes that signs and symptoms of anaphylaxis \"begin minutes to a few hours after exposure.\" For a Table claim, the first symptom must begin within 4 hours of vaccination.",
    tableIntro:
      "Yes, for many covered vaccines. Anaphylaxis is listed on the Vaccine Injury Table with the same time period for each of these vaccine categories:",
    tableEntries: [
      CAT.tetanus,
      CAT.pertussis,
      CAT.mmr,
      CAT.ipv,
      CAT.hepB,
      CAT.varicella,
      CAT.flu,
      CAT.mening,
      CAT.hpv,
    ].map((vaccines) => ({ vaccines, window: "≤4 hours." })),
    tableQuote:
      "Anaphylaxis is an acute, severe, and potentially lethal systemic reaction that occurs as a single discrete event with simultaneous involvement of two or more organ systems.",
    tableNotes: [
      "Anaphylaxis is not listed on the Table for Hib, rotavirus, pneumococcal conjugate, or hepatitis A vaccines. After those vaccines, a claim would be off-Table.",
      "Under the Table, an acute complication or sequela of a Table injury, including death, also qualifies as a Table injury.",
      "COVID-19 vaccine claims go to the CICP rather than the VICP, and generally must be filed within one year of vaccination.",
    ],
    records: [
      "Vaccination record showing the vaccine, date, and time it was given",
      "Clinic or pharmacy notes from the observation period",
      "EMS, emergency room, and hospital records with times of symptoms and treatment",
      "Records of epinephrine or other emergency treatment",
      "Allergist evaluations and follow-up care",
      "Records of any lasting complications",
    ],
    faqs: [
      {
        q: "Is anaphylaxis on the Vaccine Injury Table?",
        a: "Yes, for many covered vaccines, including seasonal flu, tetanus- and pertussis-containing vaccines such as Tdap, MMR, hepatitis B, varicella, inactivated polio, meningococcal, and HPV vaccines. The first symptom must begin within 4 hours of vaccination and meet the Table's definition.",
      },
      {
        q: "If my reaction fully resolved, can I still file?",
        a: "Possibly not. The Table notes that most cases of anaphylaxis resolve without lasting effects, and the VICP generally requires effects lasting more than six months, inpatient hospitalization with surgical intervention, or death. Lasting complications are evaluated case by case.",
      },
      {
        q: "What should I do first if I think someone is having anaphylaxis?",
        a: "Treat it as an emergency and call 911. Questions about compensation can wait until the person is safe.",
      },
      {
        q: "What if the reaction followed a COVID-19 vaccine?",
        a: "COVID-19 vaccine claims go to the Countermeasures Injury Compensation Program (CICP), not the VICP, and generally must be filed within one year of vaccination.",
      },
    ],
    relatedPosts: [
      "anaphylaxis-after-vaccine-vicp",
      "what-are-the-severity-requirements-for-a-vicp-claim",
      "flu-shot-injury-vicp-compensation",
      "tdap-td-vaccine-vicp-coverage",
      "hpv-vaccine-vicp-coverage",
      "what-injuries-qualify-for-vaccine-compensation",
      "can-i-sue-for-covid-vaccine-side-effects",
    ],
    sources: [S.injuryTable, S.medlineAnaphylaxis, S.hrsaCoveredVaccines, S.hrsaWhoCanFile, S.hrsaCicp, S.hrsaCicpFiling],
    datePublished: PUBLISHED,
    lastReviewed: REVIEWED,
  },

  // ─── ITP ─────────────────────────────────────────────────────────────────────
  {
    slug: "itp-thrombocytopenic-purpura",
    name: "ITP (Immune Thrombocytopenia) and Thrombocytopenic Purpura",
    shortName: "ITP / thrombocytopenic purpura",
    term: "ITP",
    metaTitle: "ITP (Thrombocytopenic Purpura) After a Vaccine — Table Rules & Deadlines",
    description:
      "What ITP is, its signs, the Vaccine Injury Table rule for measles-containing vaccines (7–30 days), severity rules, deadlines, and which records matter.",
    summary:
      "A low platelet count that can cause easy bruising and bleeding. Thrombocytopenic purpura is on the Table for measles-containing vaccines such as MMR.",
    onTable: true,
    tableLabel: "On the Table for measles-containing vaccines",
    uncommonNote:
      "ITP after vaccination is rare. The National Heart, Lung, and Blood Institute notes that vaccines such as MMR rarely raise the risk of ITP, and lists infections, certain medicines, and other immune conditions among other risk factors.",
    overview: `Immune thrombocytopenia (ITP) is a condition in which the immune system destroys platelets, the blood cells that help blood clot. With too few platelets, a person may bruise easily or have trouble stopping bleeding ([NHLBI](https://www.nhlbi.nih.gov/health/immune-thrombocytopenia)).

NHLBI lists several factors that can raise the risk of ITP, including viral or bacterial infections, certain medicines, other immune conditions, and vaccines such as MMR, which rarely raise the risk, especially in children. Acute ITP in children often goes away on its own within a few weeks or months. Chronic ITP, which lasts 12 months or longer, mostly affects adults.

The Vaccine Injury Table uses the term **thrombocytopenic purpura** rather than "ITP," and it has its own definition, described below.`,
    symptoms: [
      "Tiny red or purple dots on the skin (petechiae)",
      "Easy or unexplained bruising",
      "Nosebleeds or bleeding gums",
      "Blood in urine or stool, or unusually heavy menstrual periods",
      "Some people have no symptoms and the low platelet count is found on a blood test",
    ],
    onset:
      "For a Table claim after a measles-containing vaccine, the first symptom must begin 7 to 30 days after vaccination (the exact wording is below).",
    tableIntro:
      "Yes, for one vaccine category. Thrombocytopenic purpura is listed on the Vaccine Injury Table for vaccines containing measles virus:",
    tableEntries: [{ vaccines: CAT.measles, window: "7-30 days (not less than 7 days and not more than 30 days)." }],
    tableQuote:
      "This term is defined by the presence of clinical manifestations, such as petechiae, significant bruising, or spontaneous bleeding, and by a serum platelet count less than 50,000/mm3 with normal red and white blood cell indices.",
    tableNotes: [
      "The Table definition excludes thrombocytopenia from other causes, and it excludes immune thrombocytopenic purpura \"mediated, for example, by viral or fungal infections, toxins or drugs.\"",
      "If a bone marrow exam is done, it must show a normal or increased number of megakaryocytes in an otherwise normal marrow.",
      "After vaccines that don't contain measles virus, thrombocytopenic purpura is not on the Table. A claim would be off-Table and would need proof of causation.",
    ],
    records: [
      "Vaccination record showing which vaccine was given and when",
      "Complete blood counts (CBC) showing platelet counts over time",
      "Blood smear and other lab results",
      "Hematology (blood specialist) notes and treatment records",
      "Records of any recent illness or new medications before symptoms began",
      "Follow-up records showing how long the low platelet count lasted",
    ],
    faqs: [
      {
        q: "Is ITP on the Vaccine Injury Table?",
        a: "The Table lists thrombocytopenic purpura for vaccines containing measles virus, such as MMR and MMRV, when it begins 7 to 30 days after vaccination. The Table definition requires a platelet count below 50,000/mm3 and excludes cases caused by other conditions, including ITP triggered by viral infections, toxins, or drugs.",
      },
      {
        q: "What about ITP after other vaccines?",
        a: "For vaccines that don't contain measles virus, thrombocytopenic purpura is not on the Table, so a claim would be off-Table and would need proof that the vaccine caused it.",
      },
      {
        q: "My child's ITP went away in a few months. Is there still a claim?",
        a: "The VICP generally requires that the effects of an injury last more than six months, result in inpatient hospitalization and surgical intervention, or result in death. NHLBI notes that ITP in children often goes away within weeks or months, so the full course of the condition matters.",
      },
      {
        q: "What records matter most?",
        a: "Platelet counts over time, hematology notes, and records showing whether there was a recent infection or new medication, along with the vaccination record showing which vaccine was given and when.",
      },
    ],
    relatedPosts: [
      "what-injuries-qualify-for-vaccine-compensation",
      "difference-between-table-injury-and-off-table-injury",
      "what-are-the-severity-requirements-for-a-vicp-claim",
      "who-can-file-a-vaccine-injury-claim",
      "understanding-vaccine-injury-claims-legal-rights-and-options",
    ],
    sources: [S.injuryTable, S.nhlbiItp, S.hrsaCoveredVaccines, S.hrsaWhoCanFile],
    datePublished: PUBLISHED,
    lastReviewed: REVIEWED,
  },

  // ─── SYNCOPE ─────────────────────────────────────────────────────────────────
  {
    slug: "syncope-fainting",
    name: "Fainting (Vasovagal Syncope) Injuries",
    shortName: "Fainting (syncope) injuries",
    term: "vasovagal syncope (fainting)",
    metaTitle: "Fainting (Vasovagal Syncope) After a Vaccine — Table Rules & Injuries",
    description:
      "How fainting after a shot is treated under the Vaccine Injury Table (within 1 hour), why claims usually involve injuries from falls, deadlines, and records.",
    summary:
      "Brief loss of consciousness after an injected vaccine. The faint itself usually passes quickly; claims typically involve injuries from a fall. It is on the Table for injected vaccines.",
    onTable: true,
    tableLabel: "On the Table for injected vaccines",
    uncommonNote:
      "People who faint after a shot generally recover within a few minutes, and serious injuries from a faint are uncommon. The CDC recommends that people sit or lie down to be vaccinated and be observed for 15 minutes afterward to help prevent falls.",
    overview: `Fainting (syncope) is a temporary loss of consciousness caused by a brief drop in blood flow to the brain ([CDC](https://www.cdc.gov/vaccine-safety/about/fainting.html)). The CDC notes that people have fainted after nearly all vaccines and many other medical procedures, that fainting after vaccination is most often reported in adolescents, and that scientists think it is related to the vaccination process rather than the vaccines themselves.

The faint itself is usually harmless. The Vaccine Injury Table notes that vasovagal syncope "is usually a benign condition but may result in falling and injury with significant sequela." In practice, claims usually involve what happened during the fall, such as a head injury, broken bone, or dental injury.`,
    symptoms: [
      "Warning signs such as nausea, lightheadedness, sweating, or looking pale",
      "Brief loss of consciousness and muscle tone",
      "Sometimes brief jerking movements that can look like a seizure",
      "Injuries from falling, such as a head injury, broken bones, or damaged teeth",
    ],
    onset:
      "Fainting related to vaccination usually happens soon after the shot, which is why the CDC recommends a 15-minute observation period. For a Table claim, the loss of consciousness must occur within 1 hour of vaccination.",
    tableIntro:
      "Yes. Vasovagal syncope is listed on the Vaccine Injury Table for vaccine categories that are injected, with the same time period for each:",
    tableEntries: allInjected("≤1 hour."),
    tableQuote:
      "Vasovagal syncope (also sometimes called neurocardiogenic syncope) means loss of consciousness (fainting) and postural tone caused by a transient decrease in blood flow to the brain occurring after the administration of an injected vaccine.",
    tableNotes: [
      "Vasovagal syncope is not listed for rotavirus or oral polio vaccines, which are not injected.",
      "Loss of consciousness caused by heart disease, heart rhythm problems, transient ischemic attacks, hyperventilation, metabolic or neurological conditions, or seizures is not considered vasovagal syncope under the Table.",
      "Repeated fainting episodes after the 1-hour period are not considered a sequela of the Table injury.",
      "Injuries from the fall still have to meet the VICP's severity requirement.",
    ],
    records: [
      "Vaccination record showing the vaccine and the time it was given",
      "Clinic or pharmacy notes about the faint, including any incident report",
      "Names of anyone who saw the fall",
      "EMS, emergency room, or urgent care records",
      "Imaging such as CT scans or X-rays, and dental records if teeth were injured",
      "Follow-up records showing how long the injury affected you",
    ],
    faqs: [
      {
        q: "Is fainting after a vaccine on the Vaccine Injury Table?",
        a: "Yes. Vasovagal syncope is listed for injected vaccines covered by the VICP when the loss of consciousness happens within 1 hour of vaccination. It is not listed for rotavirus or oral polio vaccines, which are not injected.",
      },
      {
        q: "Is fainting by itself a vaccine injury claim?",
        a: "Usually the faint is brief and harmless. Claims generally involve injuries from the fall, such as a head injury or broken bone, and those injuries still need to meet the VICP's severity requirement.",
      },
      {
        q: "Who is most likely to faint after a vaccine?",
        a: "The CDC says fainting after vaccination is most often reported in adolescents. Having people sit or lie down to be vaccinated and observing them for 15 minutes afterward helps prevent injuries from falls.",
      },
      {
        q: "What records should I get?",
        a: "Records from the vaccination visit showing the time of the shot and the faint, any incident report, emergency or urgent care records, imaging, and follow-up records showing how long the injury affected you.",
      },
    ],
    relatedPosts: [
      "hpv-vaccine-vicp-coverage",
      "tdap-td-vaccine-vicp-coverage",
      "flu-shot-injury-vicp-compensation",
      "what-injuries-qualify-for-vaccine-compensation",
      "what-are-the-severity-requirements-for-a-vicp-claim",
      "what-medical-records-do-i-need-for-a-vaccine-injury-claim",
    ],
    sources: [S.injuryTable, S.cdcFainting, S.medlineFainting, S.hrsaCoveredVaccines, S.hrsaWhoCanFile],
    datePublished: PUBLISHED,
    lastReviewed: REVIEWED,
  },
];

export function getInjuryHub(slug: string): InjuryHub | undefined {
  return injuryHubs.find((hub) => hub.slug === slug);
}

/** Hubs that list a given blog post as related (used for "Related injury guides" on posts). */
export function hubsForPost(postSlug: string): InjuryHub[] {
  return injuryHubs.filter((hub) => hub.relatedPosts.includes(postSlug));
}
