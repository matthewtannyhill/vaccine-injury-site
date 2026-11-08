import assert from "node:assert/strict";
import { afterEach, describe, test } from "node:test";
import vm from "node:vm";
import { createLead, type LeadRecord } from "./airtable";
import { getAttributionForSubmit, recordVisit } from "./attribution-storage";
import {
  MAX_ATTRIBUTION_LENGTH,
  ATTRIBUTION_STORAGE_KEY,
  airtableRejectedAttribution,
  attributionAirtableFields,
  deriveClickId,
  deriveTrafficSource,
  earlyCaptureScript,
  externalReferrer,
  nextTouch,
  sanitizeAttributionValue,
  type StoredAttribution,
} from "./attribution";

const HOST = "www.vaccineinjuries.org";

function visit(pathname: string, search = "", referrer = "", currentHostname = HOST) {
  return { pathname, search, referrer, currentHostname };
}

describe("deriveTrafficSource", () => {
  test("uses utm_source / utm_medium when either UTM is present", () => {
    assert.equal(
      deriveTrafficSource({
        utmSource: "newsletter",
        utmMedium: "email",
        referrer: "https://www.google.com/",
      }),
      "newsletter / email",
    );
    assert.equal(deriveTrafficSource({ utmSource: "partner" }), "partner / (not set)");
    assert.equal(deriveTrafficSource({ utmMedium: "cpc" }), "(not set) / cpc");
    assert.equal(
      deriveTrafficSource({ utmSource: "  ", utmMedium: "", referrer: "https://www.google.com/" }),
      "google / organic",
    );
  });

  test("classifies search referrers as organic and other sites as referral", () => {
    const cases: [string, string][] = [
      ["https://www.google.com/", "google / organic"],
      ["https://google.co.uk/search?q=vicp", "google / organic"],
      ["https://www.google.com.au/", "google / organic"],
      ["https://news.google.com/articles/x", "news.google.com / referral"],
      ["https://mail.google.com/mail/", "mail.google.com / referral"],
      ["https://www.bing.com/search?q=vicp", "bing / organic"],
      ["https://cn.bing.com/search?q=vicp", "bing / organic"],
      ["https://duckduckgo.com/?q=vicp", "duckduckgo / organic"],
      ["https://search.yahoo.com/search?p=vicp", "yahoo / organic"],
      ["https://uk.search.yahoo.com/search?p=vicp", "yahoo / organic"],
      ["https://mail.yahoo.com/", "mail.yahoo.com / referral"],
      ["https://www.ecosia.org/search?q=vicp", "ecosia / organic"],
      ["https://search.brave.com/search?q=vicp", "brave / organic"],
      ["https://www.baidu.com/s?wd=vicp", "baidu / organic"],
      ["https://yandex.ru/search/?text=vicp", "yandex / organic"],
      ["https://chatgpt.com/c/abc", "chatgpt.com / referral"],
      ["https://www.perplexity.ai/search/x", "perplexity.ai / referral"],
    ];

    for (const [referrer, expected] of cases) {
      assert.equal(deriveTrafficSource({ referrer }), expected, referrer);
    }
  });

  test("direct when there is no referrer or the referrer is internal", () => {
    assert.equal(deriveTrafficSource({}), "direct");
    assert.equal(deriveTrafficSource({ referrer: "" }), "direct");
    assert.equal(
      deriveTrafficSource({ referrer: "https://www.vaccineinjuries.org/blog/post" }),
      "direct",
    );
    assert.equal(
      deriveTrafficSource({
        referrer: "https://vaccine-injury-site-git-preview-user.vercel.app/blog",
      }),
      "direct",
    );
    assert.equal(
      deriveTrafficSource({
        referrer: "https://preview.example.com/blog",
        currentHostname: "preview.example.com",
      }),
      "direct",
    );
    assert.equal(deriveTrafficSource({ referrer: "javascript:alert(1)" }), "direct");
  });
});

