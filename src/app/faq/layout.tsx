import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { allFaqItems } from "@/content/faq";
import { breadcrumbJsonLd, faqPageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  ogTitle: "Vaccine Injury Compensation FAQ | VaccineInjuries.org",
  description:
    "Frequently asked questions about vaccine injury compensation, eligibility, filing deadlines, and how the claims process works.",
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
