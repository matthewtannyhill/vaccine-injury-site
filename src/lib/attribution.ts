/**
 * First-touch attribution for intake leads.
 *
 * Landing page, external referrer, and campaign params are captured on the
 * first page of a browser-tab session. Source page keeps updating with the
 * last on-site path until the visitor opens /intake. Referrers from this
 * site, any *.vercel.app host, or localhost are ignored. When the landing
 * URL has utm_source or utm_medium, those win over referrer classification.
 */

export const MAX_ATTRIBUTION_LENGTH = 500;

export const ATTRIBUTION_STORAGE_KEY = "vi_attribution_v1";

const CLICK_ID_KEYS = ["gclid", "msclkid", "fbclid"] as const;

export const ATTRIBUTION_AIRTABLE_FIELDS = [
  "Source Page",
  "Landing Page",
  "Referrer",
  "Traffic Source",
  "UTM Campaign",
  "Click ID",
] as const;

export type StoredAttribution = {
  landingPage: string;
  referrer: string;
  sourcePage: string;
};

export type VisitSnapshot = {
  pathname: string;
  search: string;
  referrer: string;
  currentHostname?: string;
};

export type LeadAttribution = {
  sourcePage: string;
  landingPage: string;
  referrer: string;
  trafficSource: string;
  utmCampaign: string;
  clickId: string;
};

type QueryReader = {
  get(name: string): string | null;
};

export function sanitizeAttributionValue(value: unknown): string {
  if (typeof value !== "string") return "";
  const cleaned = value.replace(/[\u0000-\u001F\u007F]/g, "").trim();
  return cleaned.length > MAX_ATTRIBUTION_LENGTH ? cleaned.slice(0, MAX_ATTRIBUTION_LENGTH) : cleaned;
}

function canonicalHost(hostname: string): string {
  return hostname.toLowerCase().replace(/\.$/, "").replace(/^\[|\]$/g, "");
}

/** Hosts that must not count as an external referrer. */
export function isInternalHostname(hostname: string): boolean {
  const host = canonicalHost(hostname);
  if (!host) return true;
  if (host === "localhost" || host === "127.0.0.1" || host === "::1") return true;
  return (
    host === "vaccineinjuries.org" ||
    host.endsWith(".vaccineinjuries.org") ||
    host === "vercel.app" ||
    host.endsWith(".vercel.app")
  );
}

function hostsEqual(a: string, b: string): boolean {
  return canonicalHost(a) === canonicalHost(b);
}

