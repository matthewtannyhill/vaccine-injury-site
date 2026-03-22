"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-semibold text-blue-900 tracking-tight">
            VaccineClaimHelp
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/how-it-works" className="hover:text-blue-900 transition-colors">How It Works</Link>
            <Link href="/faq" className="hover:text-blue-900 transition-colors">FAQ</Link>
            <Link href="/blog" className="hover:text-blue-900 transition-colors">Resources</Link>
            <Link
              href="/intake"
              className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors"
            >
              Check My Eligibility
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-current mb-1" />
            <div className="w-5 h-0.5 bg-current mb-1" />
            <div className="w-5 h-0.5 bg-current" />
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 text-sm font-medium text-gray-600 border-t border-gray-100 pt-4">
            <Link href="/how-it-works" onClick={() => setOpen(false)}>How It Works</Link>
            <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
            <Link href="/blog" onClick={() => setOpen(false)}>Resources</Link>
            <Link
              href="/intake"
              onClick={() => setOpen(false)}
              className="bg-blue-700 text-white px-4 py-2 rounded-md text-center hover:bg-blue-800 transition-colors"
            >
              Check My Eligibility
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
