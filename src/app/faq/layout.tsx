import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { allFaqItems } from "@/content/faq";
import { breadcrumbJsonLd, faqPageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  // Written to stand alone in search results, so it skips the " | VaccineInjuries.org" suffix.
  // Open Graph and Twitter titles use the same string (siteName still carries the brand).
  title: { absolute: "Vaccine Injury FAQ: Deadlines, Eligibility, and Costs" },
  description:
    "Answers on vaccine injury compensation: who can file, the usual 36-month VICP deadline, costs and fees, and how COVID-19 claims go through the CICP.",
  path: "/faq",
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          faqPageJsonLd(allFaqItems, "/faq"),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
