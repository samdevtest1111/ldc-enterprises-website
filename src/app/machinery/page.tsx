export default function MachineryPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Our Machinery</h1>
          <p className="text-slate-500 mt-2">
            Explore our full catalog of industrial steam solutions.
          </p>
        </div>

        {/* Search Bar Structure */}
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search equipment (e.g. 'Boiler')..."
            className="w-full pl-4 pr-10 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple/20 transition-all"
          />
          <div className="absolute right-3 top-3.5 text-slate-400">🔍</div>
        </div>
      </div>

      {/* Product Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder for Product Cards */}
        <div className="h-64 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400">
          Product Card Placeholder
        </div>
        <div className="h-64 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400">
          Product Card Placeholder
        </div>
        <div className="h-64 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400">
          Product Card Placeholder
        </div>
      </div>
    </main>
  );
}