describe("externalReferrer", () => {
  test("ignores this site, vercel previews, localhost, and the current host", () => {
    assert.equal(externalReferrer("https://vaccineinjuries.org/blog"), "");
    assert.equal(externalReferrer("https://www.vaccineinjuries.org/blog/post"), "");
    assert.equal(externalReferrer("https://staging.vaccineinjuries.org/"), "");
    assert.equal(externalReferrer("https://vaccine-site-abc123.vercel.app/intake"), "");
    assert.equal(externalReferrer("http://localhost:3000/blog"), "");
    assert.equal(externalReferrer("http://127.0.0.1:3000/"), "");
    assert.equal(externalReferrer("https://evil.example/path", "evil.example"), "");
    assert.equal(externalReferrer("https://notvaccineinjuries.org/"), "https://notvaccineinjuries.org/");
  });

  test("keeps an external URL and drops credentials", () => {
    assert.equal(
      externalReferrer("https://user:pass@chatgpt.com/share/abc#section"),
      "https://chatgpt.com/share/abc",
    );
  });
});

describe("deriveClickId", () => {
  test("prefixes each present click id and keeps gclid, msclkid, fbclid order", () => {
    const params = new URLSearchParams("fbclid=F&gclid=G%201&msclkid=&unused=1");
    assert.equal(deriveClickId(params), "gclid:G 1 | fbclid:F");
    assert.equal(deriveClickId(new URLSearchParams("msclkid=M")), "msclkid:M");
    assert.equal(deriveClickId(new URLSearchParams("")), "");
  });
});

describe("sanitizeAttributionValue", () => {
  test("trims, strips control characters, truncates, and rejects non-strings", () => {
    assert.equal(sanitizeAttributionValue("  hello\nworld\r\t"), "helloworld");
    assert.equal(sanitizeAttributionValue("x".repeat(MAX_ATTRIBUTION_LENGTH + 40)).length, MAX_ATTRIBUTION_LENGTH);
    assert.equal(sanitizeAttributionValue(12), "");
    assert.equal(sanitizeAttributionValue(null), "");
  });
});

describe("nextTouch", () => {
  test("keeps first touch and moves source page until /intake", () => {
    let stored = nextTouch(
      null,
      visit(
        "/blog/shingles-vaccine-vicp-coverage",
        "?utm_source=chatgpt.com&utm_medium=referral&utm_campaign=spring",
        "https://chatgpt.com/s/abc",
      ),
    );
    assert.deepEqual(stored, {
      landingPage:
        "/blog/shingles-vaccine-vicp-coverage?utm_source=chatgpt.com&utm_medium=referral&utm_campaign=spring",
      referrer: "https://chatgpt.com/s/abc",
      sourcePage: "/blog/shingles-vaccine-vicp-coverage",
    });

    stored = nextTouch(stored, visit("/faq", "", "https://www.vaccineinjuries.org/blog/shingles-vaccine-vicp-coverage"));
    assert.equal(stored.sourcePage, "/faq");
    assert.equal(stored.referrer, "https://chatgpt.com/s/abc");
    assert.match(stored.landingPage, /^\/blog\/shingles-vaccine-vicp-coverage\?/);

    stored = nextTouch(stored, visit("/intake", "", "https://www.vaccineinjuries.org/faq"));
    assert.equal(stored.sourcePage, "/faq");
    assert.equal(stored.landingPage.includes("utm_campaign=spring"), true);

    const fields = attributionAirtableFields(stored);
    assert.equal(fields["Traffic Source"], "chatgpt.com / referral");
    assert.equal(fields["UTM Campaign"], "spring");
    assert.equal(fields["Source Page"], "/faq");
    assert.equal(fields["Landing Page"], stored.landingPage);
    assert.equal(fields["Referrer"], "https://chatgpt.com/s/abc");
    assert.equal(fields["Click ID"], undefined);
  });

  test("direct visit to /intake still records landing params and no source page", () => {
    const stored = nextTouch(
      null,
      visit("/intake", "?gclid=abc123&utm_source=google&utm_medium=cpc&utm_campaign=brand", ""),
    );
    assert.equal(stored.sourcePage, "");
    assert.equal(stored.referrer, "");
    assert.equal(stored.landingPage, "/intake?gclid=abc123&utm_source=google&utm_medium=cpc&utm_campaign=brand");

    const fields = attributionAirtableFields(stored);
    assert.equal(fields["Traffic Source"], "google / cpc");
    assert.equal(fields["Click ID"], "gclid:abc123");
    assert.equal(fields["UTM Campaign"], "brand");
    assert.equal(fields["Source Page"], undefined);
    assert.equal(fields["Referrer"], undefined);
    assert.equal(fields["Landing Page"], stored.landingPage);
  });

  test("an internal or preview referrer on the first page is direct", () => {
    const fromPreview = nextTouch(
      null,
      visit("/", "", "https://vaccine-injury-site-git-preview-user.vercel.app/blog"),
    );
    assert.equal(fromPreview.referrer, "");
    assert.equal(fromPreview.sourcePage, "/");
    assert.equal(attributionAirtableFields(fromPreview)["Traffic Source"], "direct");

    const fromSelf = nextTouch(null, visit("/how-it-works", "", "https://vaccineinjuries.org/"));
    assert.equal(fromSelf.referrer, "");
    assert.equal(attributionAirtableFields(fromSelf)["Traffic Source"], "direct");
  });

  test("does not treat paths that only start with the intake prefix as the form", () => {
    const stored = nextTouch(null, visit("/intake-guide", "", "https://www.bing.com/search?q=vicp"));
    assert.equal(stored.sourcePage, "/intake-guide");
    const onForm = nextTouch(stored, visit("/intake/thank-you"));
    assert.equal(onForm.sourcePage, "/intake-guide");
  });

  test("later UTMs do not replace the landing page", () => {
    const first = nextTouch(null, visit("/blog/post", "?utm_source=google&utm_medium=organic", "https://www.google.com/"));
    const later = nextTouch(first, visit("/faq", "?utm_source=later&utm_medium=email&gclid=nope"));
    assert.equal(later.landingPage, "/blog/post?utm_source=google&utm_medium=organic");
    assert.equal(attributionAirtableFields(later)["Traffic Source"], "google / organic");
    assert.equal(attributionAirtableFields(later)["Click ID"], undefined);
    assert.equal(later.sourcePage, "/faq");
  });
});

