"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

export default function MachineryGlimpse() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-6">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-red-600"></span>
            <span className="text-red-600 font-black text-[10px] md:text-xs uppercase tracking-widest">
              Full Inventory
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter italic uppercase leading-[0.9]">
            Industrial <br /> Solutions
          </h2>
          <p className="text-slate-500 mt-4 text-[10px] md:text-sm font-bold uppercase tracking-tight">
            Swipe to explore all {products.length} units
          </p>
        </div>
        <Link
          href="/machinery"
          className="group text-slate-950 font-black hover:text-red-600 transition-colors flex items-center gap-2 border-b-2 border-slate-950 pb-1 uppercase text-[10px] md:text-xs tracking-widest shrink-0"
        >
          View Full Catalog{" "}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* HORIZONTAL SCROLL CONTAINER */}
      <div
        className="flex gap-4 md:gap-6 overflow-x-auto pb-12 cursor-grab active:cursor-grabbing 
                   scrollbar-hide snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="min-w-[80vw] sm:min-w-[350px] md:min-w-[400px] snap-start"
          >
            <Link
              href={`/machinery/${product.id}`}
              className="group relative flex flex-col bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-full"
            >
              {/* IMAGE AREA - Fixed with Next.js Image Component */}
              <div className="relative aspect-square bg-slate-50 overflow-hidden flex items-center justify-center p-6 md:p-10">
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/5 transition-colors z-10" />

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 80vw, 400px"
                />

                {/* ID Tag */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-slate-100 z-20">
                  <span className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-tighter italic">
                    ID: {product.id.slice(0, 8)}
                  </span>
                </div>
              </div>

              {/* TEXT AREA */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-red-600 font-black text-[9px] md:text-[10px] uppercase tracking-widest mb-1 md:mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-xl md:text-2xl font-black text-slate-950 tracking-tighter uppercase mb-4 md:mb-6 group-hover:text-red-600 transition-colors leading-tight">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between border-t border-slate-50 pt-4 md:pt-6">
                  <div className="flex gap-4">
                    {product.specs.slice(0, 1).map((spec, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[8px] md:text-[9px] text-slate-400 font-bold uppercase">
                          {spec.label}
                        </span>
                        <span className="text-xs font-black text-slate-800 tracking-tighter">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <span className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-red-600 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
