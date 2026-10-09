/**
 * Official, primary sources we cite across the site.
 * Every URL here was checked to resolve (HTTP 200, final URL after redirects) on 2026-10-06.
 * Prefer adding to this list over hard-coding URLs in pages or posts.
 */
export type Source = { title: string; url: string };

export const SOURCES = {
  hrsaVicp: {
    title: "HRSA — National Vaccine Injury Compensation Program (VICP)",
    url: "https://www.hrsa.gov/vaccine-compensation",
  },
  hrsaVicpAbout: {
    title: "HRSA — About the National Vaccine Injury Compensation Program",
    url: "https://www.hrsa.gov/vaccine-compensation/about",
  },
  hrsaCoveredVaccines: {
    title: "HRSA — Covered Vaccines and the Vaccine Injury Table",
    url: "https://www.hrsa.gov/vaccine-compensation/covered-vaccines",
  },
  hrsaWhoCanFile: {
    title: "HRSA — Who Can File a Petition (severity requirements and filing deadlines)",
    url: "https://www.hrsa.gov/vaccine-compensation/eligible",
  },
  hrsaHowToFile: {
    title: "HRSA — How to File a VICP Petition",
    url: "https://www.hrsa.gov/vaccine-compensation/how-to-file",
  },
  hrsaVicpFaq: {
    title: "HRSA — VICP Frequently Asked Questions",
    url: "https://www.hrsa.gov/vaccine-compensation/faq",
  },
  hrsaVicpData: {
    title: "HRSA — Vaccine Injury Compensation Data",
    url: "https://www.hrsa.gov/vaccine-compensation/data",
  },
  hrsaCicp: {
    title: "HRSA — Countermeasures Injury Compensation Program (CICP)",
    url: "https://www.hrsa.gov/cicp",
  },
  hrsaCicpFiling: {
    title: "HRSA — CICP Filing Process and Deadlines",
    url: "https://www.hrsa.gov/cicp/filing-process",
  },
  hrsaCicpVsVicp: {
    title: "HRSA — Comparison of the CICP and the VICP",
    url: "https://www.hrsa.gov/cicp/cicp-vicp",
  },
  hrsaCicpCovered: {
    title: "HRSA — CICP Covered Countermeasures",
    url: "https://www.hrsa.gov/cicp/covered-countermeasures",
  },
  hrsaCicpBenefits: {
    title: "HRSA — Types of CICP Benefits",
    url: "https://www.hrsa.gov/cicp/types-cicp-benefits",
  },
  hrsaCicpData: {
    title: "HRSA — CICP Data",
    url: "https://www.hrsa.gov/cicp/cicp-data",
  },
  cfcOsm: {
    title: "U.S. Court of Federal Claims — Vaccine Claims / Office of Special Masters",
    url: "https://www.uscfc.uscourts.gov/vaccine-claims-office-special-masters",
  },
  osmGuidelines: {
    title: "U.S. Court of Federal Claims — Guidelines for Practice Under the National Vaccine Injury Compensation Program (Office of Special Masters)",
    url: "https://www.uscfc.uscourts.gov/guidelines-practice-under-national-vaccine-injury-compensation-program",
  },
  injuryTable: {
    title: "42 CFR § 100.3 — Vaccine Injury Table (eCFR)",
    url: "https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-100/section-100.3",
  },
  cicpRegs: {
    title: "42 CFR Part 110 — Countermeasures Injury Compensation Program (eCFR)",
    url: "https://www.ecfr.gov/current/title-42/chapter-I/subchapter-J/part-110",
  },
  vaccineAct: {
    title: "42 U.S.C. § 300aa-10 et seq. — National Vaccine Injury Compensation Program (Cornell LII)",
    url: "https://www.law.cornell.edu/uscode/text/42/chapter-6A/subchapter-XIX/part-2",
  },
  usc300aa11: {
    title: "42 U.S.C. § 300aa-11 — Petitions for compensation (Cornell LII)",
    url: "https://www.law.cornell.edu/uscode/text/42/300aa-11",
  },
  usc300aa12: {
    title: "42 U.S.C. § 300aa-12 — Court jurisdiction, special masters, 240-day decision timeline, and review (Cornell LII)",
    url: "https://www.law.cornell.edu/uscode/text/42/300aa-12",
  },
  usc300aa14: {
    title: "42 U.S.C. § 300aa-14 — Vaccine Injury Table (Cornell LII)",
    url: "https://www.law.cornell.edu/uscode/text/42/300aa-14",
  },
  usc300aa15: {
    title: "42 U.S.C. § 300aa-15 — Compensation (Cornell LII)",
    url: "https://www.law.cornell.edu/uscode/text/42/300aa-15",
  },
  usc300aa16: {
    title: "42 U.S.C. § 300aa-16 — Limitations of actions (Cornell LII)",
    url: "https://www.law.cornell.edu/uscode/text/42/300aa-16",
  },
  usc300aa21: {
    title: "42 U.S.C. § 300aa-21 — Election after judgment; continuing or withdrawing a petition (Cornell LII)",
    url: "https://www.law.cornell.edu/uscode/text/42/300aa-21",
  },
  prepActCicp: {
    title: "42 U.S.C. § 247d-6e — PREP Act covered countermeasure process (Cornell LII)",
    url: "https://www.law.cornell.edu/uscode/text/42/247d-6e",
  },
  // ─── Court decisions (opened and read in full before citing) ───────────────
  caseStegall2023: {
    title: "Stegall v. Sec'y of Health & Human Servs., No. 22-1737V (Fed. Cl. Spec. Mstr. Dec. 6, 2023) — Decision Awarding Damages (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_22-vv-01737/pdf/USCOURTS-cofc-1_22-vv-01737-1.pdf",
  },
  caseHoover2021: {
    title: "Hoover v. Sec'y of Health & Human Servs., No. 20-1394V (Fed. Cl. Spec. Mstr. Nov. 1, 2021) — Decision on Attorneys' Fees and Costs (U.S. Court of Federal Claims)",
    url: "https://ecf.cofc.uscourts.gov/cgi-bin/show_public_doc?2020vv1394-34-0",
  },
  caseChu2026: {
    title: "Chu v. Sec'y of Health & Human Servs., No. 21-1185V (Fed. Cl. Jan. 28, 2026) — Opinion and Order (U.S. Court of Federal Claims)",
    url: "https://ecf.cofc.uscourts.gov/cgi-bin/show_public_doc?2021vv1185-66-0",
  },
  caseTaing2024: {
    title: "Taing v. Sec'y of Health & Human Servs., No. 21-118V (Fed. Cl. Spec. Mstr. Oct. 30, 2024) — Decision on Attorney's Fees and Costs (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_21-vv-00118/pdf/USCOURTS-cofc-1_21-vv-00118-1.pdf",
  },
  caseDruery2024: {
    title: "Druery v. Sec'y of Health & Human Servs., No. 17-1213V (Fed. Cl. Spec. Mstr. Oct. 25, 2024) — Decision Awarding Attorneys' Fees and Costs (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_17-vv-01213/pdf/USCOURTS-cofc-1_17-vv-01213-3.pdf",
  },
  caseHasanovic2025: {
    title: "Hasanovic v. Sec'y of Health & Human Servs., No. 21-1828V (Fed. Cl. Spec. Mstr. Mar. 13, 2025) — Decision on Attorneys' Fees and Costs (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_21-vv-01828/pdf/USCOURTS-cofc-1_21-vv-01828-1.pdf",
  },
  vaers: {
    title: "VAERS — Vaccine Adverse Event Reporting System (HHS)",
    url: "https://vaers.hhs.gov/",
  },
  vaersReport: {
    title: "VAERS — Report an Adverse Event",
    url: "https://vaers.hhs.gov/reportevent.html",
  },
  cdcVaers: {
    title: "CDC — About the Vaccine Adverse Event Reporting System (VAERS)",
    url: "https://www.cdc.gov/vaccine-safety-systems/vaers/index.html",
  },
  cdcSchedules: {
    title: "CDC — Immunization Schedules",
    url: "https://www.cdc.gov/vaccines/hcp/imz-schedules/index.html",
  },
  cdcAcip: {
    title: "CDC — Advisory Committee on Immunization Practices (ACIP)",
    url: "https://www.cdc.gov/acip/",
  },
  cdcRsv: {
    title: "CDC — RSV Vaccines",
    url: "https://www.cdc.gov/rsv/vaccines/index.html",
  },
  cdcVis: {
    title: "CDC — Vaccine Information Statements (VIS)",
    url: "https://www.cdc.gov/vaccines/hcp/current-vis/index.html",
  },
  cdcVaccineSafety: {
    title: "CDC — Vaccine Safety",
    url: "https://www.cdc.gov/vaccine-safety/",
  },
  cdcGbs: {
    title: "CDC — Guillain-Barré Syndrome (GBS) and Vaccines",
    url: "https://www.cdc.gov/vaccine-safety/about/guillain-barre.html",
  },
  cdcFainting: {
    title: "CDC — Fainting and Vaccines",
    url: "https://www.cdc.gov/vaccine-safety/about/fainting.html",
  },
  nindsGbs: {
    title: "NINDS (NIH) — Guillain-Barré Syndrome",
    url: "https://www.ninds.nih.gov/health-information/disorders/guillain-barre-syndrome",
  },
  nindsTm: {
    title: "NINDS (NIH) — Transverse Myelitis",
    url: "https://www.ninds.nih.gov/health-information/disorders/transverse-myelitis",
  },
  medlineCidp: {
    title: "MedlinePlus (NIH) — Chronic inflammatory demyelinating polyneuropathy",
    url: "https://medlineplus.gov/ency/article/000777.htm",
  },
  medlineBrachial: {
    title: "MedlinePlus (NIH) — Brachial plexopathy",
    url: "https://medlineplus.gov/ency/article/001418.htm",
  },
  medlineAnaphylaxis: {
    title: "MedlinePlus (NIH) — Anaphylaxis",
    url: "https://medlineplus.gov/anaphylaxis.html",
  },
  medlineFainting: {
    title: "MedlinePlus (NIH) — Fainting",
    url: "https://medlineplus.gov/ency/article/003092.htm",
  },
  nhlbiItp: {
    title: "NHLBI (NIH) — Immune Thrombocytopenia (ITP)",
    url: "https://www.nhlbi.nih.gov/health/immune-thrombocytopenia",
  },
} satisfies Record<string, Source>;

/** Core official sources linked from /about, /faq, /disclaimer, and llms.txt. */
export const CORE_SOURCES: Source[] = [
  SOURCES.hrsaVicp,
  SOURCES.hrsaCoveredVaccines,
  SOURCES.hrsaWhoCanFile,
  SOURCES.hrsaVicpData,
  SOURCES.hrsaCicp,
  SOURCES.hrsaCicpFiling,
  SOURCES.cfcOsm,
  SOURCES.injuryTable,
  SOURCES.vaccineAct,
  SOURCES.vaers,
  SOURCES.cdcSchedules,
];
