import type { Source } from "@/lib/sources";

/** A plain list of official sources, each opening in a new tab. */
export default function SourcesList({
  sources,
  heading = "Sources",
  id = "sources",
  intro,
}: {
  sources: Source[];
  heading?: string;
  id?: string;
  intro?: string;
}) {
  if (!sources.length) return null;
  return (
    <section aria-labelledby={`${id}-heading`} id={id}>
      <h2 id={`${id}-heading`} className="text-xl font-bold text-gray-900 mb-3">
        {heading}
      </h2>
      {intro && <p className="text-gray-600 text-sm mb-3">{intro}</p>}
      <ul className="list-disc pl-5 space-y-1 text-sm">
        {sources.map((s) => (
          <li key={s.url}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
