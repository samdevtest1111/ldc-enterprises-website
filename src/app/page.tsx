import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* 1. HERO SECTION */}
      <header className="py-24 px-6 text-center bg-slate-50">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Industrial Steam Solutions for <br className="hidden md:block" />
          Modern Garment Factories
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          High-efficiency boilers and steam generation systems designed for
          precision and durability in international manufacturing.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/machinery"
            className="bg-brand-purple text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all"
          >
            Explore Machinery
          </Link>
          <Link
            href="#contact"
            className="border border-slate-300 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition-all text-slate-900"
          >
            Contact Us
          </Link>
        </div>
      </header>

      {/* 2. PRODUCT PREVIEW */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Featured Machinery
            </h2>
            <p className="text-slate-500 mt-2">
              Built for high-volume production environments.
            </p>
          </div>
          <Link
            href="/machinery"
            className="text-brand-purple font-semibold hover:underline"
          >
            View All Catalog &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-slate-400">
          <div className="aspect-video bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center">
            Steam Boilers
          </div>
          <div className="aspect-video bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center">
            Ironing Stations
          </div>
          <div className="aspect-video bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center">
            Vacuum Tables
          </div>
        </div>
      </section>

      {/* 3. FULL ABOUT US SECTION */}
      <section
        id="about"
        className="py-32 px-6 bg-white scroll-mt-20 border-y border-slate-50"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400 italic">
            [ Placeholder: Factory or Machinery Photo ]
          </div>
          <div>
            <span className="text-brand-purple font-bold tracking-widest text-xs uppercase">
              Our Heritage
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
              Decades of Engineering <br /> Excellence & Trust
            </h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                LDC Enterprises stands at the forefront of industrial steam
                technology. What started as a small engineering venture has
                grown into a global provider of high-performance garment
                manufacturing machinery.
              </p>
              <p>
                We specialize in complete steam generation systems, from
                heavy-duty electric boilers to precision ironing stations,
                ensuring your factory operates at peak efficiency with minimal
                downtime.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
              <div>
                <p className="text-3xl font-bold text-slate-900">24/7</p>
                <p className="text-sm text-slate-500">Technical Support</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">100%</p>
                <p className="text-sm text-slate-500">Quality Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section
        id="contact"
        className="py-32 px-6 max-w-7xl mx-auto scroll-mt-20"
      >
        <div className="bg-slate-900 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">
            Ready to scale your production?
          </h2>
          <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto">
            Contact our engineering team today for a customized quote on
            machinery tailored to your factory&apos;s specific needs.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors">
              Email: sales@ldcenterprises.com
            </button>
            <button className="bg-slate-800 text-white border border-slate-700 px-10 py-4 rounded-xl font-bold hover:bg-slate-700 transition-colors">
              Call: +1 (234) 567-890
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
