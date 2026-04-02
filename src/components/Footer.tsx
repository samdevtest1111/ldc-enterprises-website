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
          {/* GST SPACE - Shows professionalism */}
          <div className="mt-6 inline-block bg-slate-200/50 px-3 py-1 rounded text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            GST: 27XXXXXXXXXXXXZ {/* Replace with actual GST later */}
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
                About Factory
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
          </ul>
        </div>

        {/* OFFICE ADDRESS */}
        <div>
          <h4 className="font-black text-slate-950 text-xs uppercase tracking-widest mb-6">
            Headquarters
          </h4>
          <address className="not-italic text-sm text-slate-600 leading-relaxed font-medium">
            Shop No. X, Building Name,
            <br />
            Asalfa Village, Ghatkopar West,
            <br />
            Mumbai, Maharashtra 400084
          </address>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="font-black text-slate-950 text-xs uppercase tracking-widest mb-6">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-slate-600 font-medium">
            <li className="hover:text-red-600 transition-colors">
              <a href="mailto:ldcenterprises@outlook.com">
                ldcenterprises@outlook.com
              </a>
            </li>
            <li className="text-slate-900 font-bold">+91 9XXXX XXXXX</li>
          </ul>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
        <p>
          © {new Date().getFullYear()} LDC Enterprises. All rights reserved.
        </p>
        <p className="text-slate-300">
          Designed & Developed by{" "}
          <span className="text-slate-500 underline decoration-slate-200">
            Your Name
          </span>
        </p>
      </div>
    </footer>
  );
}
