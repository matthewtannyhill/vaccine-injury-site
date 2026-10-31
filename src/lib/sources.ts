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
  hrsaVicpDataReportSep2026: {
    title: "HRSA — National Vaccine Injury Compensation Program Monthly Statistics Report (updated September 1, 2026) (Internet Archive copy of official PDF)",
    url: "https://web.archive.org/web/20260921183008/https://www.hrsa.gov/sites/default/files/hrsa/vicp/vicp-stats-09-01-26.pdf",
  },
  hrsaVicpDataReportOct2026: {
    title: "HRSA — National Vaccine Injury Compensation Program Monthly Statistics Report (updated October 1, 2026) (Internet Archive copy of official PDF)",
    url: "https://web.archive.org/web/20261015000519/https://www.hrsa.gov/sites/default/files/hrsa/vicp/vicp-stats-10-01-26.pdf",
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
  usc300aa13: {
    title: "42 U.S.C. § 300aa-13 — Determination of eligibility and compensation (Cornell LII)",
    url: "https://www.law.cornell.edu/uscode/text/42/300aa-13",
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
  usc300aa22: {
    title: "42 U.S.C. § 300aa-22 — Standards of responsibility (limits on civil actions against manufacturers) (Cornell LII)",
    url: "https://www.law.cornell.edu/uscode/text/42/300aa-22",
  },
  prepActCicp: {
    title: "42 U.S.C. § 247d-6e — PREP Act covered countermeasure process (Cornell LII)",
    url: "https://www.law.cornell.edu/uscode/text/42/247d-6e",
  },
  // ─── Court decisions (opened and read in full before citing) ───────────────
  caseSchrothEntitlement2024: {
    title: "Schroth v. Sec'y of Health & Human Servs., No. 24-585V (Fed. Cl. Spec. Mstr. Dec. 6, 2024) — Ruling on Entitlement (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_24-vv-00585/pdf/USCOURTS-cofc-1_24-vv-00585-0.pdf",
  },
  caseSchrothDamages2025: {
    title: "Schroth v. Sec'y of Health & Human Servs., No. 24-585V (Fed. Cl. Spec. Mstr. Feb. 6, 2025) — Decision Awarding Damages (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_24-vv-00585/pdf/USCOURTS-cofc-1_24-vv-00585-1.pdf",
  },
  caseMaupin2026: {
    title: "Maupin v. Sec'y of Health & Human Servs., No. 24-1813V (Fed. Cl. Spec. Mstr. Jan. 6, 2026) — Ruling on Entitlement (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_24-vv-01813/pdf/USCOURTS-cofc-1_24-vv-01813-0.pdf",
  },
  caseCampbellEntitlement2022: {
    title: "Campbell v. Sec'y of Health & Human Servs., No. 20-381V (Fed. Cl. Spec. Mstr. Mar. 9, 2022) — Ruling on Entitlement (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_20-vv-00381/pdf/USCOURTS-cofc-1_20-vv-00381-0.pdf",
  },
  caseCampbellDamages2023: {
    title: "Campbell v. Sec'y of Health & Human Servs., No. 20-381V (Fed. Cl. Spec. Mstr. Jan. 4, 2023) — Decision Awarding Damages (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_20-vv-00381/pdf/USCOURTS-cofc-1_20-vv-00381-1.pdf",
  },
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
  caseWhite2023: {
    title: "White v. Sec'y of Health & Human Servs., No. 22-535V (Fed. Cl. Spec. Mstr. Oct. 18, 2023) — Decision Awarding Damages (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_22-vv-00535/pdf/USCOURTS-cofc-1_22-vv-00535-1.pdf",
  },
  caseFelix2024: {
    title: "Felix v. Sec'y of Health & Human Servs., No. 21-1728V (Fed. Cl. Aug. 14, 2024) — Opinion and Order Sustaining Dismissal (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_21-vv-01728/pdf/USCOURTS-cofc-1_21-vv-01728-1.pdf",
  },
  caseVanLeerGreenberg2023: {
    title: "Van Leer-Greenberg v. Sec'y of Health & Human Servs., No. 20-1150V (Fed. Cl. Spec. Mstr. Nov. 30, 2023) — Decision on Entitlement (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_20-vv-01150/pdf/USCOURTS-cofc-1_20-vv-01150-0.pdf",
  },
  caseCrawford2025: {
    title: "Crawford v. Sec'y of Health & Human Servs., No. 25-148V (Fed. Cl. Spec. Mstr. Nov. 7, 2025) — Decision Awarding Damages (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_25-vv-00148/pdf/USCOURTS-cofc-1_25-vv-00148-1.pdf",
  },
  caseBickel2026: {
    title: "Bickel v. Sec'y of Health & Human Servs., No. 21-867V (Fed. Cl. Spec. Mstr. Jan. 23, 2026) — Entitlement Decision (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_21-vv-00867/pdf/USCOURTS-cofc-1_21-vv-00867-0.pdf",
  },
  caseGrigsbyFees2026: {
    title: "Grigsby v. Sec'y of Health & Human Servs., No. 24-1515V (Fed. Cl. Spec. Mstr. Feb. 19, 2026) — Decision Granting Award of Attorney's Fees and Costs (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_24-vv-01515/pdf/USCOURTS-cofc-1_24-vv-01515-1.pdf",
  },
  caseSongero2025: {
    title: "Songero v. Sec'y of Health & Human Servs., No. 18-300V (Fed. Cl. Spec. Mstr. Oct. 3, 2025) — Ruling on Entitlement (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_18-vv-00300/pdf/USCOURTS-cofc-1_18-vv-00300-0.pdf",
  },
  caseGoodwin2026: {
    title: "Goodwin v. Sec'y of Health & Human Servs., No. 19-503V (Fed. Cl. Apr. 23, 2026) — Opinion and Order Sustaining Denial of Compensation (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_19-vv-00503/pdf/USCOURTS-cofc-1_19-vv-00503-3.pdf",
  },
  caseVarughese2026: {
    title: "Varughese v. Sec'y of Health & Human Servs., No. 22-1408V (Fed. Cl. Spec. Mstr. July 23, 2026) — Decision Denying Compensation (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_22-vv-01408/pdf/USCOURTS-cofc-1_22-vv-01408-0.pdf",
  },
  caseFisher2025: {
    title: "Fisher v. Sec'y of Health & Human Servs., No. 24-1732V (Fed. Cl. Spec. Mstr. Sept. 2025, reissued Oct. 20, 2025) — Decision on Entitlement (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_24-vv-01732/pdf/USCOURTS-cofc-1_24-vv-01732-0.pdf",
  },
  casePartovi2024: {
    title: "Partovi v. Sec'y of Health & Human Servs., No. 23-1094V (Fed. Cl. Spec. Mstr. Feb. 29, 2024) — Decision on Damages (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_23-vv-01094/pdf/USCOURTS-cofc-1_23-vv-01094-1.pdf",
  },
  caseWJCosts2025: {
    title: "W.J. v. Sec'y of Health & Human Servs., No. 21-1342V (Fed. Cl. Spec. Mstr. Apr. 23, 2025, reissued May 23, 2025) — Decision Awarding Petitioners' Costs (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_21-vv-01342/pdf/USCOURTS-cofc-1_21-vv-01342-3.pdf",
  },
  caseEberling2024: {
    title: "Eberling v. Sec'y of Health & Human Servs., No. 22-778V (Fed. Cl. Spec. Mstr. Oct. 8, 2024) — Decision Awarding Damages (proffer) (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_22-vv-00778/pdf/USCOURTS-cofc-1_22-vv-00778-1.pdf",
  },
  caseGreeley2026: {
    title: "Greeley v. Sec'y of Health & Human Servs., No. 24-319V (Fed. Cl. Spec. Mstr. Jan. 22, 2026) — Decision on Joint Stipulation (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_24-vv-00319/pdf/USCOURTS-cofc-1_24-vv-00319-0.pdf",
  },
  caseWilsonRussellEntitlement2026: {
    title: "Wilson-Russell v. Sec'y of Health & Human Servs., No. 25-983V (Fed. Cl. Spec. Mstr. Jan. 21, 2026) — Ruling on Entitlement (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_25-vv-00983/pdf/USCOURTS-cofc-1_25-vv-00983-0.pdf",
  },
  caseWilsonRussellDamages2026: {
    title: "Wilson-Russell v. Sec'y of Health & Human Servs., No. 25-983V (Fed. Cl. Spec. Mstr. Mar. 26, 2026) — Decision Awarding Damages (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_25-vv-00983/pdf/USCOURTS-cofc-1_25-vv-00983-1.pdf",
  },
  caseMoylerDismissal2025: {
    title: "Moyler v. Sec'y of Health & Human Servs., No. 21-1720V (Fed. Cl. Spec. Mstr. Mar. 12, 2025) — Dismissal Decision (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_21-vv-01720/pdf/USCOURTS-cofc-1_21-vv-01720-0.pdf",
  },
  caseMoylerReview2025: {
    title: "Moyler v. United States, No. 21-1720V (Fed. Cl. Sept. 3, 2025, reissued Sept. 18, 2025) — Opinion and Order denying motion for review (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_21-vv-01720/pdf/USCOURTS-cofc-1_21-vv-01720-1.pdf",
  },
  caseMoylerStipulation2026: {
    title: "Moyler v. Sec'y of Health & Human Servs., No. 21-1720V (Fed. Cl. Spec. Mstr. May 4, 2026) — Decision on Joint Stipulation (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_21-vv-01720/pdf/USCOURTS-cofc-1_21-vv-01720-3.pdf",
  },
  caseLaBineEntitlement2025: {
    title: "LaBine v. Sec'y of Health & Human Servs., No. 17-1443V (Fed. Cl. Spec. Mstr. Oct. 27, 2025) — Ruling on Entitlement (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_17-vv-01443/pdf/USCOURTS-cofc-1_17-vv-01443-1.pdf",
  },
  caseMarcillo2023: {
    title: "Marcillo v. Sec'y of Health & Human Servs., No. 20-2061V (Fed. Cl. Spec. Mstr. Apr. 14, 2023) — Decision Awarding Damages (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_20-vv-02061/pdf/USCOURTS-cofc-1_20-vv-02061-1.pdf",
  },
  cfcVaccineProSe: {
    title: "U.S. Court of Federal Claims — Vaccine Pro Se Information (sample petitions and forms for people filing without a lawyer)",
    url: "https://www.uscfc.uscourts.gov/vaccine-pro-se-information",
  },
  cfcVaccineAttorneysList: {
    title: "U.S. Court of Federal Claims — Vaccine Attorneys List (Office of Special Masters)",
    url: "https://www.uscfc.uscourts.gov/vaccine-attorneys-list",
  },
  cfcFeeSchedule: {
    title: "U.S. Court of Federal Claims — Fee Schedule (effective July 28, 2025)",
    url: "https://www.uscfc.uscourts.gov/fee-schedule",
  },
  vaccineRules: {
    title: "U.S. Court of Federal Claims — Vaccine Rules (Appendix B to the court's rules, as amended through July 27, 2026)",
    url: "https://www.uscfc.uscourts.gov/sites/cfc/files/Vaccine%20Rules%207.27.26.pdf",
  },
  osmGuidelinesPdf: {
    title: "U.S. Court of Federal Claims — Guidelines for Practice Under the National Vaccine Injury Compensation Program (PDF, as amended through March 3, 2025)",
    url: "https://www.uscfc.uscourts.gov/sites/cfc/files/Vaccine%20Guidelines%203.03.2025.pdf",
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
  cdcRotavirusSafety: {
    title: "CDC — Rotavirus Vaccine Safety",
    url: "https://www.cdc.gov/vaccine-safety/vaccines/rotavirus.html",
  },
  cdcRotavirusVis: {
    title: "CDC — Rotavirus Vaccine Information Statement (Oct. 15, 2021)",
    url: "https://www.cdc.gov/vaccines/hcp/current-vis/rotavirus.html",
  },
  caseBarton2025: {
    title: "Barton v. Sec'y of Health & Human Servs., No. 21-799V (Fed. Cl. Spec. Mstr. Aug. 22, 2025) — Ruling on Damages (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_21-vv-00799/pdf/USCOURTS-cofc-1_21-vv-00799-1.pdf",
  },
  caseWilliams2025: {
    title: "Williams v. Sec'y of Health & Human Servs., No. 24-80V (Fed. Cl. Spec. Mstr. Mar. 25, 2025) — Findings of Fact and Conclusions of Law Dismissing Table Claim (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_24-vv-00080/pdf/USCOURTS-cofc-1_24-vv-00080-0.pdf",
  },
  caseRamos2024: {
    title: "Ramos v. Sec'y of Health & Human Servs., No. 20-583V (Fed. Cl. Spec. Mstr. June 3, 2024) — Entitlement Decision (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_20-vv-00583/pdf/USCOURTS-cofc-1_20-vv-00583-0.pdf",
  },
  caseCavanaugh2026: {
    title: "Cavanaugh v. Sec'y of Health & Human Servs., No. 21-567V (Fed. Cl. Mar. 24, 2026) — Opinion and Order denying motion for review (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_21-vv-00567/pdf/USCOURTS-cofc-1_21-vv-00567-1.pdf",
  },
  caseRadke2026: {
    title: "Radke v. Sec'y of Health & Human Servs., No. 22-1384V (Fed. Cl. Apr. 23, 2026) — Opinion and Order granting motion for review and remanding (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_22-vv-01384/pdf/USCOURTS-cofc-1_22-vv-01384-1.pdf",
  },
  caseExum2025: {
    title: "Exum v. Sec'y of Health & Human Servs., No. 21-1513V (Fed. Cl. Sept. 30, 2025) — Memorandum and Order sustaining remand decision (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_21-vv-01513/pdf/USCOURTS-cofc-1_21-vv-01513-4.pdf",
  },
  caseLemieux2025: {
    title: "Lemieux v. Sec'y of Health & Human Servs., No. 19-1121V (Fed. Cl. Spec. Mstr. Dec. 16, 2025) — Ruling on Entitlement (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_19-vv-01121/pdf/USCOURTS-cofc-1_19-vv-01121-1.pdf",
  },
  caseRomine2026: {
    title: "Romine v. Sec'y of Health & Human Servs., No. 19-468V (Fed. Cl. Spec. Mstr. Mar. 13, 2026) — Published Decision Denying Entitlement (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_19-vv-00468/pdf/USCOURTS-cofc-1_19-vv-00468-0.pdf",
  },
  caseAlthaus2026: {
    title: "Althaus v. Sec'y of Health & Human Servs., No. 18-1868V (Fed. Cl. Spec. Mstr. Feb. 10, 2026) — Decision dismissing petition (GovInfo)",
    url: "https://www.govinfo.gov/content/pkg/USCOURTS-cofc-1_18-vv-01868/pdf/USCOURTS-cofc-1_18-vv-01868-0.pdf",
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
