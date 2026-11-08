import { ATTRIBUTION_STORAGE_KEY, nextTouch, type StoredAttribution } from "@/lib/attribution";

const STORAGE_KEY = ATTRIBUTION_STORAGE_KEY;

/**
 * Session storage for one tab. If sessionStorage is blocked, fall back to a
 * first-party session cookie so capture still works. Failures are ignored.
 */
function readRaw(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return readCookie();
  }
}

function writeRaw(value: string): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, value);
  } catch {
    writeCookie(value);
  }
}

function readCookie(): string | null {
  try {
    const parts = document.cookie ? document.cookie.split("; ") : [];
    const prefix = `${STORAGE_KEY}=`;
    for (const part of parts) {
      if (part.startsWith(prefix)) return decodeURIComponent(part.slice(prefix.length));
    }
    return null;
  } catch {
    return null;
  }
}

function writeCookie(value: string): void {
  try {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${STORAGE_KEY}=${encodeURIComponent(value)}; Path=/; SameSite=Lax${secure}`;
  } catch {
    // Storage is optional. The form must still submit.
  }
}

function readStored(): StoredAttribution | null {
  const raw = readRaw();
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") return null;
    const record = parsed as Record<string, unknown>;
    if (typeof record.landingPage !== "string") return null;
    return {
      landingPage: record.landingPage,
      referrer: typeof record.referrer === "string" ? record.referrer : "",
      sourcePage: typeof record.sourcePage === "string" ? record.sourcePage : "",
    };
  } catch {
    return null;
  }
}

export function recordVisit(pathnameFromRouter?: string | null): void {
  try {
    if (typeof window === "undefined") return;
    const pathname = pathnameFromRouter || window.location.pathname || "/";
    const next = nextTouch(readStored(), {
      pathname,
      search: window.location.search || "",
      referrer: typeof document !== "undefined" ? document.referrer || "" : "",
      currentHostname: window.location.hostname,
    });
    writeRaw(JSON.stringify(next));
  } catch {
    // Attribution must never break navigation or the form.
  }
}

export function getAttributionForSubmit():
  | { landingPage: string; referrer: string; sourcePage: string }
  | undefined {
  try {
    recordVisit(typeof window !== "undefined" ? window.location.pathname : null);
    const stored = readStored();
    if (!stored || !stored.landingPage) return undefined;
    return {
      landingPage: stored.landingPage,
      referrer: stored.referrer,
      sourcePage: stored.sourcePage,
    };
  } catch {
    return undefined;
  }
}
