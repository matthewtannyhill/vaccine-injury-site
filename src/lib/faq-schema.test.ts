import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { blogPosts } from "@/content/blog/posts";
import { allFaqItems, homeFaqs } from "@/content/faq";
import { injuryHubs } from "@/content/injuries";
import { blogPageJsonLd } from "@/lib/blog-jsonld";
import { extractFaqItems } from "@/lib/faq-extract";
import { faqPageJsonLd, type FaqItem } from "@/lib/seo";
import sitemap from "@/app/sitemap";
import { indexablePages } from "@/lib/site-urls";
import { SITE_URL } from "@/lib/site";

type JsonLd = {
  "@context"?: string;
  "@type"?: string;
  headline?: string;
  datePublished?: string;
  dateModified?: string;
  mainEntity?: QuestionNode[];
  url?: string;
};

type QuestionNode = {
  "@type"?: string;
  name?: string;
  acceptedAnswer?: { "@type"?: string; text?: string };
};

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const MARKDOWN_LEFTOVER = /\[[^\]]+\]\([^)]+\)|\*\*|<\/?[a-zA-Z][^>]*>/;

function nodesOf(post: (typeof blogPosts)[number]): JsonLd[] {
  return blogPageJsonLd(post) as JsonLd[];
}

function faqNode(nodes: JsonLd[]): JsonLd | undefined {
  return nodes.find((node) => node["@type"] === "FAQPage");
}

function articleNode(nodes: JsonLd[]): JsonLd {
  const article = nodes.find((node) => node["@type"] === "BlogPosting");
  assert.ok(article, "BlogPosting JSON-LD missing");
  return article;
}

function assertFaqPageMatches(schema: JsonLd, items: FaqItem[], path: string) {
  assert.equal(schema["@context"], "https://schema.org");
  assert.equal(schema["@type"], "FAQPage");
  assert.equal(schema.url, path.startsWith("http") ? path : `${SITE_URL}${path === "/" ? "" : path}`);
  assert.ok(schema.mainEntity && schema.mainEntity.length > 0);
  assert.equal(schema.mainEntity.length, items.length);
  schema.mainEntity.forEach((entity, index) => {
    const item = items[index];
    assert.ok(item);
    assert.equal(entity["@type"], "Question");
    assert.equal(entity.name, item.q);
    assert.equal(entity.acceptedAnswer?.["@type"], "Answer");
    assert.equal(entity.acceptedAnswer?.text, item.a);
    assert.equal(entity.acceptedAnswer.text, entity.acceptedAnswer.text.trim());
    assert.ok(entity.acceptedAnswer.text.length > 0);
    assert.doesNotMatch(entity.name, MARKDOWN_LEFTOVER);
    assert.doesNotMatch(entity.acceptedAnswer.text, MARKDOWN_LEFTOVER);
  });
}

describe("FAQ extraction", () => {
  test("turns question headings into plain-text pairs and skips unanswered prompts", () => {
    const content = `
## What is the VICP?

The [VICP](https://www.hrsa.gov/vaccine-compensation) is a **federal** program.

### Covered vaccines

- Flu
- [MMR](/blog/example)

## Questions to ask a lawyer

- Have you handled a case like mine?
- How are fees paid?

## Who can file?

A parent or guardian can file.
    `.trim();

    const faqs = extractFaqItems(content);
    assert.deepEqual(
      faqs.map((item) => item.q),
      ["What is the VICP?", "Who can file?"],
    );
    assert.equal(
      faqs[0]?.a,
      "The VICP is a federal program.\n\nCovered vaccines\n\nFlu\nMMR",
    );
    assert.equal(faqs[1]?.a, "A parent or guardian can file.");
    assert.ok(!faqs.some((item) => item.q.includes("handled a case")));
  });

  test("gives a nested question its own answer instead of folding it into the parent", () => {
    const content = `
## How does filing work?

Start with the records.

### What is the deadline?

Generally 36 months.

### Where do I file?

In the U.S. Court of Federal Claims.
    `.trim();

    const faqs = extractFaqItems(content);
    assert.deepEqual(
      faqs.map((item) => item.q),
      ["How does filing work?", "What is the deadline?", "Where do I file?"],
    );
    assert.equal(faqs[0]?.a, "Start with the records.");
    assert.equal(faqs[1]?.a, "Generally 36 months.");
    assert.equal(faqs[2]?.a, "In the U.S. Court of Federal Claims.");
    assert.ok(!faqs[0]?.a.includes("36 months"));
  });

  test("returns nothing when the page has no visible Q&A", () => {
    assert.deepEqual(extractFaqItems("## Overview\n\nThis is not a question.\n\n## Next steps\n\nRead more."), []);
    assert.deepEqual(extractFaqItems("## What is this?\n\n## And this?"), []);
  });
});

