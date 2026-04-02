"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { products } from "@/data/products";
import Hero from "@/components/Hero";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.7;
      const scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 20);
      setShowRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      return () => currentRef.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <main className="bg-white">
      <Hero />

      {/* 2. FEATURED MACHINERY GLIMPSE */}
      <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-red-600"></span>
              <span className="text-red-600 font-bold text-xs uppercase tracking-widest">
                Selected Hardware
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter italic uppercase leading-[0.9]">
              Featured <br /> Machinery
            </h2>
          </div>
          <Link
            href="/machinery"
            className="text-slate-950 font-black hover:text-red-600 transition-colors flex items-center gap-2 border-b-2 border-slate-950 pb-1 uppercase text-sm tracking-widest shrink-0"
          >
            Full Catalog →
          </Link>
        </motion.div>

        <div className="relative group/container">
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/80 backdrop-blur-md border border-slate-100 shadow-xl rounded-r-2xl cursor-pointer transition-all duration-300 ${
              showLeft
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full pointer-events-none"
            } hover:bg-red-600 hover:text-white hover:border-red-600`}
          >
            <ChevronLeft size={32} strokeWidth={3} />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/80 backdrop-blur-md border border-slate-100 shadow-xl rounded-l-2xl cursor-pointer transition-all duration-300 ${
              showRight
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full pointer-events-none"
            } hover:bg-red-600 hover:text-white hover:border-red-600`}
          >
            <ChevronRight size={32} strokeWidth={3} />
          </button>

          <motion.div
            ref={scrollRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex gap-8 overflow-x-auto pb-10 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <motion.div key={product.id} variants={fadeInUp}>
                <Link
                  href={`/machinery/${product.id}`}
                  className="min-w-[85vw] md:min-w-[380px] snap-start group relative aspect-[4/5] bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center justify-center p-8 overflow-hidden transition-all hover:border-red-600/20 hover:shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-100/50 group-hover:to-red-50/30 transition-colors" />

                  <div className="relative z-10 w-full h-80 bg-white rounded-3xl shadow-sm border border-slate-100 mb-8 group-hover:scale-105 transition-transform duration-500 overflow-hidden flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 mix-blend-multiply rounded-3xl"
                    />
                  </div>

                  <div className="relative z-10 text-center">
                    <p className="text-red-600 font-black text-[10px] uppercase tracking-widest mb-2">
                      {product.category || "Industrial Class"}
                    </p>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase group-hover:text-red-600 transition-colors">
                      {product.name}
                    </h3>
                    <span className="inline-block mt-4 text-xs font-bold text-slate-400 group-hover:text-slate-950 transition-colors underline underline-offset-4">
                      VIEW SPECS
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. ABOUT US SECTION */}
      <section
        id="about"
        className="py-16 md:py-20 px-6 bg-slate-950 text-white scroll-mt-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:30px_30px]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10"
        >
          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-white/5 rounded-[2.5rem] border border-white/10 overflow-hidden group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63136.21666047223!2d72.84833576677246!3d19.07682703172833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9318586c26b%3A0x4b3ea2ac558ab786!2sLDC%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1775129440951!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-0"
            />
            <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
              <p className="text-[10px] font-black text-white uppercase tracking-[0.3em] bg-slate-950/90 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md shadow-2xl">
                LDC Factory Location
              </p>
            </div>
          </div>

          <div className="py-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-8 bg-red-600"></span>
              <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.3em]">
                Industrial Authority
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-6">
              Engineering <br />{" "}
              <span className="text-white/30 italic">Excellence.</span>
            </h2>

            <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium max-w-md border-l-2 border-white/10 pl-6 mb-8">
              LDC Enterprises stands at the forefront of industrial steam
              technology, ensuring your factory operates at peak efficiency with
              minimal downtime.
            </p>

            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm group hover:border-red-600/50 transition-colors">
              <h4 className="text-red-600 font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                Custom Builds
              </h4>
              <p className="text-white text-sm font-bold leading-tight uppercase tracking-tight">
                We manufacture bespoke industrial machinery tailored to your
                specific production line requirements.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. QUALITY & DURABILITY SECTION - Simplified for Normal Customers */}
      <section
        id="quality"
        className="py-24 px-6 bg-slate-50 overflow-hidden border-y border-slate-100"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-red-600"></span>
              <span className="text-red-600 font-bold text-xs uppercase tracking-widest">
                Our Promise
              </span>
              <span className="h-[2px] w-6 bg-red-600"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase italic leading-[0.9] mb-6">
              Quality <br /> You Can Trust.
            </h2>
            <p className="text-slate-600 text-base font-medium leading-relaxed">
              We build hardworking machines for hardworking factories. Durable,
              safe, and easy to maintain.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: "🛡️",
                title: "Safe to Use",
                desc: "Equipped with automatic safety sensors.",
              },
              {
                icon: "💪",
                title: "Built to Last",
                desc: "Uses strong, heavy-duty industrial metal.",
              },
              {
                icon: "🛠️",
                title: "Easy Repairs",
                desc: "Simple design for quick maintenance.",
              },
              {
                icon: "✅",
                title: "Tested Fully",
                desc: "Every machine is checked before delivery.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 border border-slate-200 rounded-[2rem] bg-white shadow-sm hover:border-red-600/30 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="text-5xl mb-6 bg-slate-100 w-20 h-20 flex items-center justify-center rounded-3xl border border-slate-200">
                  {item.icon}
                </div>
                <h4 className="text-slate-950 font-black text-lg uppercase tracking-tight mb-2 italic">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section
        id="contact"
        className="py-16 px-6 max-w-4xl mx-auto scroll-mt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border-[3px] border-slate-950 rounded-[2.5rem] p-8 md:p-12 text-center shadow-[12px_12px_0px_#dc2626]"
        >
          <div className="mb-4 flex justify-center">
            <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-red-50 rounded-full border border-red-100">
              Direct Factory Support
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-3 tracking-tighter uppercase italic leading-[0.9]">
            Scale <br /> Production.
          </h2>

          <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px] mb-8">
            Ghatkopar West, Mumbai • Industrial Excellence
          </p>

          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <a
              href="mailto:contact@ldcenterprises.com?subject=Machinery%20Inquiry"
              className="bg-red-600 text-white py-4 rounded-2xl font-black text-xs tracking-widest hover:bg-slate-950 transition-all uppercase shadow-lg"
            >
              Send Requirement Email
            </a>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 pt-6 border-t border-slate-100">
              <a
                href="https://wa.me/91XXXXXXXXXX"
                className="flex items-center justify-center gap-2 text-slate-900 font-black text-[10px] uppercase tracking-widest hover:text-[#25D366] transition-colors bg-slate-50 py-3 rounded-xl border border-slate-100"
              >
                <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
                WhatsApp
              </a>

              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center justify-center gap-2 text-slate-900 font-black text-[10px] uppercase tracking-widest hover:text-red-600 transition-colors bg-slate-50 py-3 rounded-xl border border-slate-100"
              >
                <div className="w-2 h-2 bg-red-600 rounded-full" />
                Call Support
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