describe("attributionAirtableFields", () => {
  test("omits empty capture and ignores junk", () => {
    assert.deepEqual(attributionAirtableFields(undefined), {});
    assert.deepEqual(attributionAirtableFields(null), {});
    assert.deepEqual(attributionAirtableFields({}), {});
    assert.deepEqual(attributionAirtableFields("nope"), {});
    assert.deepEqual(attributionAirtableFields({ landingPage: "", referrer: "  ", sourcePage: "" }), {});
  });

  test("normalizes an on-site absolute landing URL and drops an off-site one", () => {
    const onSite = attributionAirtableFields({
      landingPage: "https://www.vaccineinjuries.org/blog/post?x=1",
      referrer: "https://www.bing.com/search?q=vicp",
      sourcePage: "/blog/post?utm_source=ignored",
    });
    assert.equal(onSite["Landing Page"], "/blog/post?x=1");
    assert.equal(onSite["Source Page"], "/blog/post");
    assert.equal(onSite["Traffic Source"], "bing / organic");
    assert.equal(onSite["Referrer"], "https://www.bing.com/search?q=vicp");

    const offSite = attributionAirtableFields({
      landingPage: "https://evil.example/phish",
      referrer: "https://chatgpt.com/",
      sourcePage: "/intake",
    });
    assert.equal(offSite["Landing Page"], undefined);
    assert.equal(offSite["Source Page"], undefined);
    assert.equal(offSite["Traffic Source"], "chatgpt.com / referral");
  });

  test("decodes campaign values and stores every click id that is present", () => {
    const fields = attributionAirtableFields({
      landingPage: "/?utm_source=facebook&utm_medium=paid&utm_campaign=spring%20sale&gclid=G&fbclid=F&msclkid=M",
      referrer: "",
      sourcePage: "/",
    });
    assert.equal(fields["UTM Campaign"], "spring sale");
    assert.equal(fields["Traffic Source"], "facebook / paid");
    assert.equal(fields["Click ID"], "gclid:G | msclkid:M | fbclid:F");
  });

  test("strips a forged internal referrer on the server", () => {
    const fields = attributionAirtableFields({
      landingPage: "/blog/post",
      referrer: "https://user:secret@www.vaccineinjuries.org/blog",
      sourcePage: "/blog/post",
    });
    assert.equal(fields["Referrer"], undefined);
    assert.equal(fields["Traffic Source"], "direct");
  });

  test("caps every written value at 500 characters", () => {
    const stored: StoredAttribution = nextTouch(
      null,
      visit("/blog/post", `?utm_source=${"x".repeat(800)}&utm_medium=email`, `https://chatgpt.com/${"y".repeat(800)}`),
    );
    assert.ok(stored.landingPage.length <= MAX_ATTRIBUTION_LENGTH);
    assert.ok(stored.referrer.length <= MAX_ATTRIBUTION_LENGTH);
    const fields = attributionAirtableFields(stored);
    for (const value of Object.values(fields)) {
      assert.ok(value.length <= MAX_ATTRIBUTION_LENGTH);
      assert.equal(value.includes("\n"), false);
    }
  });
});

