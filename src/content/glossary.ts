import { SOURCES as S, type Source } from "@/lib/sources";

/**
 * VICP / CICP glossary (/glossary).
 *
 * Definitions are short and tied to a primary source: the Vaccine Act (Cornell LII text
 * current as of the pages' last-modified dates in 2026), 42 CFR 100.3, the Court of
 * Federal Claims Vaccine Rules as amended through July 27, 2026, HRSA program pages
 * archived in 2026, or a decision read for this entry (Avera, Eberling, Greeley).
 * Dollar figures are the statutory amounts in 42 U.S.C. § 300aa-15(a) for vaccines
 * administered after October 1, 1988.
 */

export const GLOSSARY_PATH = "/glossary";
export const GLOSSARY_PUBLISHED = "2026-11-18";
export const GLOSSARY_REVIEWED = "2026-11-18";

export const GLOSSARY_TITLE = "VICP Glossary: Table, Fees, Deadlines, and Claims";
export const GLOSSARY_DESCRIPTION =
  "Plain-language definitions of VICP and CICP terms, including the Vaccine Injury Table, on-Table and off-Table claims, deadlines, and the $250,000 statutory caps.";

export const GLOSSARY_SET_NAME = "VICP and CICP glossary";

export type GlossaryLink = { href: string; label: string };

export type GlossaryTerm = {
  id: string;
  /** Extra anchors for a second common name, such as Althen. */
  aliasIds?: string[];
  name: string;
  alternateName?: string;
  /** Plain-text paragraphs. Joined for DefinedTerm description. */
  definition: string[];
  sources: Source[];
  links?: GlossaryLink[];
};

export function glossaryDefinitionText(term: GlossaryTerm): string {
  return term.definition.join("\n\n");
}

export function glossaryTermsSorted(): GlossaryTerm[] {
  return [...glossaryTerms].sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
}

