"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Added this import
import { Menu, Search, X, ChevronRight } from "lucide-react";
import SearchSystem from "./SearchSystem";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../assets/ldc-logo.png";

export default function Navbar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${id}`);
      } else if (id === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", window.location.pathname);
      }
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", href: "/", id: "top" },
    { name: "Our Products", href: "/machinery", id: null },
    { name: "About Us", href: "/#about", id: "about" },
    { name: "Quality", href: "/#quality", id: "quality" },
    { name: "Contact us", href: "/#contact", id: "contact" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between relative">
        {/* LEFT: LOGO & DESKTOP NAV */}
        <div className="flex items-center gap-10 px-6 z-20">
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0 bg-white"
          >
            {/* LOGO IMAGE REPLACED BOX */}
            <div className="relative w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src={logoImg} // Use the imported variable name, NOT a string
                alt="LDC Logo"
                width={40}
                height={40}
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-red-600 leading-none">
                LDC
              </span>
              <span className="text-black text-[10px] uppercase tracking-[0.2em] font-bold">
                Enterprises
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex gap-8 text-sm font-bold text-slate-600">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => link.id && handleScroll(e, link.id)}
                className="hover:text-red-600 transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT: SEARCH & HAMBURGER */}
        <div className="relative h-full flex items-center justify-end pr-4 sm:pr-8 min-w-[120px] lg:min-w-[400px]">
          <div
            className="absolute inset-0 bg-red-600 -z-10"
            style={{ clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          />

          <div className="flex items-center gap-3 lg:gap-6 pl-10">
            <div className="hidden lg:block w-64">
              <SearchSystem />
            </div>

            <button
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                setIsMenuOpen(false);
              }}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              {isSearchOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Search className="w-6 h-6" />
              )}
            </button>

            <button
              onClick={() => {
                setIsMenuOpen(true);
                setIsSearchOpen(false);
              }}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <span className="sr-only">Open Menu</span>
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH OVERLAY */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-4 shadow-xl lg:hidden z-40"
            >
              <SearchSystem />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] shadow-2xl lg:hidden flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-slate-50">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Navigation
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 bg-slate-100 rounded-full text-slate-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) =>
                        link.id
                          ? handleScroll(e, link.id)
                          : setIsMenuOpen(false)
                      }
                      className="flex items-center justify-between px-8 py-5 border-b border-slate-50 hover:bg-slate-50 group"
                    >
                      <span className="text-xl font-black uppercase tracking-tighter text-slate-900 group-hover:text-red-600 transition-colors">
                        {link.name}
                      </span>
                      <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="p-8 bg-slate-50 mt-auto">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+91"
                    className="flex items-center justify-center bg-white border border-slate-200 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-900"
                  >
                    Call
                  </a>
                  <a
                    href="https://wa.me/91"
                    className="flex items-center justify-center bg-[#25D366] text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