describe("airtableRejectedAttribution", () => {
  test("matches only attribution-column 422s", () => {
    assert.equal(
      airtableRejectedAttribution(422, 'Unknown field name: "Traffic Source"'),
      true,
    );
    assert.equal(
      airtableRejectedAttribution(
        422,
        JSON.stringify({ error: { type: "UNKNOWN_FIELD_NAME", message: 'Unknown field name: "Source Page"' } }),
      ),
      true,
    );
    assert.equal(
      airtableRejectedAttribution(422, 'Field "Click ID" cannot accept the provided value'),
      true,
    );
    assert.equal(airtableRejectedAttribution(422, 'Field "Phone" cannot accept the provided value'), false);
    assert.equal(airtableRejectedAttribution(500, 'Unknown field name: "Referrer"'), false);
    assert.equal(airtableRejectedAttribution(422, ""), false);
  });
});

const lead: LeadRecord = {
  name: "Test User",
  email: "test@example.com",
  phone: "555-0100",
  state: "Ohio",
  vaccineType: "Flu shot or nasal spray (seasonal flu)",
  injuryType: "SIRVA",
  injuryDate: "",
  description: "Shoulder pain",
  consent: true,
};

describe("earlyCaptureScript", () => {
  function run(href: string, referrer: string, storage: Map<string, string>) {
    const url = new URL(href);
    const context = vm.createContext({
      location: { pathname: url.pathname, search: url.search },
      document: { referrer },
      sessionStorage: {
        getItem(key: string) {
          return storage.has(key) ? (storage.get(key) ?? null) : null;
        },
        setItem(key: string, value: string) {
          storage.set(key, value);
        },
      },
    });
    vm.runInContext(earlyCaptureScript(), context);
    const raw = storage.get(ATTRIBUTION_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredAttribution) : null;
  }

  test("keeps the first landing URL across a later full page load, including /intake", () => {
    const storage = new Map<string, string>();
    const first = run(
      "https://www.vaccineinjuries.org/blog/shingles-vaccine-vicp-coverage?utm_source=google&utm_medium=organic",
      "https://www.google.com/",
      storage,
    );
    assert.deepEqual(first, {
      landingPage: "/blog/shingles-vaccine-vicp-coverage?utm_source=google&utm_medium=organic",
      referrer: "https://www.google.com/",
      sourcePage: "/blog/shingles-vaccine-vicp-coverage",
    });

    const faq = run("https://www.vaccineinjuries.org/faq", "https://www.vaccineinjuries.org/blog/shingles-vaccine-vicp-coverage", storage);
    assert.equal(faq?.landingPage, first?.landingPage);
    assert.equal(faq?.referrer, "https://www.google.com/");
    assert.equal(faq?.sourcePage, "/faq");

    const intake = run("https://www.vaccineinjuries.org/intake", "https://www.vaccineinjuries.org/faq", storage);
    assert.equal(intake?.sourcePage, "/faq");
    assert.equal(intake?.landingPage, first?.landingPage);
    assert.equal(intake?.referrer, "https://www.google.com/");
  });

  test("direct /intake records the form URL and no source page", () => {
    const stored = run("https://www.vaccineinjuries.org/intake?gclid=G1", "", new Map());
    assert.deepEqual(stored, {
      landingPage: "/intake?gclid=G1",
      referrer: "",
      sourcePage: "",
    });
  });
});

