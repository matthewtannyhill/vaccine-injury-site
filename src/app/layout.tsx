import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { Geist } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | VaccineInjuries.org",
    default: "Vaccine Injury Claims — Get Connected With an Attorney",
  },
  description:
    "If you or a loved one experienced a serious reaction after a vaccine, you may have a legal claim. Learn about your options and get connected with an independent attorney — submitting is free.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-G5F3JXK193" />
      <Analytics />
    </html>
  );
}
