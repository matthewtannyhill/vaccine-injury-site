import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-white font-semibold mb-2">VaccineInjuries.org</p>
            <p className="leading-relaxed">
              Clear, honest information about vaccine injury compensation programs — for people trying to understand their options.
            </p>
          </div>
          <div>
            <p className="text-white font-semibold mb-2">Resources</p>
            <ul className="space-y-1">
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/injuries" className="hover:text-white transition-colors">Injury Guides</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Articles</Link></li>
              <li><Link href="/intake" className="hover:text-white transition-colors">Check Eligibility</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-2">Legal</p>
            <ul className="space-y-1">
              <li><Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 space-y-3">
          <p className="text-xs leading-relaxed text-gray-500">
            <strong className="text-gray-400">Disclaimer:</strong> VaccineInjuries.org is an independent educational site — not a law firm or government agency.
            This website is for informational purposes only and does not constitute legal advice.
            Nothing on this site creates an attorney-client relationship. Use of this site does not establish representation.
            Results vary depending on individual facts and circumstances.
          </p>
          <p className="text-xs leading-relaxed text-gray-500">
            <strong className="text-gray-400">Not medical advice:</strong> Information on this site is for general information only and is not medical advice.
            Talk to your doctor about vaccine decisions and any symptoms you are experiencing.
          </p>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} VaccineInjuries.org. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
