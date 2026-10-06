import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Check Your Eligibility",
  ogTitle: "Free Vaccine Injury Case Review | VaccineInjuries.org",
  description:
    "Start a free, confidential vaccine injury eligibility review. Tell us about your situation and we will follow up.",
  path: "/intake",
});

export default function IntakeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
