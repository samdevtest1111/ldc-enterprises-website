"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Search, X } from "lucide-react";

export default function MachineryPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtering logic: checks name and category
  const filteredProducts = products.filter((product) => {
    const searchContent = `${product.name} ${product.category}`.toLowerCase();
    return searchContent.includes(searchQuery.toLowerCase());
  });

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-red-600"></span>
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest">
              Industrial Catalog
            </span>
          </div>
          <h1 className="text-5xl font-black text-slate-950 tracking-tighter uppercase italic leading-[0.9]">
            Our <br /> Machinery
          </h1>
          <p className="text-slate-500 mt-6 font-medium">
            Explore our full catalog of high-performance industrial steam
            solutions.
          </p>
        </div>

        {/* Search Bar - Connected to Logic */}
        <div className="relative w-full md:w-[450px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search machinery..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-full py-3 pl-12 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all shadow-sm text-slate-900"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-200 rounded-full transition-colors"
            >
              <X className="w-3 h-3 text-slate-500" />
            </button>
          )}
        </div>
      </div>

      {/* Product Catalog Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <h3 className="text-xl font-bold text-slate-900">
            No machinery found
          </h3>
          <p className="text-slate-500 mt-2">
            Try adjusting your search terms.
          </p>
        </div>
      )}
    </main>
  );
}