describe("browser session capture", { concurrency: 1 }, () => {
  const globals = globalThis as typeof globalThis & {
    window?: unknown;
    document?: unknown;
  };
  const priorWindow = globals.window;
  const priorDocument = globals.document;

  afterEach(() => {
    if (priorWindow === undefined) delete globals.window;
    else globals.window = priorWindow;
    if (priorDocument === undefined) delete globals.document;
    else globals.document = priorDocument;
  });

  function installBrowser(href: string, referrer = "", storage: "session" | "blocked" = "session") {
    const store = new Map<string, string>();
    const url = new URL(href);
    let cookie = "";
    const location = {
      pathname: url.pathname,
      search: url.search,
      hostname: url.hostname,
      protocol: url.protocol,
    };
    const sessionStorage = {
      getItem(key: string) {
        if (storage === "blocked") throw new Error("sessionStorage blocked");
        return store.has(key) ? (store.get(key) ?? null) : null;
      },
      setItem(key: string, value: string) {
        if (storage === "blocked") throw new Error("sessionStorage blocked");
        store.set(key, value);
      },
    };
    const documentState = { referrer };
    Object.defineProperty(globalThis, "window", {
      configurable: true,
      value: { location, sessionStorage },
    });
    Object.defineProperty(globalThis, "document", {
      configurable: true,
      value: {
        get referrer() {
          return documentState.referrer;
        },
        set referrer(value: string) {
          documentState.referrer = value;
        },
        get cookie() {
          return cookie;
        },
        set cookie(value: string) {
          cookie = value.split(";")[0] ?? value;
        },
      },
    });
    return {
      store,
      go(nextHref: string, nextReferrer = referrer) {
        const next = new URL(nextHref);
        location.pathname = next.pathname;
        location.search = next.search;
        documentState.referrer = nextReferrer;
      },
    };
  }

  test("stores first touch in sessionStorage and keeps the page before intake", () => {
    const browser = installBrowser(
      "https://www.vaccineinjuries.org/blog/shingles-vaccine-vicp-coverage?utm_source=google&utm_medium=organic",
      "https://www.google.com/search?q=shingles+vaccine",
    );
    recordVisit("/blog/shingles-vaccine-vicp-coverage");
    browser.go("https://www.vaccineinjuries.org/faq", "https://www.vaccineinjuries.org/blog/shingles-vaccine-vicp-coverage");
    recordVisit("/faq");
    browser.go("https://www.vaccineinjuries.org/intake", "https://www.vaccineinjuries.org/faq");

    const payload = getAttributionForSubmit();
    assert.deepEqual(payload, {
      landingPage: "/blog/shingles-vaccine-vicp-coverage?utm_source=google&utm_medium=organic",
      referrer: "https://www.google.com/search?q=shingles+vaccine",
      sourcePage: "/faq",
    });
    assert.equal(browser.store.size, 1);
  });

  test("a direct landing on /intake still produces a payload", () => {
    installBrowser("https://www.vaccineinjuries.org/intake?msclkid=MS123", "");
    const payload = getAttributionForSubmit();
    assert.deepEqual(payload, {
      landingPage: "/intake?msclkid=MS123",
      referrer: "",
      sourcePage: "",
    });
  });

  test("falls back to a session cookie when sessionStorage throws", () => {
    installBrowser("https://preview.vercel.app/blog/post?gclid=G1", "https://chatgpt.com/", "blocked");
    const payload = getAttributionForSubmit();
    assert.deepEqual(payload, {
      landingPage: "/blog/post?gclid=G1",
      referrer: "https://chatgpt.com/",
      sourcePage: "/blog/post",
    });
  });

  test("corrupt storage does not throw", () => {
    const browser = installBrowser("https://www.vaccineinjuries.org/intake", "https://www.bing.com/");
    browser.store.set("vi_attribution_v1", "{not json");
    assert.doesNotThrow(() => {
      const payload = getAttributionForSubmit();
      assert.equal(payload?.landingPage, "/intake");
      assert.equal(payload?.referrer, "https://www.bing.com/");
      assert.equal(payload?.sourcePage, "");
    });
  });
});

