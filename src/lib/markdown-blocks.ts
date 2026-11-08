/**
 * Lightweight markdown used by blog posts and injury guides.
 * PostContent renders these blocks; FAQ extraction uses the same blocks so
 * structured-data answers stay aligned with the visible text.
 *
 * Supports ##/### headings, "- " and "1. " lists, simple pipe tables,
 * paragraphs, inline [text](url) links, and **bold**.
 */

export type MarkdownGroup =
  | { kind: "h2" | "h3" | "p"; text: string }
  | { kind: "ul" | "ol"; items: string[] }
  | { kind: "table"; lines: string[] };

/** Fresh global regex each call so lastIndex cannot leak between uses. */
export function inlineMarkupPattern(): RegExp {
  return /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
}

/**
 * Visible text of an inline markdown string: link labels (not URLs), bold
 * without asterisks, and any simple HTML tags removed.
 */
export function inlineToPlain(text: string): string {
  return text
    .replace(inlineMarkupPattern(), (_match, label: string | undefined, _href: string | undefined, bold: string | undefined) =>
      bold !== undefined ? bold : (label ?? ""),
    )
    .replace(/<\/?[a-zA-Z][^>]*>/g, "")
    .trim();
}

export function splitRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function kindOf(line: string): "h2" | "h3" | "ul" | "ol" | "table" | "p" {
  if (line.startsWith("## ")) return "h2";
  if (line.startsWith("### ")) return "h3";
  if (line.startsWith("- ")) return "ul";
  if (/^\d+\.\s/.test(line)) return "ol";
  if (line.trim().startsWith("|")) return "table";
  return "p";
}

/**
 * Splits content into blocks (blank-line separated), then groups consecutive lines of the
 * same kind, so an intro sentence followed directly by "- " items renders as a paragraph + list.
 */
export function toGroups(content: string): MarkdownGroup[] {
  const groups: MarkdownGroup[] = [];
  for (const block of content.split("\n\n")) {
    const blockStart = groups.length;
    const lines = block.split("\n").filter((l) => l.trim() !== "");
    for (const line of lines) {
      const kind = kindOf(line);
      // Only merge with the previous group if it started in this same block.
      const prev = groups.length > blockStart ? groups[groups.length - 1] : undefined;
      if (kind === "h2" || kind === "h3") {
        groups.push({ kind, text: line.replace(/^#{2,3}\s/, "") });
      } else if (kind === "ul" || kind === "ol") {
        const item = kind === "ul" ? line.replace(/^- /, "") : line.replace(/^\d+\.\s/, "");
        if (prev && prev.kind === kind) prev.items.push(item);
        else groups.push({ kind, items: [item] });
      } else if (kind === "table") {
        if (prev && prev.kind === "table") prev.lines.push(line);
        else groups.push({ kind, lines: [line] });
      } else if (prev && prev.kind === "p") {
        prev.text += ` ${line}`;
      } else {
        groups.push({ kind: "p", text: line });
      }
    }
  }
  return groups;
}

/** Plain text of one block, matching what PostContent shows (no markdown syntax). */
export function blockToPlain(group: MarkdownGroup): string {
  switch (group.kind) {
    case "h2":
    case "h3":
    case "p":
      return inlineToPlain(group.text);
    case "ul":
    case "ol":
      return group.items.map((item) => inlineToPlain(item)).filter(Boolean).join("\n");
    case "table": {
      // The renderer skips the markdown separator row (the second line).
      const lines = group.lines.filter((_, index) => index !== 1);
      return lines
        .map((line) => splitRow(line).map((cell) => inlineToPlain(cell)).filter(Boolean).join(" "))
        .filter(Boolean)
        .join("\n");
    }
  }
}
