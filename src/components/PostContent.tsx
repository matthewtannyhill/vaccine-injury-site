import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Renders the lightweight markdown used in blog posts and hub pages:
 * ##/### headings, "- " and "1. " lists, simple pipe tables, paragraphs,
 * plus inline [text](url) links and **bold**.
 */

const INLINE = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

export function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const match of text.matchAll(INLINE)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));
    const [, label, href, bold] = match;
    if (bold !== undefined) {
      nodes.push(<strong key={key++}>{bold}</strong>);
    } else if (href.startsWith("/")) {
      nodes.push(
        <Link key={key++} href={href} className="text-blue-700 underline hover:text-blue-800">
          {label}
        </Link>
      );
    } else {
      nodes.push(
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline hover:text-blue-800"
        >
          {label}
        </a>
      );
    }
    last = index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function splitRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

type Group =
  | { kind: "h2" | "h3" | "p"; text: string }
  | { kind: "ul" | "ol"; items: string[] }
  | { kind: "table"; lines: string[] };

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
function toGroups(content: string): Group[] {
  const groups: Group[] = [];
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

export default function PostContent({ content }: { content: string }) {
  const groups = toGroups(content);

  return (
    <div className="text-gray-700 leading-relaxed space-y-4">
      {groups.map((group, i) => {
        switch (group.kind) {
          case "h2":
            return (
              <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-3">
                {group.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="text-xl font-semibold text-gray-900 mt-6 mb-2">
                {group.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc pl-5 space-y-1">
                {group.items.map((item, j) => (
                  <li key={j}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal pl-5 space-y-1">
                {group.items.map((item, j) => (
                  <li key={j}>{renderInline(item)}</li>
                ))}
              </ol>
            );
          case "table": {
            const [header, , ...rows] = group.lines;
            return (
              <div key={i} className="overflow-x-auto">
                <table className="w-full text-left border border-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      {splitRow(header).map((cell, j) => (
                        <th key={j} className="px-4 py-2 font-semibold text-gray-900 border-b border-gray-200">
                          {renderInline(cell)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, r) => (
                      <tr key={r} className="border-b border-gray-100">
                        {splitRow(row).map((cell, j) => (
                          <td key={j} className="px-4 py-2">
                            {renderInline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
          default:
            return <p key={i}>{renderInline(group.text)}</p>;
        }
      })}
    </div>
  );
}
