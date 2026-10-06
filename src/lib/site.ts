/** Canonical production origin (no trailing slash). Override with NEXT_PUBLIC_SITE_URL. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vaccineinjuries.org";

export const SITE_NAME = "VaccineInjuries.org";

/** Plain-language description of what the site is (and is not). Used in structured data. */
export const SITE_DESCRIPTION =
  "VaccineInjuries.org is an independent educational and connection website. It explains the federal National Vaccine Injury Compensation Program (VICP) and Countermeasures Injury Compensation Program (CICP) in plain English and, on request, connects people who believe they had a serious vaccine reaction with independent attorneys for a free case review. It is not a law firm or a government agency and does not provide legal or medical advice.";

/** Default byline for articles until individual authors/reviewers are named. */
export const EDITORIAL_TEAM = "VaccineInjuries.org Editorial Team";
export const EDITORIAL_TEAM_URL = `${SITE_URL}/about#editorial-team`;

/** Date core pages were last substantively updated (YYYY-MM-DD). */
export const CORE_PAGES_LAST_MODIFIED = "2026-10-06";
