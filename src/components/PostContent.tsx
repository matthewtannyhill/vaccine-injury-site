import Link from "next/link";
import type { ReactNode } from "react";
import { inlineMarkupPattern, splitRow, toGroups } from "@/lib/markdown-blocks";

/**
 * Renders the lightweight markdown used in blog posts and hub pages:
 * ##/### headings, "- " and "1. " lists, simple pipe tables, paragraphs,
 * plus inline [text](url) links and **bold**.
 */

export function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const match of text.matchAll(inlineMarkupPattern())) {
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
