import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2">
          <Link href="/" className="text-xl font-bold text-slate-900">
            LDC{" "}
            <span className="text-brand-purple text-sm uppercase tracking-widest ml-1">
              Enterprises
            </span>
          </Link>
          <p className="mt-4 text-slate-500 max-w-sm">
            Leading provider of industrial steam and garment manufacturing
            machinery since [Year].
          </p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/machinery" className="hover:text-brand-purple">
                Machinery
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-brand-purple">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-brand-purple">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>sales@ldcenterprises.com</li>
            <li>+1 (234) 567-890</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} LDC Enterprises. All rights reserved.
      </div>
    </footer>
  );
}
