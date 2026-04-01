"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// Double check this path matches your folder structure exactly
import { products } from "@/data/products";

export default function SearchSystem() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    // Only start searching after 1 character
    if (!query || query.length < 1) return [];

    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-[320px]" ref={searchRef}>
      <div className="relative flex items-center">
        <Search className="absolute left-3 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search machinery..."
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-full py-2 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute right-3 p-1 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X className="w-3 h-3 text-slate-500" />
          </button>
        )}
      </div>

      {/* SUGGESTIONS PANEL */}
      {/* Changed query.length > 0 to match our useMemo logic */}
      {isOpen && query.length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl shadow-slate-200/60 overflow-hidden z-[9999]">
          <div className="max-h-[350px] overflow-y-auto p-2">
            {results.length > 0 ? (
              results.map((product) => (
                <Link
                  key={product.id}
                  href={`/machinery/${product.id}`}
                  onClick={() => {
                    setIsOpen(false);
                    setQuery("");
                  }}
                  className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-xl transition-colors group"
                >
                  <div className="relative w-12 h-12 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="48px"
                      className="object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-semibold text-slate-900 truncate">
                      {product.name}
                    </span>
                    <span className="text-[10px] text-brand-purple font-medium uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-4 text-center text-sm text-slate-500">
                No machinery found for &quot;{query}&quot;
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