export function uniqueGlossarySources(): Source[] {
  const seen = new Set<string>();
  const sources: Source[] = [];
  for (const term of glossaryTerms) {
    for (const source of term.sources) {
      if (seen.has(source.url)) continue;
      seen.add(source.url);
      sources.push(source);
    }
  }
  return sources;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "vicp",
    name: "VICP (National Vaccine Injury Compensation Program)",
    alternateName: "National Vaccine Injury Compensation Program",
    definition: [
      "The National Vaccine Injury Compensation Program is the federal no-fault program for serious injuries from covered vaccines. A person starts a claim by filing a petition in the U.S. Court of Federal Claims. A special master decides entitlement and the amount of compensation. HRSA administers the program.",
      "COVID-19 vaccine claims are not filed in the VICP. HRSA directs those claims to the CICP.",
    ],
    sources: [S.hrsaVicp, S.hrsaVicpAbout, S.vaccineAct, S.hrsaCoveredVaccines],
    links: [
      { href: "/blog/what-is-the-vaccine-injury-compensation-program", label: "What the VICP is" },
      { href: "/how-it-works", label: "How getting connected works" },
    ],
  },
  {
    id: "cicp",
    name: "CICP (Countermeasures Injury Compensation Program)",
    alternateName: "Countermeasures Injury Compensation Program",
    definition: [
      "The Countermeasures Injury Compensation Program is a separate HRSA program for serious physical injury or death from a covered countermeasure. Covered countermeasures are identified in declarations the Secretary of Health and Human Services publishes under the PREP Act. HRSA's covered-vaccines page tells people with a claim associated with a COVID-19 vaccine, or another COVID-19 countermeasure, to file a Request for Benefits with the CICP.",
      "HRSA states that a requester has one year from the date the countermeasure was administered or used. The CICP is not authorized to reimburse attorneys' fees. HRSA describes the benefits as unreimbursed medical expenses, lost employment income, and a survivor death benefit. Requests are decided in an administrative process, not by a special master of the Court of Federal Claims.",
    ],
    sources: [S.hrsaCicp, S.hrsaCicpFiling, S.hrsaCicpBenefits, S.hrsaCicpVsVicp, S.hrsaCoveredVaccines, S.prepActCicp],
    links: [
      { href: "/blog/can-i-sue-for-covid-vaccine-side-effects", label: "COVID-19 vaccine claims and the CICP" },
      { href: "/glossary#prep-act", label: "PREP Act" },
    ],
  },
  {
    id: "hrsa",
    name: "HRSA (Health Resources and Services Administration)",
    alternateName: "Health Resources and Services Administration",
    definition: [
      "HRSA is the agency of the U.S. Department of Health and Human Services that administers both the VICP and the CICP. HRSA publishes program rules, covered-vaccine information, filing instructions, and compensation statistics. HRSA does not decide VICP petitions. Special masters of the U.S. Court of Federal Claims do.",
    ],
    sources: [S.hrsaVicp, S.hrsaCicp],
  },
  {
    id: "prep-act",
    name: "PREP Act",
    alternateName: "Public Readiness and Emergency Preparedness Act",
    definition: [
      "The Public Readiness and Emergency Preparedness Act is the statute that authorizes the CICP. HRSA's comparison of the CICP and the VICP cites 42 U.S.C. §§ 247d-6d and 247d-6e for the CICP, and 42 U.S.C. § 300aa-10 and the sections that follow for the VICP.",
    ],
    sources: [S.prepActCicp, S.hrsaCicpVsVicp],
    links: [{ href: "/glossary#cicp", label: "CICP" }],
  },
  {
    id: "court-of-federal-claims",
    name: "U.S. Court of Federal Claims",
    definition: [
      "The U.S. Court of Federal Claims is the federal court where a VICP petition is filed. The Office of Special Masters at the court hears those cases. A judge of the court can review a special master's decision. A CICP request is filed with HRSA, not with this court.",
    ],
    sources: [S.cfcOsm, S.usc300aa12, S.hrsaHowToFile, S.hrsaCicpVsVicp],
    links: [
      { href: "/blog/what-happens-after-you-file-a-vicp-petition", label: "What happens after a petition is filed" },
      { href: "/glossary#special-master", label: "Special master" },
    ],
  },
  {
    id: "special-master",
    name: "Special master",
    definition: [
      "A special master is the judicial officer who decides a VICP petition. 42 U.S.C. § 300aa-12 gives special masters jurisdiction to determine whether the petitioner is entitled to compensation and the amount. The statute says the decision shall include findings of fact and conclusions of law, and shall be issued as expeditiously as practicable but not later than 240 days after the petition was filed, excluding time the statute suspends. A judge of the Court of Federal Claims may review the decision.",
    ],
    sources: [S.usc300aa12, S.cfcOsm],
    links: [{ href: "/glossary#court-of-federal-claims", label: "U.S. Court of Federal Claims" }],
  },
  {
    id: "petition",
    name: "Petition",
    definition: [
      "A VICP claim is started by a petition filed under 42 U.S.C. § 300aa-11, not by a civil complaint against the vaccine manufacturer. HRSA's comparison of the programs says the petition and documentation are filed with the U.S. Court of Federal Claims and the Secretary of Health and Human Services. The petition has to meet the statute's requirements, including the injury, the severity rule, and the records the statute lists.",
    ],
    sources: [S.usc300aa11, S.hrsaHowToFile, S.hrsaCicpVsVicp],
    links: [
      { href: "/blog/who-can-file-a-vaccine-injury-claim", label: "Who can file" },
      { href: "/blog/do-i-need-a-lawyer-to-file-a-vicp-claim", label: "Filing with or without a lawyer" },
    ],
  },
  {
    id: "respondent",
    name: "Respondent",
    definition: [
      "In a VICP case, the Secretary of Health and Human Services is the respondent. 42 U.S.C. § 300aa-12(b) says the Secretary shall be named as the respondent, shall participate, and shall be represented in accordance with 28 U.S.C. § 518(a). The vaccine manufacturer is not the respondent named in that section.",
    ],
    sources: [S.usc300aa12],
  },
  {
    id: "vaccine-injury-table",
    name: "Vaccine Injury Table",
    definition: [
      "The Vaccine Injury Table is the federal list, in 42 CFR 100.3, of vaccine categories, associated injuries, and the time period for the first symptom or manifestation of onset or of significant aggravation. The Qualifications and Aids to Interpretation in paragraph (c) are part of the Table. The statute at 42 U.S.C. § 300aa-14 authorizes the Secretary to revise the Table by regulation. The regulatory table is the one used for current petitions.",
    ],
    sources: [S.injuryTable, S.usc300aa14, S.hrsaCoveredVaccines],
    links: [
      { href: "/vaccine-injury-table", label: "Vaccine Injury Table page" },
      { href: "/glossary#qualifications-and-aids-to-interpretation", label: "Qualifications and Aids to Interpretation" },
    ],
  },
  {
    id: "on-table",
    name: "On-Table claim",
    alternateName: "Table injury",
    definition: [
      "An on-Table claim, also called a Table injury, is one in which the vaccine, the injury, and the timing all meet the Vaccine Injury Table, including the Qualifications and Aids to Interpretation. HRSA states that when the first symptom occurs within the specified time and the injury meets the Table definition, it is presumed that the vaccine caused the injury unless another cause is proven.",
      "The presumption is not a decision that compensation will be awarded. The petition still has to meet the other statutory requirements, including severity and the filing deadline, and 42 U.S.C. § 300aa-13 requires that there not be a preponderance of the evidence that the injury is due to factors unrelated to the vaccine.",
    ],
    sources: [S.injuryTable, S.hrsaCoveredVaccines, S.usc300aa11, S.usc300aa13],
    links: [
      { href: "/vaccine-injury-table", label: "Vaccine Injury Table" },
      { href: "/blog/difference-between-table-injury-and-off-table-injury", label: "Table and off-Table injuries" },
    ],
  },
  {
    id: "off-table",
    name: "Off-Table claim",
    definition: [
      "An off-Table claim is a petition for an injury that is not on the Vaccine Injury Table for that vaccine, or that does not meet the Table's time period or definition. HRSA states that the person filing must then prove that the vaccine caused the injury, with evidence such as medical records, medical opinion, or expert testimony. Off-Table claims can still be filed. They use the same court, the same severity requirement, and the same filing deadline as Table claims.",
    ],
    sources: [S.hrsaCoveredVaccines, S.usc300aa11, S.usc300aa13],
    links: [
      { href: "/blog/difference-between-table-injury-and-off-table-injury", label: "Table and off-Table injuries" },
      { href: "/glossary#causation-in-fact", label: "Causation-in-fact (Althen test)" },
    ],
  },
  {
    id: "onset-window",
    name: "Onset window",
    definition: [
      "The onset window is the Table's time period for the first symptom or manifestation of onset, or of significant aggravation, after vaccination. Each listed injury has its own period. Examples copied from 42 CFR 100.3 include ≤48 hours for SIRVA, ≤4 hours for anaphylaxis where it is listed, ≤1 hour for vasovagal syncope, and not less than 3 days and not more than 42 days for Guillain-Barré syndrome after a seasonal influenza vaccine.",
      "A matching window is one part of a Table claim. It is not, by itself, a decision that a petition will succeed.",
    ],
    sources: [S.injuryTable],
    links: [{ href: "/vaccine-injury-table", label: "Full Table of onset windows" }],
  },
  {
    id: "qualifications-and-aids-to-interpretation",
    name: "Qualifications and Aids to Interpretation",
    definition: [
      "The Qualifications and Aids to Interpretation are paragraph (c) of 42 CFR 100.3. They define the injuries named in the Table, including anaphylaxis, SIRVA, GBS, brachial neuritis, encephalopathy, thrombocytopenic purpura, chronic arthritis, intussusception, vasovagal syncope, and the vaccine-strain viral conditions. The regulation states that conditions and injuries that do not meet those qualifications are not within the Table.",
    ],
    sources: [S.injuryTable],
    links: [{ href: "/vaccine-injury-table#qualifications", label: "How the qualifications apply" }],
  },
  {
    id: "covered-vaccine",
    name: "Covered vaccine",
    definition: [
      "HRSA states that for a vaccine to be covered by the VICP, the CDC must recommend the category for routine administration to children or pregnant women, and the vaccine must be subject to a federal excise tax. The Secretary adds covered categories to the Vaccine Injury Table. HRSA's covered-vaccines page says children and adults who receive a seasonal influenza vaccine may file a VICP petition.",
      "HRSA's covered-vaccines page says claims associated with a COVID-19 vaccine, or other COVID-19 countermeasures, are filed with the CICP. The same page says non-seasonal influenza vaccines used for a pandemic are not VICP-covered vaccines, and that pneumococcal polysaccharide vaccine and herpes zoster (shingles) vaccine are not VICP-covered vaccines.",
    ],
    sources: [S.hrsaCoveredVaccines, S.hrsaWhoCanFile],
    links: [{ href: "/faq", label: "Frequently asked questions" }],
  },
  {
    id: "statute-of-limitations",
    name: "Statute of limitations",
    definition: [
      "For a vaccine given after October 1, 1988, 42 U.S.C. § 300aa-16(a)(2) says an injury petition may not be filed after 36 months from the first symptom or manifestation of onset or of the significant aggravation of the injury. Section 300aa-16(a)(3) says a death petition may not be filed after 24 months from the death, and may not be filed more than 48 months after the first symptom of the injury from which the death resulted.",
      "If the Table is revised in a way that newly allows a petition, or that significantly increases the likelihood of compensation, section 300aa-16(b) allows a petition not later than 2 years after the revision's effective date. Compensation is not available under that revision for an injury or death that occurred more than 8 years before the revision. A VAERS report is not a petition and does not file the claim.",
    ],
    sources: [S.usc300aa16, S.hrsaWhoCanFile, S.vaers],
    links: [
      { href: "/blog/how-long-do-i-have-to-file-a-vaccine-injury-claim", label: "Filing deadlines" },
      { href: "/vaccine-injury-table#deadlines", label: "Deadlines on the Table page" },
    ],
  },
  {
    id: "severity-requirement",
    name: "Severity requirement",
    definition: [
      "42 U.S.C. § 300aa-11(c)(1)(D) requires that the person suffered the residual effects or complications of the illness, disability, injury, or condition for more than 6 months after the administration of the vaccine, or died from the administration of the vaccine, or suffered an illness, disability, injury, or condition from the vaccine which resulted in inpatient hospitalization and surgical intervention. The onset window and this severity rule are separate requirements.",
    ],
    sources: [S.usc300aa11, S.hrsaWhoCanFile],
    links: [{ href: "/blog/what-are-the-severity-requirements-for-a-vicp-claim", label: "Severity requirements" }],
  },
  {
    id: "significant-aggravation",
    name: "Significant aggravation",
    definition: [
      "42 U.S.C. § 300aa-33(4) defines significant aggravation as any change for the worse in a preexisting condition which results in markedly greater disability, pain, or illness accompanied by substantial deterioration of health. The Vaccine Injury Table's time periods apply to the first symptom or manifestation of onset or of the significant aggravation. A petition can allege that a vaccine significantly aggravated a condition the person already had.",
    ],
    sources: [S.usc300aa33, S.injuryTable, S.usc300aa11],
  },
  {
    id: "causation-in-fact",
    aliasIds: ["althen"],
    name: "Causation-in-fact (Althen test)",
    alternateName: "Althen test",
    definition: [
      "Causation-in-fact is the path for an off-Table claim: the person filing has to prove the vaccine caused the injury. 42 U.S.C. § 300aa-13 requires proof by a preponderance of the evidence, meaning more likely than not, and requires that there not be a preponderance of the evidence that the injury is due to factors unrelated to the vaccine. The special master may not make that finding on the petitioner's claims alone, unsubstantiated by medical records or medical opinion.",
      "Special masters apply a three-part test drawn from Althen v. Secretary of Health and Human Services. As summarized in Lemieux v. Secretary of Health and Human Services, the petitioner must show a medical theory causally connecting the vaccine and the injury, a logical sequence of cause and effect showing that the vaccine was the reason for the injury, and a proximate temporal relationship between the vaccine and the injury. Meeting the test depends on the records and the medical opinions in that case.",
    ],
    sources: [S.usc300aa13, S.usc300aa11, S.caseLemieux2025],
    links: [{ href: "/blog/how-to-prove-vaccine-caused-injury-althen-test", label: "The Althen test explained" }],
  },
  {
    id: "entitlement",
    name: "Entitlement",
    definition: [
      "Entitlement is the determination that the petitioner has met the Vaccine Act's requirements for compensation. 42 U.S.C. § 300aa-12 assigns that question, and the amount of compensation, to the special master. A ruling on entitlement comes before the damages decision. Entitlement in one case does not decide any other petition.",
    ],
    sources: [S.usc300aa12, S.usc300aa13],
    links: [{ href: "/blog/how-vicp-compensation-is-decided", label: "How compensation is decided" }],
  },
  {
    id: "damages",
    name: "Damages",
    definition: [
      "Damages are the compensation awarded after entitlement. For a vaccine administered after October 1, 1988, 42 U.S.C. § 300aa-15(a) describes actual and projected unreimbursable expenses for medical and related care, lost earnings in the circumstances the statute sets out, an award of $250,000 to the estate in the event of a vaccine-related death, and an award for actual and projected pain and suffering and emotional distress not to exceed $250,000. The amount in a given case depends on the evidence in that case.",
    ],
    sources: [S.usc300aa15],
    links: [
      { href: "/blog/how-much-compensation-is-available-in-a-vaccine-injury-case", label: "What compensation can include" },
      { href: "/glossary#pain-and-suffering-cap", label: "Pain and suffering cap" },
      { href: "/glossary#death-benefit", label: "Death benefit" },
    ],
  },
  {
    id: "pain-and-suffering-cap",
    name: "Pain and suffering cap (VICP, $250,000)",
    alternateName: "$250,000 pain and suffering cap",
    definition: [
      "42 U.S.C. § 300aa-15(a)(4) authorizes an award for actual and projected pain and suffering and emotional distress from the vaccine-related injury, not to exceed $250,000. That figure is a ceiling for this category. It is not an amount a petition will receive. It does not cap unreimbursable medical expenses or lost earnings, which are addressed in other paragraphs of section 300aa-15(a). The $250,000 ceiling in paragraph (a) applies to compensation for a vaccine administered after October 1, 1988.",
    ],
    sources: [S.usc300aa15],
    links: [{ href: "/blog/how-much-compensation-is-available-in-a-vaccine-injury-case", label: "What compensation can include" }],
  },
  {
    id: "death-benefit",
    name: "Death benefit (VICP, $250,000)",
    alternateName: "$250,000 death award",
    definition: [
      "42 U.S.C. § 300aa-15(a)(2) provides that, in the event of a vaccine-related death, compensation includes an award of $250,000 for the estate of the deceased. That paragraph applies to a vaccine administered after October 1, 1988. A death petition has its own filing limit: within 24 months of the death and not more than 48 months after the first symptom of the injury from which the death resulted. The CICP also has a survivor death benefit, under different rules. The $250,000 figure here is the VICP statute, not a description of a CICP payment.",
    ],
    sources: [S.usc300aa15, S.usc300aa16, S.hrsaCicpBenefits],
    links: [{ href: "/blog/vicp-claim-for-death-after-vaccine", label: "VICP claims after a death" }],
  },
  {
    id: "proffer",
    name: "Proffer",
    definition: [
      "A proffer is a filing that states a proposed compensation amount. In Eberling v. Secretary of Health and Human Services, after a ruling that the petitioner was entitled to compensation, the Secretary filed a proffer on award of compensation and represented that the petitioner agreed with the proffered award. The special master then awarded the amount stated in the proffer. A proffer resolves the amount in that case. It does not set the amount for any other petition.",
    ],
    sources: [S.caseEberling2024, S.usc300aa15],
    links: [{ href: "/blog/how-vicp-compensation-is-decided", label: "Concession, proffer, and stipulation" }],
  },
  {
    id: "stipulation",
    name: "Stipulation",
    definition: [
      "A stipulation is an agreement the parties file with the court. In Greeley v. Secretary of Health and Human Services, the special master noted that the Secretary denied the vaccines caused the alleged injury, and that the parties nevertheless agreed to settle and filed a joint stipulation describing the settlement terms. The special master issued a decision on that stipulation. A settlement resolves that claim. It is not a scientific finding that a vaccine did or did not cause an injury in general, and it does not predict another case.",
    ],
    sources: [S.caseGreeley2026],
    links: [
      { href: "/blog/how-vicp-compensation-is-decided", label: "How compensation is decided" },
      { href: "/blog/does-a-vaccine-injury-settlement-mean-the-vaccine-caused-the-injury", label: "What a settlement means" },
    ],
  },
  {
    id: "attorneys-fees-and-costs",
    name: "Attorneys' fees and costs",
    definition: [
      "When a VICP petition is awarded compensation, 42 U.S.C. § 300aa-15(e)(1) says the special master or court shall also award reasonable attorneys' fees and other costs incurred in any proceeding on the petition. If compensation is not awarded, fees and costs may still be awarded when the special master or court determines that the petition was brought in good faith and there was a reasonable basis for the claim. Section 300aa-15(e)(3) says no attorney may charge any fee for services on a VICP petition in addition to the amount awarded under that paragraph.",
      "HRSA states that the CICP is not authorized to reimburse attorneys' fees. A person who uses a lawyer for a CICP request is responsible for those costs.",
    ],
    sources: [S.usc300aa15, S.hrsaCicpFiling, S.hrsaCicpVsVicp],
    links: [
      { href: "/blog/how-do-vicp-attorneys-get-paid", label: "How VICP attorneys are paid" },
      { href: "/glossary#good-faith-and-reasonable-basis", label: "Good faith and reasonable basis" },
    ],
  },
  {
    id: "interim-fees",
    name: "Interim fees",
    definition: [
      "Interim fees are attorneys' fees awarded before a VICP case is over. In Avera v. Secretary of Health and Human Services, the Federal Circuit held that there is nothing in the Vaccine Act that prohibits an award of interim fees. The court said interim fees are particularly appropriate where proceedings are protracted and costly experts must be retained. In Avera itself, the court affirmed the denial of interim fees because the lawyers sought them only pending appeal and had not shown undue hardship.",
    ],
    sources: [S.caseAvera2008, S.usc300aa15],
    links: [{ href: "/blog/interim-attorneys-fees-vicp", label: "Interim fees explained" }],
  },
  {
    id: "good-faith-and-reasonable-basis",
    name: "Good faith and reasonable basis",
    definition: [
      "Good faith and reasonable basis is the standard in 42 U.S.C. § 300aa-15(e)(1) for attorneys' fees when the petitioner is not awarded compensation. The special master or court may award reasonable fees and costs if it determines that the petition was brought in good faith and there was a reasonable basis for the claim for which the petition was brought. The statute does not require the petitioner to win in order for fees to be available.",
    ],
    sources: [S.usc300aa15],
    links: [{ href: "/glossary#attorneys-fees-and-costs", label: "Attorneys' fees and costs" }],
  },
  {
    id: "rule-4c-report",
    name: "Rule 4(c) report",
    definition: [
      "Vaccine Rule 4(c) of the U.S. Court of Federal Claims, as amended through July 27, 2026, requires the Secretary to file a report within 90 days after the petition is filed, or on a schedule the special master sets after the petitioner has filed the required documents. The report must set forth a full and complete statement of the Secretary's position as to why an award should or should not be granted. It must contain a medical analysis of the claims and any legal arguments in opposition. The rule states that general denials are not sufficient.",
    ],
    sources: [S.vaccineRules],
    links: [{ href: "/blog/what-happens-after-you-file-a-vicp-petition", label: "What happens after filing" }],
  },
  {
    id: "sirva",
    name: "SIRVA (shoulder injury related to vaccine administration)",
    alternateName: "Shoulder injury related to vaccine administration",
    definition: [
      "SIRVA is a Table injury for most injected vaccine categories in 42 CFR 100.3, with a time period of ≤48 hours. Measles, mumps, and rubella vaccines, including MMR, are covered under category III. Categories IV (rubella-only) and V (measles-only) do not list SIRVA, and neither do rotavirus or live oral polio (OPV). The regulation describes shoulder pain and limited range of motion after a vaccine intended for intramuscular administration in the upper arm. It states that SIRVA is not a neurological injury. All four regulatory criteria have to be met, including no prior history in that shoulder that would explain the symptoms, pain within the time period, symptoms limited to the injected shoulder, and no other condition that explains the symptoms.",
    ],
    sources: [S.injuryTable],
    links: [
      { href: "/injuries/sirva", label: "SIRVA injury guide" },
      { href: "/vaccine-injury-table#sirva", label: "SIRVA on the Table page" },
    ],
  },
  {
    id: "guillain-barre-syndrome",
    aliasIds: ["gbs"],
    name: "Guillain-Barré syndrome (GBS)",
    alternateName: "GBS",
    definition: [
      "Guillain-Barré syndrome is on the Vaccine Injury Table for seasonal influenza vaccines only. The time period is 3-42 days (not less than 3 days and not more than 42 days). The Qualifications and Aids to Interpretation describe it as an acute monophasic peripheral neuropathy, with the nadir of weakness between 12 hours and 28 days after symptoms begin. An ultimate diagnosis of chronic immune demyelinating polyradiculopathy (CIDP) is one of the diagnoses that paragraph (c)(15) excludes from Table GBS. GBS after a vaccine other than seasonal influenza is an off-Table claim.",
    ],
    sources: [S.injuryTable],
    links: [
      { href: "/injuries/guillain-barre-syndrome", label: "Guillain-Barré syndrome guide" },
      { href: "/injuries/cidp", label: "CIDP guide" },
    ],
  },
  {
    id: "itp",
    name: "ITP (thrombocytopenic purpura)",
    alternateName: "Thrombocytopenic purpura",
    definition: [
      "Thrombocytopenic purpura is on the Vaccine Injury Table for vaccines containing measles virus. The time period is 7-30 days (not less than 7 days and not more than 30 days). Paragraph (c)(7) requires clinical signs such as petechiae, significant bruising, or spontaneous bleeding, and a serum platelet count less than 50,000/mm3 with normal red and white blood cell indices. The same paragraph excludes thrombocytopenia from a list of other causes. ITP after a vaccine that is not a measles-containing vaccine is an off-Table claim.",
    ],
    sources: [S.injuryTable],
    links: [{ href: "/injuries/itp-thrombocytopenic-purpura", label: "ITP injury guide" }],
  },
  {
    id: "anaphylaxis",
    name: "Anaphylaxis",
    definition: [
      "Anaphylaxis is on the Vaccine Injury Table for many, but not all, covered vaccine categories, with a time period of ≤4 hours. Paragraph (c)(1) defines it as an acute, severe, and potentially lethal systemic reaction that occurs as a single discrete event with simultaneous involvement of two or more organ systems. It is not listed for Hib, rotavirus, pneumococcal conjugate, hepatitis A, or live oral polio (OPV) vaccines, or for category XVII (new vaccines).",
    ],
    sources: [S.injuryTable],
    links: [{ href: "/injuries/anaphylaxis", label: "Anaphylaxis injury guide" }],
  },
  {
    id: "brachial-neuritis",
    name: "Brachial neuritis",
    definition: [
      "Brachial neuritis is on the Vaccine Injury Table for vaccines containing tetanus toxoid. The time period is 2-28 days (not less than 2 days and not more than 28 days). Paragraph (c)(6) describes dysfunction limited to the upper extremity nerve plexus, usually starting with deep aching pain in the shoulder and upper arm, followed by weakness. Pain within the time period, weakness, findings consistent with the brachial plexus, and the absence of another explanation are all required.",
    ],
    sources: [S.injuryTable],
    links: [{ href: "/injuries/brachial-neuritis", label: "Brachial neuritis guide" }],
  },
  {
    id: "vasovagal-syncope",
    name: "Vasovagal syncope",
    alternateName: "Fainting",
    definition: [
      "Vasovagal syncope is on the Vaccine Injury Table for most injected vaccine categories, with a time period of ≤1 hour. It follows the same categories as SIRVA. Measles, mumps, and rubella vaccines, including MMR, are covered under category III. Categories IV (rubella-only) and V (measles-only) do not list it, and neither do rotavirus or live oral polio (OPV). Paragraph (c)(13) defines it as loss of consciousness and postural tone caused by a transient decrease in blood flow to the brain after an injected vaccine. Loss of consciousness from the other conditions listed in that paragraph, including seizures and cardiac arrhythmias, is not Table vasovagal syncope. The regulation also calls this neurocardiogenic syncope.",
    ],
    sources: [S.injuryTable],
    links: [{ href: "/injuries/syncope-fainting", label: "Fainting injury guide" }],
  },
  {
    id: "intussusception",
    name: "Intussusception",
    definition: [
      "Intussusception is on the Vaccine Injury Table for rotavirus vaccines. The time period is 1-21 days (not less than 1 day and not more than 21 days). Paragraph (c)(4) defines it as one segment of intestine telescoping into the next, causing obstruction, and it excludes onset with or after the third dose of a rotavirus-containing vaccine, along with other exclusions listed in that paragraph.",
    ],
    sources: [S.injuryTable],
    links: [{ href: "/blog/intussusception-after-rotavirus-vaccine-vicp", label: "Intussusception guide" }],
  },
  {
    id: "encephalopathy",
    name: "Encephalopathy and encephalitis",
    definition: [
      "Encephalopathy or encephalitis is on the Vaccine Injury Table for pertussis-containing vaccines at ≤72 hours, and for vaccines containing measles, mumps, and rubella virus or any of its components at 5-15 days (not less than 5 days and not more than 15 days). Paragraphs (c)(2) and (c)(3) require an acute encephalopathy or encephalitis inside the window that results in a chronic encephalopathy. Paragraph (d) says a chronic encephalopathy persists for at least 6 months. Seizures alone are not an acute encephalopathy.",
    ],
    sources: [S.injuryTable],
    links: [{ href: "/blog/encephalopathy-after-vaccine-vicp", label: "Encephalopathy and encephalitis guide" }],
  },
  {
    id: "transverse-myelitis",
    name: "Transverse myelitis",
    definition: [
      "Transverse myelitis is not listed as a row on the Vaccine Injury Table. A VICP petition for it is an off-Table claim. The Table's definition of Guillain-Barré syndrome also lists myelitis among the diagnoses that are not Table GBS. The filing deadline and the severity requirement still apply.",
    ],
    sources: [S.injuryTable],
    links: [{ href: "/injuries/transverse-myelitis", label: "Transverse myelitis guide" }],
  },
  {
    id: "cidp",
    name: "CIDP",
    alternateName: "Chronic immune demyelinating polyradiculopathy",
    definition: [
      "CIDP is not listed as a row on the Vaccine Injury Table. A VICP petition for it is an off-Table claim. Paragraph (c)(15)(vi) of the Table says an ultimate diagnosis of chronic immune demyelinating polyradiculopathy (CIDP) excludes a diagnosis of Table Guillain-Barré syndrome, including after a seasonal influenza vaccine.",
    ],
    sources: [S.injuryTable],
    links: [{ href: "/injuries/cidp", label: "CIDP guide" }],
  },
  {
    id: "vaers",
    name: "VAERS",
    alternateName: "Vaccine Adverse Event Reporting System",
    definition: [
      "VAERS is the federal Vaccine Adverse Event Reporting System. It collects reports of health events after vaccination. A VAERS report is not a VICP petition and it is not a CICP Request for Benefits.",
    ],
    sources: [S.vaers, S.cdcVaers, S.hrsaWhoCanFile],
    links: [{ href: "/blog/should-i-report-my-vaccine-reaction-to-vaers", label: "Reporting a reaction to VAERS" }],
  },
];
