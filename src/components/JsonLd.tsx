/**
 * Renders schema.org structured data as a native <script type="application/ld+json">.
 * `<` is escaped to prevent breaking out of the script tag (see Next.js JSON-LD guide).
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
