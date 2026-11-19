import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { blogPosts } from "@/content/blog/posts";
import {
  GLOSSARY_PATH,
  GLOSSARY_REVIEWED,
  glossaryDefinitionText,
  glossaryTerms,
  glossaryTermsSorted,
} from "@/content/glossary";
import { injuryHubs } from "@/content/injuries";
import {
  VACCINE_TABLE_PATH,
  VACCINE_TABLE_REVIEWED,
  flatVaccineTableRows,
  tableFaqs,
  vaccineTableCategories,
} from "@/content/vaccine-injury-table";
import sitemap from "@/app/sitemap";
import { definedTermSetJsonLd, faqPageJsonLd, referenceArticleJsonLd } from "@/lib/seo";
import { indexablePages } from "@/lib/site-urls";
import { SITE_URL } from "@/lib/site";

const WINDOWS = new Set([
  "≤4 hours.",
  "≤48 hours.",
  "≤1 hour.",
  "≤72 hours.",
  "≤12 months.",
  "≤30 days.",
  "≤6 months.",
  "Not applicable.",
  "2-28 days (not less than 2 days and not more than 28 days).",
  "5-15 days (not less than 5 days and not more than 15 days).",
  "7-42 days (not less than 7 days and not more than 42 days).",
  "7-30 days (not less than 7 days and not more than 30 days).",
  "1-21 days (not less than 1 day and not more than 21 days).",
  "3-42 days (not less than 3 days and not more than 42 days).",
]);

/** injury|qualifier|window for each category, in Table order. Locked to the 2022 eCFR text. */
const EXPECTED: Record<string, string[]> = {
  tetanus: [
    "A. Anaphylaxis||≤4 hours.",
    "B. Brachial Neuritis||2-28 days (not less than 2 days and not more than 28 days).",
    "C. Shoulder Injury Related to Vaccine Administration||≤48 hours.",
    "D. Vasovagal syncope||≤1 hour.",
  ],
  pertussis: [
    "A. Anaphylaxis||≤4 hours.",
    "B. Encephalopathy or encephalitis||≤72 hours.",
    "C. Shoulder Injury Related to Vaccine Administration||≤48 hours.",
    "D. Vasovagal syncope||≤1 hour.",
  ],
  mmr: [
    "A. Anaphylaxis||≤4 hours.",
    "B. Encephalopathy or encephalitis||5-15 days (not less than 5 days and not more than 15 days).",
    "C. Shoulder Injury Related to Vaccine Administration||≤48 hours.",
    "D. Vasovagal syncope||≤1 hour.",
  ],
  rubella: ["A. Chronic arthritis||7-42 days (not less than 7 days and not more than 42 days)."],
  measles: [
    "A. Thrombocytopenic purpura||7-30 days (not less than 7 days and not more than 30 days).",
    "B. Vaccine-Strain Measles Viral Disease in an immunodeficient recipient|Vaccine-strain virus identified|Not applicable.",
    "B. Vaccine-Strain Measles Viral Disease in an immunodeficient recipient|If strain determination is not done or if laboratory testing is inconclusive|≤12 months.",
  ],
  opv: [
    "A. Paralytic Polio|in a non-immunodeficient recipient|≤30 days.",
    "A. Paralytic Polio|in an immunodeficient recipient|≤6 months.",
    "A. Paralytic Polio|in a vaccine associated community case|Not applicable.",
    "B. Vaccine-Strain Polio Viral Infection|in a non-immunodeficient recipient|≤30 days.",
    "B. Vaccine-Strain Polio Viral Infection|in an immunodeficient recipient|≤6 months.",
    "B. Vaccine-Strain Polio Viral Infection|in a vaccine associated community case|Not applicable.",
  ],
  ipv: [
    "A. Anaphylaxis||≤4 hours.",
    "B. Shoulder Injury Related to Vaccine Administration||≤48 hours.",
    "C. Vasovagal syncope||≤1 hour.",
  ],
  "hepatitis-b": [
    "A. Anaphylaxis||≤4 hours.",
    "B. Shoulder Injury Related to Vaccine Administration||≤48 hours.",
    "C. Vasovagal syncope||≤1 hour.",
  ],
  hib: [
    "A. Shoulder Injury Related to Vaccine Administration||≤48 hours.",
    "B. Vasovagal syncope||≤1 hour.",
  ],
  varicella: [
    "A. Anaphylaxis||≤4 hours.",
    "B. Disseminated varicella vaccine-strain viral disease|Vaccine-strain virus identified|Not applicable.",
    "B. Disseminated varicella vaccine-strain viral disease|If strain determination is not done or if laboratory testing is inconclusive|7-42 days (not less than 7 days and not more than 42 days).",
    "C. Varicella vaccine-strain viral reactivation||Not applicable.",
    "D. Shoulder Injury Related to Vaccine Administration||≤48 hours.",
    "E. Vasovagal syncope||≤1 hour.",
  ],
  rotavirus: ["A. Intussusception||1-21 days (not less than 1 day and not more than 21 days)."],
  pneumococcal: [
    "A. Shoulder Injury Related to Vaccine Administration||≤48 hours.",
    "B. Vasovagal syncope||≤1 hour.",
  ],
  "hepatitis-a": [
    "A. Shoulder Injury Related to Vaccine Administration||≤48 hours.",
    "B. Vasovagal syncope||≤1 hour.",
  ],
  influenza: [
    "A. Anaphylaxis||≤4 hours.",
    "B. Shoulder Injury Related to Vaccine Administration||≤48 hours.",
    "C. Vasovagal syncope||≤1 hour.",
    "D. Guillain-Barré Syndrome||3-42 days (not less than 3 days and not more than 42 days).",
  ],
  meningococcal: [
    "A. Anaphylaxis||≤4 hours.",
    "B. Shoulder Injury Related to Vaccine Administration||≤48 hours.",
    "C. Vasovagal syncope||≤1 hour.",
  ],
  hpv: [
    "A. Anaphylaxis||≤4 hours.",
    "B. Shoulder Injury Related to Vaccine Administration||≤48 hours.",
    "C. Vasovagal syncope||≤1 hour.",
  ],
  "new-vaccine": [
    "A. Shoulder Injury Related to Vaccine Administration||≤48 hours.",
    "B. Vasovagal syncope||≤1 hour.",
  ],
};

