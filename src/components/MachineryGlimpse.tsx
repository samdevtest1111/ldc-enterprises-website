"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

export default function MachineryGlimpse() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-red-600"></span>
            <span className="text-red-600 font-black text-xs uppercase tracking-widest">
              Full Inventory
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter italic uppercase leading-[0.9]">
            Industrial <br /> Solutions
          </h2>
          <p className="text-slate-500 mt-4 text-sm font-bold uppercase tracking-tight">
            Swipe to explore all {products.length} units
          </p>
        </div>
        <Link
          href="/machinery"
          className="group text-slate-950 font-black hover:text-red-600 transition-colors flex items-center gap-2 border-b-2 border-slate-950 pb-1 uppercase text-xs tracking-widest shrink-0"
        >
          View Full Catalog{" "}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* HORIZONTAL SCROLL CONTAINER */}
      <div
        className="flex gap-6 overflow-x-auto pb-12 cursor-grab active:cursor-grabbing 
                   scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            viewport={{ once: true }}
            // This ensures the card snaps to the start of the container
            className="min-w-[85vw] md:min-w-[400px] snap-start"
          >
            <Link
              href={`/machinery/${product.id}`}
              className="group relative flex flex-col bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-full"
            >
              {/* IMAGE AREA */}
              <div className="relative aspect-square bg-slate-50 overflow-hidden flex items-center justify-center p-10">
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/5 transition-colors z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/400x400?text=LDC+Unit";
                  }}
                />

                {/* ID Tag */}
                <div className="absolute top-6 right-6 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-slate-100">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter italic">
                    ID: {product.id.slice(0, 8)}
                  </span>
                </div>
              </div>

              {/* TEXT AREA */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-red-600 font-black text-[10px] uppercase tracking-widest mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-2xl font-black text-slate-950 tracking-tighter uppercase mb-6 group-hover:text-red-600 transition-colors leading-tight">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between border-t border-slate-50 pt-6">
                  <div className="flex gap-4">
                    {product.specs.slice(0, 1).map((spec, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[9px] text-slate-400 font-bold uppercase">
                          {spec.label}
                        </span>
                        <span className="text-xs font-black text-slate-800 tracking-tighter">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <span className="h-10 w-10 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-red-600 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* CUSTOM CSS FOR HIDING SCROLLBAR (ADD TO YOUR GLOBALS.CSS OR USE INLINE STYLE) */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
