import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* BRAND COLUMN */}
        <div className="col-span-1 md:col-span-1">
          <Link
            href="/"
            className="text-xl font-black text-slate-900 tracking-tighter uppercase italic"
          >
            LDC <span className="text-red-600 not-italic">Enterprises</span>
          </Link>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed">
            Leading manufacturer and supplier of industrial steam boilers and
            garment finishing machinery. Engineering excellence for modern
            production lines.
          </p>

          {/* NEW DISCLAIMER LINE */}
          <p className="mt-2 text-[10px] text-slate-400 italic leading-tight">
            *Note: Final machine designs and components may vary based on your
            specific technical requirements and customizations.
          </p>

          <div className="mt-6 inline-block bg-slate-200/50 px-3 py-1 rounded text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            GST: 27AGMPC6521C1ZR
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-black text-slate-950 text-xs uppercase tracking-widest mb-6">
            Nav
          </h4>
          <ul className="space-y-3 text-sm text-slate-600 font-medium">
            <li>
              <Link
                href="/machinery"
                className="hover:text-red-600 transition-colors"
              >
                Machinery Catalog
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="hover:text-red-600 transition-colors"
              >
                About Company
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="hover:text-red-600 transition-colors"
              >
                Support & Service
              </Link>
            </li>
            {/* PDF DOWNLOAD OPTION */}
            <li>
              <a
                href="/ldc-enterprises-catalog.pdf"
                download
                className="flex items-center gap-2 text-red-600 font-bold hover:opacity-80 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download PDF Catalog
              </a>
            </li>
          </ul>
        </div>

        {/* OFFICE ADDRESS */}
        <div>
          <h4 className="font-black text-slate-950 text-xs uppercase tracking-widest mb-6">
            Headquarters
          </h4>
          <address className="not-italic text-sm text-slate-600 leading-relaxed font-medium">
            Shop No. 6, Jai Mata Di Society,
            <br />
            Peru Baug Compound
            <br />
            Andheri-Ghatkopar Link Road, Asalpha, Ghatkopar(W)
            <br />
            Mumbai, Maharashtra 400084
          </address>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="font-black text-slate-950 text-xs uppercase tracking-widest mb-6">
            Direct Contact
          </h4>
          <ul className="space-y-6">
            {/* Person 1 */}
            <li className="group">
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-tighter mb-1">
                Sales & Inquiries
              </p>
              <p className="text-sm text-slate-600 font-medium mb-1">
                D.C. Chak
              </p>
              <a
                href="tel:+919967030123"
                className="text-slate-950 font-black text-base hover:text-red-600 transition-colors"
              >
                +91 9967030123
              </a>
            </li>

            {/* Person 2 */}
            <li className="group">
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-tighter mb-1">
                Technical Support
              </p>
              <p className="text-sm text-slate-600 font-medium mb-1">
                Suraj Chak
              </p>
              <a
                href="tel:+918850726591"
                className="text-slate-950 font-black text-base hover:text-red-600 transition-colors"
              >
                +91 8850726591
              </a>
            </li>

            {/* Email Block */}
            <li className="pt-4 border-t border-slate-100">
              <a
                href="mailto:ldcenterprises@outlook.com"
                className="text-sm text-slate-600 font-bold hover:text-red-600 transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                ldcenterprises@outlook.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
        <p>
          © {new Date().getFullYear()} LDC Enterprises. All rights reserved.
        </p>
        <p className="text-slate-400">
          Website Designed & Developed by{" "}
          <a
            href="https://www.instagram.com/kc__studios/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 underline decoration-slate-200 hover:text-red-600 transition-colors"
          >
            KC__STUDIOS
          </a>
        </p>
      </div>
    </footer>
  );
}
