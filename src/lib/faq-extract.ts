import type { FaqItem } from "@/lib/seo";
import { blockToPlain, inlineToPlain, toGroups } from "@/lib/markdown-blocks";

/**
 * Visible question-and-answer pairs in a markdown article.
 *
 * Blog posts do not keep a separate FAQ array. A Q&A pair is a ## or ###
 * heading whose text ends with "?", plus the body under that heading until
 * the next heading of the same or higher level. A deeper heading that is
 * itself a question becomes its own pair instead of being folded into the
 * parent answer. Headings that are not questions (including "Questions to
 * ask a lawyer" lists, which are unanswered prompts) are not pairs.
 *
 * Returns nothing when the article has no such section, so callers can omit
 * FAQPage entirely.
 */
export function extractFaqItems(content: string): FaqItem[] {
  const groups = toGroups(content);
  const items: FaqItem[] = [];

  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    if (group.kind !== "h2" && group.kind !== "h3") continue;
    const level = group.kind === "h2" ? 2 : 3;
    const question = inlineToPlain(group.text);
    if (!question.endsWith("?")) continue;

    const parts: string[] = [];
    for (let j = i + 1; j < groups.length; j++) {
      const next = groups[j];
      if (next.kind === "h2" || next.kind === "h3") {
        const nextLevel = next.kind === "h2" ? 2 : 3;
        if (nextLevel <= level) break;
        if (inlineToPlain(next.text).endsWith("?")) break;
      }
      const plain = blockToPlain(next);
      if (plain) parts.push(plain);
    }

    const answer = parts.join("\n\n").trim();
    if (!answer) continue;
    items.push({ q: question, a: answer });
  }

  return items;
}
