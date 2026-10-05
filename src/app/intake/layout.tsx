import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Your Eligibility",
  description:
    "Start a free, confidential vaccine injury eligibility review. Tell us about your situation and we will follow up.",
  alternates: { canonical: "/intake" },
};

export default function IntakeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
