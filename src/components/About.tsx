export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-white scroll-mt-20 border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* PHOTO FRAME */}
        <div className="relative group max-w-md lg:max-w-none mx-auto lg:mx-0">
          {/* Red Shadow Box - Reduced translate for tighter feel */}
          <div className="absolute inset-0 bg-red-600 rounded-[2.5rem] translate-x-3 translate-y-3" />

          <div className="relative aspect-square bg-slate-900 rounded-[2.5rem] border-[3px] border-slate-950 flex items-center justify-center overflow-hidden z-10 shadow-xl">
            <div className="text-slate-500 font-black uppercase tracking-widest italic text-center p-6 text-sm">
              [ Factory Photo ]
              <p className="text-[9px] mt-1 opacity-50 not-italic">
                LDC Quality Control
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-red-600"></span>
              <span className="text-red-600 font-black tracking-[0.2em] text-[10px] uppercase">
                Established 2010
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-950 leading-[0.9] tracking-tighter uppercase italic">
              Built on <br /> Trust & Power
            </h2>
          </div>

          <div className="space-y-4 text-slate-500 text-base font-medium leading-relaxed max-w-xl">
            <p className="border-l-4 border-slate-100 pl-5">
              LDC Enterprises is a leader in machine technology. We build
              heavy-duty boilers and ironing tools that never stop working.
            </p>
            <p className="pl-5 italic text-sm">
              Our goal is simple: We give your factory the best tools so you can
              work faster and better every day.
            </p>
          </div>

          {/* STATS GRID */}
          <div className="mt-8 grid grid-cols-2 gap-6 border-t-2 border-slate-950 pt-8">
            <div className="space-y-0.5">
              <p className="text-4xl font-black text-slate-950 tracking-tighter italic leading-none">
                24/7
              </p>
              <p className="text-[9px] font-black text-red-600 uppercase tracking-widest">
                Support Line
              </p>
            </div>
            <div className="space-y-0.5">
              <p className="text-4xl font-black text-slate-950 tracking-tighter italic leading-none">
                100%
              </p>
              <p className="text-[9px] font-black text-red-600 uppercase tracking-widest">
                Heavy Duty
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