describe("createLead", { concurrency: 1 }, () => {
  const originalFetch = globalThis.fetch;
  const originalEnv = {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    AIRTABLE_TABLE_NAME: process.env.AIRTABLE_TABLE_NAME,
  };
  const warnings: unknown[][] = [];
  const originalWarn = console.warn;

  afterEach(() => {
    globalThis.fetch = originalFetch;
    for (const key of ["AIRTABLE_API_KEY", "AIRTABLE_BASE_ID", "AIRTABLE_TABLE_NAME"] as const) {
      const value = originalEnv[key];
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
    console.warn = originalWarn;
    warnings.length = 0;
  });

  function useFakeAirtable() {
    process.env.AIRTABLE_API_KEY = "pat_test_key";
    process.env.AIRTABLE_BASE_ID = "appTestBaseId00001";
    process.env.AIRTABLE_TABLE_NAME = "Leads";
    console.warn = (...args: unknown[]) => {
      warnings.push(args);
    };
  }

  test("writes attribution beside the existing lead fields and does not call the network when unconfigured", async () => {
    delete process.env.AIRTABLE_API_KEY;
    delete process.env.AIRTABLE_BASE_ID;
    let called = false;
    globalThis.fetch = async () => {
      called = true;
      throw new Error("fetch should not run");
    };

    await assert.rejects(
      createLead({ ...lead, attribution: { landingPage: "/", referrer: "", sourcePage: "/" } }),
      /Missing Airtable configuration/,
    );
    assert.equal(called, false);
  });

  test("sends the six attribution columns with the lead", async () => {
    useFakeAirtable();
    const bodies: { fields: Record<string, unknown> }[] = [];
    globalThis.fetch = async (input, init) => {
      const url = String(input);
      assert.match(url, /\/appTestBaseId00001\/Leads$/);
      assert.equal(new Headers(init?.headers).get("Authorization"), "Bearer pat_test_key");
      bodies.push(JSON.parse(String(init?.body)));
      return new Response(JSON.stringify({ id: "recTEST" }), { status: 200 });
    };

    await createLead({
      ...lead,
      injuryDate: "2024-01",
      attribution: {
        landingPage: "/blog/post?utm_source=google&utm_medium=cpc&utm_campaign=vicp&gclid=G123",
        referrer: "https://www.google.com/",
        sourcePage: "/blog/post",
      },
    });

    assert.equal(bodies.length, 1);
    assert.deepEqual(bodies[0].fields, {
      Name: "Test User",
      Email: "test@example.com",
      Phone: "555-0100",
      State: "Ohio",
      "Vaccine Type": "Flu shot or nasal spray (seasonal flu)",
      "Injury Type": "SIRVA",
      "Injury Date": "2024-01",
      Description: "Shoulder pain",
      Consent: true,
      Status: "New",
      "Source Page": "/blog/post",
      "Landing Page": "/blog/post?utm_source=google&utm_medium=cpc&utm_campaign=vicp&gclid=G123",
      Referrer: "https://www.google.com/",
      "Traffic Source": "google / cpc",
      "UTM Campaign": "vicp",
      "Click ID": "gclid:G123",
    });
  });

  test("a lead with no attribution matches the previous field set", async () => {
    useFakeAirtable();
    const bodies: { fields: Record<string, unknown> }[] = [];
    globalThis.fetch = async (_input, init) => {
      bodies.push(JSON.parse(String(init?.body)));
      return new Response("{}", { status: 200 });
    };

    await createLead(lead);
    assert.equal(bodies.length, 1);
    assert.equal(bodies[0].fields["Injury Date"], undefined);
    assert.equal(bodies[0].fields.Status, "New");
    assert.equal(bodies[0].fields["Traffic Source"], undefined);
    assert.equal(bodies[0].fields["Source Page"], undefined);
  });

  test("retries once without attribution when Airtable rejects those columns", async () => {
    useFakeAirtable();
    const bodies: { fields: Record<string, unknown> }[] = [];
    globalThis.fetch = async (_input, init) => {
      bodies.push(JSON.parse(String(init?.body)));
      if (bodies.length === 1) {
        return new Response(JSON.stringify({ error: { type: "UNKNOWN_FIELD_NAME", message: 'Unknown field name: "Source Page"' } }), {
          status: 422,
        });
      }
      return new Response(JSON.stringify({ id: "recTEST" }), { status: 200 });
    };

    await createLead({
      ...lead,
      attribution: { landingPage: "/", referrer: "https://chatgpt.com/", sourcePage: "/faq" },
    });

    assert.equal(bodies.length, 2);
    assert.equal(bodies[0].fields["Traffic Source"], "chatgpt.com / referral");
    assert.equal(bodies[1].fields["Traffic Source"], undefined);
    assert.equal(bodies[1].fields.Name, "Test User");
    assert.equal(bodies[1].fields.Status, "New");
    assert.equal(warnings.length, 1);
  });

  test("does not retry an unrelated Airtable error", async () => {
    useFakeAirtable();
    let calls = 0;
    globalThis.fetch = async () => {
      calls += 1;
      return new Response(JSON.stringify({ error: { message: 'Field "Phone" cannot accept the provided value' } }), {
        status: 422,
      });
    };

    await assert.rejects(
      createLead({
        ...lead,
        attribution: { landingPage: "/", referrer: "", sourcePage: "/" },
      }),
      /Airtable API error 422/,
    );
    assert.equal(calls, 1);
    assert.equal(warnings.length, 0);
  });
});
