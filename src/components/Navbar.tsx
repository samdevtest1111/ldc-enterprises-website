"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import SearchSystem from "./SearchSystem";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => {
    // 1. If we are already on the home page
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${id}`);
      } else if (id === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/");
      }
    }
    // 2. If we are on a different page, the default Link href="/#id"
    // will handle the navigation and native browser anchor jump.
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between relative">
        <div className="flex items-center gap-12 px-6">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-10 h-10 bg-black rounded flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
              <span className="text-[10px] text-white font-bold tracking-tighter">
                <span className="text-red-600">L</span>DC
              </span>
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
            <Link
              href="/"
              onClick={(e) => handleScroll(e, "top")}
              className="hover:text-red-600 transition-colors"
            >
              Home
            </Link>

            <Link
              href="/machinery"
              className="hover:text-red-600 transition-colors"
            >
              Our Products
            </Link>

            <Link
              href="/#about"
              onClick={(e) => handleScroll(e, "about")}
              className="hover:text-red-600 transition-colors"
            >
              About Us
            </Link>

            {/* NEW QUALITY OPTION */}
            <Link
              href="/#quality"
              onClick={(e) => handleScroll(e, "quality")}
              className="hover:text-red-600 transition-colors"
            >
              Quality
            </Link>

            <Link
              href="/#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="hover:text-red-600 transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>

        <div className="relative h-full flex items-center pr-6 min-w-[300px] justify-end">
          <div
            className="absolute inset-0 bg-red-600 -z-10"
            style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          />
          <div className="flex items-center gap-4 pl-12">
            <div className="hidden sm:block w-48 lg:w-64">
              <SearchSystem />
            </div>
            <button className="lg:hidden p-2 text-white">
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
