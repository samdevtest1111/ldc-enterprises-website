export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-white scroll-mt-20 border-y border-slate-50"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="aspect-square bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400 italic border border-slate-200">
          [ Factory or Machinery Photo ]
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
              technology. We specialize in complete steam generation systems,
              from heavy-duty electric boilers to precision ironing stations.
            </p>
            <p>
              Our mission is to ensure your factory operates at peak efficiency
              with high-performance machinery designed for the modern era.
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
  );
}
