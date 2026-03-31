export default function Home() {
  return (
    <main>
      {/* 1. HERO SECTION (SEO: Main Heading) */}
      <header className="py-24 px-6 text-center bg-slate-50">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
          Industrial Steam Solutions for Modern Garment Factories
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          High-efficiency boilers and steam generation systems designed for
          precision and durability.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-brand-purple text-white px-8 py-3 rounded-lg font-medium">
            Explore Machinery
          </button>
          <button className="border border-slate-300 px-8 py-3 rounded-lg font-medium">
            Contact Us
          </button>
        </div>
      </header>

      {/* 2. PRODUCT PREVIEW (SEO: Services/Products) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">
          Our Machinery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* We will map real data here later */}
          <div className="aspect-video bg-slate-100 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">
            Steam Boiler Box
          </div>
          <div className="aspect-video bg-slate-100 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">
            Ironing Station Box
          </div>
          <div className="aspect-video bg-slate-100 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">
            Vacuum Table Box
          </div>
        </div>
      </section>

      {/* 3. QUICK ABOUT (SEO: Authority) */}
      <section className="py-20 px-6 bg-brand-purple/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Over [X] Years of Engineering Excellence
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            LDC Enterprises specializes in delivering top-tier garment machinery
            and steam generation technology to international manufacturing hubs.
          </p>
        </div>
      </section>
    </main>
  );
}
