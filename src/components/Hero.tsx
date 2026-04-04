"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import img1 from "../assets/bottle-iron.jpg";
import img2 from "../assets/stain-removing-machine.jpg";
import img3 from "../assets/thread-sucking-machine.jpg";

const slides = [
  { id: 1, name: "BOTTLE IRON", code: "SERIES-G", src: img1 },
  { id: 2, name: "Stain Removing Machine", code: "LDC-PRO", src: img2 },
  { id: 3, name: "THREAD SUCKER", code: "IND-TX4", src: img3 },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen lg:h-[90vh] grid grid-cols-1 lg:grid-cols-12 bg-white overflow-hidden font-sans">
      {/* LEFT: STATIC TEXT CONTENT */}
      <div className="lg:col-span-5 flex flex-col justify-center px-8 py-16 lg:py-0 lg:px-20 z-20 bg-white">
        <div className="space-y-4 lg:space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          ></motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl lg:text-9xl font-black text-slate-950 tracking-tighter leading-[0.8]"
          >
            RAW <br /> POWER.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-sm text-slate-500 font-medium text-base lg:text-lg leading-relaxed"
          >
            Professional grade garment manufacturing hardware. Built for 24/7
            operational excellence.
          </motion.p>
          <div className="pt-4 lg:pt-8">
            <Link
              href="/machinery"
              className="group inline-flex items-center gap-4 lg:gap-6"
            >
              <span className="h-12 w-12 lg:h-16 lg:w-16 rounded-full border-2 border-slate-950 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500">
                <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-slate-950 group-hover:text-white transition-colors" />
              </span>
              <span className="font-black tracking-widest text-xs lg:text-sm text-slate-950">
                VIEW FULL CATALOG
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT: THE CINEMATIC SLIDESHOW */}
      <div className="h-[50vh] lg:h-full lg:col-span-7 relative bg-slate-950 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={index}
            initial={{ x: "100%", opacity: 0, scale: 1.1 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: "-100%", opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[index].src}
              alt={slides[index].name}
              fill
              priority
              className="object-cover brightness-75 contrast-110 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90 z-10" />

            <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 z-30">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-red-600 font-black text-[10px] lg:text-xs tracking-[0.4em] mb-2"
              >
                MODEL {slides[index].code}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-white text-4xl lg:text-7xl font-black italic tracking-tighter uppercase leading-none"
              >
                {slides[index].name}
              </motion.h2>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* PROGRESS BAR */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-40">
          <motion.div
            key={index}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="h-full bg-red-600 shadow-[0_0_10px_#dc2626]"
          />
        </div>
      </div>
    </div>
  );
}