function line(injury: string, qualifier: string, window: string) {
  return `${injury}|${qualifier}|${window}`;
}

describe("Vaccine Injury Table transcription", () => {
  test("copies every eCFR category, injury, and onset window", () => {
    assert.deepEqual(
      vaccineTableCategories.map((category) => category.id),
      Object.keys(EXPECTED),
    );
    const flat = flatVaccineTableRows();
    assert.equal(flat.length, 53);
    for (const category of vaccineTableCategories) {
      const expected = EXPECTED[category.id];
      assert.ok(expected, category.id);
      assert.deepEqual(
        category.rows.map((entry) => line(entry.injury, entry.qualifier ?? "", entry.window)),
        expected,
        category.id,
      );
      for (const entry of category.rows) {
        assert.ok(WINDOWS.has(entry.window), `${category.id} ${entry.injury}: ${entry.window}`);
      }
    }
    const fluGbs = flat.find((entry) => entry.categoryId === "influenza" && entry.injury.includes("Guillain"));
    assert.equal(fluGbs?.window, "3-42 days (not less than 3 days and not more than 42 days).");
    assert.equal(flat.filter((entry) => entry.injury.includes("Guillain")).length, 1);
    assert.equal(
      flat.filter((entry) => entry.injury.startsWith("C. Shoulder") || entry.injury.startsWith("B. Shoulder") || entry.injury.startsWith("A. Shoulder") || entry.injury.startsWith("D. Shoulder")).every((entry) => entry.window === "≤48 hours."),
      true,
    );
    assert.equal(flat.some((entry) => entry.categoryId === "rotavirus" && entry.injury.includes("Shoulder")), false);
    assert.equal(flat.some((entry) => entry.categoryId === "hib" && entry.injury.includes("Anaphylaxis")), false);
  });
});