/** Full external referrer URL, or "" when the visit is direct or internal. */
export function externalReferrer(referrer: string | null | undefined, currentHostname?: string): string {
  if (!referrer || typeof referrer !== "string") return "";
  let url: URL;
  try {
    url = new URL(referrer.trim());
  } catch {
    return "";
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") return "";
  if (currentHostname && hostsEqual(url.hostname, currentHostname)) return "";
  if (isInternalHostname(url.hostname)) return "";
  url.username = "";
  url.password = "";
  url.hash = "";
  return sanitizeAttributionValue(url.toString());
}

function displayHost(hostname: string): string {
  const host = canonicalHost(hostname);
  return host.startsWith("www.") ? host.slice(4) : host;
}

/**
 * Search-result hosts only. Other subdomains (mail.google.com, news.google.com)
 * stay referrals so a Gmail link is not labeled organic search.
 */
function organicEngine(hostname: string): string | null {
  const bare = displayHost(hostname);
  if (/^google\.([a-z]{2,3}|com?\.[a-z]{2}|co\.[a-z]{2})$/.test(bare)) return "google";
  if (bare === "bing.com" || bare.endsWith(".bing.com")) return "bing";
  if (bare === "duckduckgo.com" || bare.endsWith(".duckduckgo.com")) return "duckduckgo";
  if (bare === "search.yahoo.com" || bare.endsWith(".search.yahoo.com") || bare === "yahoo.com") return "yahoo";
  if (bare === "ecosia.org") return "ecosia";
  if (bare === "search.brave.com") return "brave";
  if (bare === "baidu.com") return "baidu";
  if (bare === "yandex.com" || bare === "yandex.ru" || bare.endsWith(".yandex.com") || bare.endsWith(".yandex.ru")) {
    return "yandex";
  }
  return null;
}

export function deriveTrafficSource(input: {
  utmSource?: string | null;
  utmMedium?: string | null;
  referrer?: string | null;
  currentHostname?: string | null;
}): string {
  const utmSource = sanitizeAttributionValue(input.utmSource ?? "");
  const utmMedium = sanitizeAttributionValue(input.utmMedium ?? "");
  if (utmSource || utmMedium) {
    return sanitizeAttributionValue(`${utmSource || "(not set)"} / ${utmMedium || "(not set)"}`);
  }

  const referrer = externalReferrer(input.referrer, input.currentHostname ?? undefined);
  if (!referrer) return "direct";

  let hostname = "";
  try {
    hostname = new URL(referrer).hostname;
  } catch {
    return "direct";
  }

  const engine = organicEngine(hostname);
  if (engine) return `${engine} / organic`;

  const host = displayHost(hostname);
  if (!host) return "direct";
  return sanitizeAttributionValue(`${host} / referral`);
}

export function deriveClickId(params: QueryReader): string {
  const parts: string[] = [];
  for (const key of CLICK_ID_KEYS) {
    const value = sanitizeAttributionValue(params.get(key) ?? "");
    if (value) parts.push(`${key}:${value}`);
  }
  return sanitizeAttributionValue(parts.join(" | "));
}

export function normalizePathname(pathname: string): string {
  const raw = typeof pathname === "string" ? pathname : "";
  const cut = raw.split(/[?#]/)[0] ?? "";
  let path = cut;
  try {
    path = decodeURI(cut);
  } catch {
    path = cut;
  }
  if (!path.startsWith("/")) path = `/${path}`;
  if (path.startsWith("//") || path.includes("\\")) return "/";
  return sanitizeAttributionValue(path) || "/";
}

export function isIntakePath(pathname: string): boolean {
  const path = normalizePathname(pathname);
  return path === "/intake" || path.startsWith("/intake/");
}

export function normalizeSearch(search: string): string {
  if (!search) return "";
  const noHash = search.split("#")[0] ?? "";
  const raw = noHash.startsWith("?") ? noHash.slice(1) : noHash;
  if (!raw) return "";
  return `?${raw}`;
}

export function buildLandingPage(pathname: string, search: string): string {
  return sanitizeAttributionValue(normalizePathname(pathname) + normalizeSearch(search));
}

export function normalizeSourcePage(value: unknown): string {
  const raw = sanitizeAttributionValue(value);
  if (!raw) return "";
  const pathOnly = raw.split(/[?#]/)[0] ?? "";
  if (!pathOnly.startsWith("/") || pathOnly.startsWith("//") || pathOnly.includes("\\") || pathOnly.includes("://")) {
    return "";
  }
  if (isIntakePath(pathOnly)) return "";
  return sanitizeAttributionValue(pathOnly);
}

function paramsFromLanding(landingPage: string): URLSearchParams {
  const hashless = landingPage.split("#")[0] ?? "";
  const queryIndex = hashless.indexOf("?");
  if (queryIndex === -1) return new URLSearchParams();
  return new URLSearchParams(hashless.slice(queryIndex + 1));
}

/** Path plus query. Absolute URLs are kept only when they are on this site. */
export function sanitizeLandingPage(value: unknown): string {
  const raw = sanitizeAttributionValue(value);
  if (!raw) return "";
  const hashless = (raw.split("#")[0] ?? "").trim();
  if (hashless.startsWith("/") && !hashless.startsWith("//")) {
    return sanitizeAttributionValue(hashless);
  }
  try {
    const url = new URL(hashless);
    if (url.protocol !== "http:" && url.protocol !== "https:") return "";
    if (!isInternalHostname(url.hostname)) return "";
    return sanitizeAttributionValue(`${url.pathname}${url.search}`);
  } catch {
    return "";
  }
}

export function nextTouch(previous: StoredAttribution | null, visit: VisitSnapshot): StoredAttribution {
  const pathname = normalizePathname(visit.pathname);
  const onIntake = isIntakePath(pathname);
  const hasLanding = Boolean(previous && sanitizeAttributionValue(previous.landingPage));

  if (!previous || !hasLanding) {
    return {
      landingPage: buildLandingPage(pathname, visit.search),
      referrer: externalReferrer(visit.referrer, visit.currentHostname),
      sourcePage: onIntake ? "" : pathname,
    };
  }

  return {
    landingPage: sanitizeLandingPage(previous.landingPage),
    referrer: externalReferrer(previous.referrer, visit.currentHostname),
    sourcePage: onIntake ? normalizeSourcePage(previous.sourcePage) : pathname,
  };
}

export function attributionFromCapture(input: unknown, currentHostname?: string): LeadAttribution {
  const empty: LeadAttribution = {
    sourcePage: "",
    landingPage: "",
    referrer: "",
    trafficSource: "",
    utmCampaign: "",
    clickId: "",
  };

  if (!input || typeof input !== "object") return empty;

  try {
    const record = input as Record<string, unknown>;
    const landingPage = sanitizeLandingPage(record.landingPage);
    const referrer = externalReferrer(typeof record.referrer === "string" ? record.referrer : "", currentHostname);
    const sourcePage = normalizeSourcePage(record.sourcePage);
    const params = paramsFromLanding(landingPage);
    return {
      sourcePage,
      landingPage,
      referrer,
      trafficSource: deriveTrafficSource({
        utmSource: params.get("utm_source"),
        utmMedium: params.get("utm_medium"),
        referrer,
        currentHostname,
      }),
      utmCampaign: sanitizeAttributionValue(params.get("utm_campaign") ?? ""),
      clickId: deriveClickId(params),
    };
  } catch {
    return empty;
  }
}

function hasCaptureSignal(input: object): boolean {
  const record = input as Record<string, unknown>;
  return ["landingPage", "referrer", "sourcePage"].some((key) => {
    const value = record[key];
    return typeof value === "string" && value.trim().length > 0;
  });
}

/** Airtable field map. Empty values are omitted so a blank capture writes nothing. */
export function attributionAirtableFields(input: unknown, currentHostname?: string): Record<string, string> {
  if (!input || typeof input !== "object" || !hasCaptureSignal(input)) return {};

  const attr = attributionFromCapture(input, currentHostname);
  const pairs: [string, string][] = [
    ["Source Page", attr.sourcePage],
    ["Landing Page", attr.landingPage],
    ["Referrer", attr.referrer],
    ["Traffic Source", attr.trafficSource],
    ["UTM Campaign", attr.utmCampaign],
    ["Click ID", attr.clickId],
  ];

  const fields: Record<string, string> = {};
  for (const [name, value] of pairs) {
    if (value) fields[name] = value;
  }
  return fields;
}

/**
 * Runs from the initial HTML, before hydration, so a full navigation cannot
 * wipe the landing URL. Client-side route changes are handled separately.
 * Referrer cleanup still happens later; this only persists the raw visit.
 */
export function earlyCaptureScript(): string {
  const key = JSON.stringify(ATTRIBUTION_STORAGE_KEY);
  return `(function(){try{var k=${key};var path=location.pathname||"/";var intake=path==="/intake"||path.indexOf("/intake/")===0;var raw=sessionStorage.getItem(k);var prev=null;if(raw){try{prev=JSON.parse(raw);}catch(e){prev=null;}}if(!prev||typeof prev.landingPage!=="string"||!prev.landingPage){sessionStorage.setItem(k,JSON.stringify({landingPage:path+(location.search||""),referrer:document.referrer||"",sourcePage:intake?"":path}));return;}if(intake)return;sessionStorage.setItem(k,JSON.stringify({landingPage:prev.landingPage,referrer:typeof prev.referrer==="string"?prev.referrer:"",sourcePage:path}));}catch(e){}})();`;
}

/**
 * True when Airtable rejected the create because of an attribution column.
 * The HTTP body is JSON, so quotes around the field name are escaped
 * (`\"Source Page\"`) until parsed.
 */
export function airtableRejectedAttribution(status: number, body: string): boolean {
  if (status !== 422 || !body) return false;
  return ATTRIBUTION_AIRTABLE_FIELDS.some((name) => {
    return body.includes(`"${name}"`) || body.includes(`\\"${name}\\"`);
  });
}
