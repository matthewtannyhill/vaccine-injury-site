import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Get Connected With an Attorney",
  ogTitle: "Get Connected With a Vaccine Injury Attorney | VaccineInjuries.org",
  description:
    "Submit your information free and confidentially. Tell us about your situation and we can connect you with an independent attorney.",
  path: "/intake",
});

export default function IntakeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
