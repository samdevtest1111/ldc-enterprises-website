"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

// Assets - Importing from your src/assets folder
import img1 from "../assets/bottle iron.jpg";
import img2 from "../assets/buck vacuum table.jpg";
import img3 from "../assets/thread sucking machine.jpg";

const slides = [
  { id: 1, name: "BOTTLE IRON", code: "SERIES-G", src: img1.src },
  { id: 2, name: "VACUUM TABLE", code: "LDC-PRO", src: img2.src },
  { id: 3, name: "THREAD SUCKER", code: "IND-TX4", src: img3.src },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Smooth rotation every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[90vh] grid grid-cols-1 lg:grid-cols-12 bg-white overflow-hidden font-sans">
      {/* LEFT: STATIC TEXT CONTENT */}
      <div className="lg:col-span-5 flex flex-col justify-center px-12 lg:px-20 z-20 bg-white">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="h-[3px] w-8 bg-red-600"></span>
            <p className="text-[10px] font-black tracking-[0.5em] text-red-600 uppercase">
              Est. 2026 / Industrial
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl lg:text-9xl font-black text-slate-950 tracking-tighter leading-[0.8]"
          >
            RAW <br />
            POWER.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-sm text-slate-500 font-medium text-lg leading-relaxed"
          >
            Professional grade garment manufacturing hardware. Built for 24/7
            operational excellence and high-volume output.
          </motion.p>

          <div className="pt-8">
            {/* UPDATED LINK: Pointing to /machinery */}
            <Link href="/machinery" className="group flex items-center gap-6">
              <span className="h-16 w-16 rounded-full border-2 border-slate-950 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500">
                <ArrowRight className="text-slate-950 group-hover:text-white transition-colors" />
              </span>
              <span className="font-black tracking-widest text-sm text-slate-950">
                VIEW FULL CATALOG
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT: THE CINEMATIC SLIDESHOW */}
      <div className="lg:col-span-7 relative bg-slate-950 overflow-hidden">
        {/* popLayout prevents the "black flash" by letting images overlap */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={index}
            // Coming from back (scale 1.2) to front (scale 1) from the right (x: 100%)
            initial={{ x: "100%", opacity: 0, scale: 1.1 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: "-100%", opacity: 0, scale: 0.9 }}
            transition={{
              duration: 1.5, // Slow, smooth cinematic speed
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-0 w-full h-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slides[index].src}
              alt={slides[index].name}
              className="w-full h-full object-cover brightness-75 contrast-110 shadow-2xl"
            />

            {/* Dark Vignette to make text readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />

            {/* Slide Information Overlay */}
            <div className="absolute bottom-12 left-12 z-30">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-red-600 font-black text-xs tracking-[0.4em] mb-2"
              >
                MODEL {slides[index].code}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-white text-5xl lg:text-7xl font-black italic tracking-tighter uppercase leading-none"
              >
                {slides[index].name}
              </motion.h2>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-40">
          <motion.div
            key={index}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="h-full bg-red-600 shadow-[0_0_10px_#dc2626]"
          />
        </div>

        {/* Side Pagination Ticks */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-[2px] transition-all duration-700 ${i === index ? "h-12 bg-red-600" : "h-4 bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
