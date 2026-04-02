import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
    default: "Vaccine Injury Claims — Find Out If You Qualify",
  },
  description:
    "If you or a loved one experienced a serious reaction after a vaccine, you may have a legal claim. Learn about your options and get a free case review.",
  metadataBase: new URL("https://vaccineinjuries.org"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-GCL97RXRR0" />
    </html>
  );
}