describe("blog FAQPage JSON-LD", () => {
  test("each post with a question section emits a FAQPage whose questions match", () => {
    let withFaq = 0;
    const withoutFaq: string[] = [];

    for (const post of blogPosts) {
      const items = extractFaqItems(post.content);
      const nodes = nodesOf(post);
      const headingQuestions = [...post.content.matchAll(/^(#{2,3}) +(.+)$/gm)]
        .map((match) => match[2]?.trim() ?? "")
        .filter((text) => text.endsWith("?"));

      if (items.length === 0) {
        withoutFaq.push(post.slug);
        assert.equal(faqNode(nodes), undefined, post.slug);
        assert.deepEqual(headingQuestions, [], `${post.slug} has question headings but no FAQ items`);
        continue;
      }

      withFaq += 1;
      for (const item of items) {
        assert.ok(headingQuestions.includes(item.q), `${post.slug} invented question: ${item.q}`);
        assert.ok(post.content.includes(item.q), post.slug);
      }
      // Every question heading is represented, except a heading with no body of its own.
      for (const question of headingQuestions) {
        const extracted = items.some((item) => item.q === question);
        if (!extracted) {
          const pattern = new RegExp(`^#{2,3} +${question.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`, "m");
          assert.match(post.content, pattern, `${post.slug} missing heading for skipped question`);
        }
      }

      const schema = faqNode(nodes);
      assert.ok(schema, `${post.slug} has FAQ content but no FAQPage`);
      assertFaqPageMatches(schema, items, `/blog/${post.slug}`);
    }

    assert.ok(withFaq > 0, "expected some posts to gain FAQPage");
    assert.ok(withoutFaq.length < blogPosts.length);
  });

  test("the attorney-questions post does not mark unanswered prompts as FAQs", () => {
    const post = blogPosts.find((item) => item.slug === "how-to-find-a-vaccine-injury-attorney");
    assert.ok(post);
    const questions = extractFaqItems(post.content).map((item) => item.q);
    assert.ok(!questions.includes("Have you handled cases like mine before?"));
    assert.ok(!questions.some((question) => question.startsWith("Have you handled")));
  });
});

describe("BlogPosting dates", () => {
  test("datePublished and dateModified come from the post, not the build clock", () => {
    for (const post of blogPosts) {
      const article = articleNode(nodesOf(post));
      assert.equal(article.headline, post.title);
      assert.equal(article.datePublished, post.datePublished);
      assert.equal(article.dateModified, post.lastReviewed);
      assert.match(article.datePublished, ISO_DATE);
      assert.match(article.dateModified, ISO_DATE);
      assert.ok(article.dateModified >= article.datePublished, post.slug);
      assert.equal(article.datePublished.includes("T"), false);
      assert.equal(article.dateModified.includes("T"), false);
    }
  });
});

describe("SIRVA hub first-screen answer and FAQs", () => {
  test("keeps the title, meta, slug, and H1, and emits six FAQPage questions in order", () => {
    const hub = injuryHubs.find((item) => item.slug === "sirva");
    assert.ok(hub);
    assert.equal(hub.slug, "sirva");
    assert.equal(hub.name, "SIRVA (Shoulder Injury Related to Vaccine Administration)");
    assert.equal(hub.seoTitle, "SIRVA Symptoms: Shoulder Pain After a Vaccine & VICP Claims");
    assert.equal(
      hub.description,
      "What is SIRVA? Learn the symptoms of shoulder pain and stiffness after a shot, the Table's 48-hour rule, the 6-month severity rule, and deadlines.",
    );
    assert.match(hub.summary, /^SIRVA \(shoulder injury related to vaccine administration\) is shoulder pain/);
    assert.match(hub.summary, /within 48 hours of the shot\./);
    assert.match(hub.summary, /generally within three years after the first symptom\.$/);
    assert.deepEqual(
      hub.faqs.map((item) => item.q),
      [
        "What is SIRVA?",
        "Is a sore arm after a shot the same as SIRVA?",
        "Which vaccines list SIRVA on the Vaccine Injury Table?",
        "Does SIRVA have to last a certain amount of time to qualify?",
        "What if I had shoulder problems before the vaccine?",
        "How long do I have to file a SIRVA claim with the VICP?",
      ],
    );
    assert.match(hub.faqs[0]?.a ?? "", /musculoskeletal injury, not a nerve injury\.$/);
    assert.match(
      hub.faqs[5]?.a ?? "",
      /within three years after the first symptom or manifestation of onset/,
    );
    assert.equal(hub.lastReviewed, "2026-11-12");
    assertFaqPageMatches(faqPageJsonLd(hub.faqs, "/injuries/sirva") as JsonLd, hub.faqs, "/injuries/sirva");
  });
});

describe("existing FAQ pages", () => {
  test("homepage, /faq, and injury guides already build FAQPage from the visible items", () => {
    assertFaqPageMatches(faqPageJsonLd(homeFaqs, "/") as JsonLd, homeFaqs, "/");
    assertFaqPageMatches(faqPageJsonLd(allFaqItems, "/faq") as JsonLd, allFaqItems, "/faq");
    for (const hub of injuryHubs) {
      assert.ok(hub.faqs.length > 0, hub.slug);
      assertFaqPageMatches(
        faqPageJsonLd(hub.faqs, `/injuries/${hub.slug}`) as JsonLd,
        hub.faqs,
        `/injuries/${hub.slug}`,
      );
    }
  });
});

describe("sitemap paths", () => {
  test("the sitemap lists the same canonical URLs as the indexable path list", () => {
    const pages = indexablePages();
    const urls = sitemap().map((entry) => entry.url);
    assert.deepEqual(
      urls,
      pages.map((page) => (page.path === "/" ? SITE_URL : `${SITE_URL}${page.path}`)),
    );
    assert.equal(urls.some((url) => url.includes("thank-you")), false);
    assert.equal(pages.filter((page) => page.path.startsWith("/blog/")).length, blogPosts.length);
    assert.equal(pages.filter((page) => page.path.startsWith("/injuries/")).length, injuryHubs.length);
  });
});