describe("glossary", () => {
  test("stays in the requested size, with unique anchors and statutory dollar amounts", () => {
    assert.ok(glossaryTerms.length >= 25 && glossaryTerms.length <= 40);
    const ids = glossaryTerms.flatMap((term) => [term.id, ...(term.aliasIds ?? [])]);
    assert.equal(new Set(ids).size, ids.length);
    for (const id of ids) assert.match(id, /^[a-z0-9-]+$/);

    const pain = glossaryTerms.find((term) => term.id === "pain-and-suffering-cap");
    const death = glossaryTerms.find((term) => term.id === "death-benefit");
    assert.ok(pain && death);
    assert.match(glossaryDefinitionText(pain), /not to exceed \$250,000/);
    assert.match(glossaryDefinitionText(death), /an award of \$250,000/);
    const dollars = glossaryTerms.flatMap((term) => glossaryDefinitionText(term).match(/\$[\d,]+/g) ?? []);
    assert.deepEqual([...new Set(dollars)], ["$250,000"]);
    assert.equal(glossaryTermsSorted()[0]?.name.startsWith("A"), true);
  });

  test("links each term only to a real page, and DefinedTerm text matches the visible definition", () => {
    const pages = new Set(indexablePages().map((page) => page.path));
    for (const term of glossaryTerms) {
      for (const link of term.links ?? []) {
        const path = link.href.split("#")[0] || GLOSSARY_PATH;
        assert.ok(pages.has(path), `${term.id} -> ${link.href}`);
      }
      assert.ok(term.definition.every((paragraph) => !paragraph.includes("](")));
      assert.equal(glossaryDefinitionText(term).includes("our attorneys"), false);
      assert.equal(glossaryDefinitionText(term).toLowerCase().includes("we represent"), false);
    }
    const schema = definedTermSetJsonLd(
      glossaryTermsSorted().map((term) => ({
        id: term.id,
        name: term.name,
        description: glossaryDefinitionText(term),
        alternateName: term.alternateName,
      })),
      GLOSSARY_PATH,
      "VICP and CICP glossary",
    ) as {
      "@type": string;
      hasDefinedTerm: { "@type": string; name: string; description: string; url: string }[];
    };
    assert.equal(schema["@type"], "DefinedTermSet");
    assert.equal(schema.hasDefinedTerm.length, glossaryTerms.length);
    schema.hasDefinedTerm.forEach((node, index) => {
      const term = glossaryTermsSorted()[index];
      assert.ok(term);
      assert.equal(node["@type"], "DefinedTerm");
      assert.equal(node.name, term.name);
      assert.equal(node.description, glossaryDefinitionText(term));
      assert.equal(node.url, `${SITE_URL}${GLOSSARY_PATH}#${term.id}`);
    });
  });
});

describe("reference page schema and sitemap", () => {
  test("the Table article date and FAQ text come from the page content", () => {
    const article = referenceArticleJsonLd({
      path: VACCINE_TABLE_PATH,
      headline: "Vaccine Injury Table: Onset Windows by Vaccine",
      description: "desc",
      datePublished: VACCINE_TABLE_REVIEWED,
      dateModified: VACCINE_TABLE_REVIEWED,
    }) as { "@type": string; dateModified: string; mainEntityOfPage: { "@type": string; dateModified: string } };
    assert.equal(article["@type"], "Article");
    assert.equal(article.dateModified, "2026-11-18");
    assert.equal(article.mainEntityOfPage["@type"], "WebPage");
    assert.equal(article.mainEntityOfPage.dateModified, "2026-11-18");
    assert.equal(VACCINE_TABLE_REVIEWED, "2026-11-18");
    assert.equal(GLOSSARY_REVIEWED, "2026-11-18");

    const faq = faqPageJsonLd(tableFaqs, VACCINE_TABLE_PATH) as {
      mainEntity: { name: string; acceptedAnswer: { text: string } }[];
    };
    assert.equal(faq.mainEntity.length, tableFaqs.length);
    faq.mainEntity.forEach((entity, index) => {
      assert.equal(entity.name, tableFaqs[index]?.q);
      assert.equal(entity.acceptedAnswer.text, tableFaqs[index]?.a);
    });
  });

  test("the sitemap lists both new pages with the review date and does not retitle old hubs", () => {
    const pages = indexablePages();
    for (const path of [VACCINE_TABLE_PATH, GLOSSARY_PATH]) {
      const page = pages.find((entry) => entry.path === path);
      assert.ok(page, path);
      assert.equal(page.lastModified, "2026-11-18");
    }
    const urls = sitemap().map((entry) => entry.url);
    assert.ok(urls.includes(`${SITE_URL}${VACCINE_TABLE_PATH}`));
    assert.ok(urls.includes(`${SITE_URL}${GLOSSARY_PATH}`));
    assert.equal(pages.filter((page) => page.path.startsWith("/blog/")).length, blogPosts.length);
    assert.equal(pages.filter((page) => page.path.startsWith("/injuries/")).length, injuryHubs.length);
    const sirva = injuryHubs.find((hub) => hub.slug === "sirva");
    assert.equal(sirva?.name, "SIRVA (Shoulder Injury Related to Vaccine Administration)");
    assert.equal(sirva?.lastReviewed, "2026-11-12");
  });
});
