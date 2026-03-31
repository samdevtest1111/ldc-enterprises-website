import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900"
        >
          LDC{" "}
          <span className="text-brand-purple text-sm uppercase tracking-[0.2em] ml-1">
            Enterprises
          </span>
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          {/* External Page Link */}
          <Link
            href="/machinery"
            className="hover:text-brand-purple transition-colors"
          >
            Machinery
          </Link>

          {/* Section ID Links (Home Only) */}
          <Link
            href="/#about"
            className="hover:text-brand-purple transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/#contact"
            className="hover:text-brand-purple transition-colors"
          >
            Contact
          </Link>
        </div>

        <Link
          href="/#contact"
          className="bg-brand-purple text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all"
        >
          Get a Quote
        </Link>
      </div>
    </nav>
  );
}
