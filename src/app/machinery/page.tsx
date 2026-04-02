"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Search, X } from "lucide-react";

export default function MachineryPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const searchContent =
      `${product.name} ${product.category} ${product.description}`.toLowerCase();
    return searchContent.includes(searchQuery.toLowerCase());
  });

  // SEO: Create JSON-LD for the Product List
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `https://ldcenterprises.com/machinery/${product.id}`,
    })),
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Injecting Structured Data for Google Bot */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <header className="max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-red-600"></span>
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest">
              Industrial Catalog
            </span>
          </div>
          <h1 className="text-5xl font-black text-slate-950 tracking-tighter uppercase italic leading-[0.9]">
            Industrial <br /> Machinery & Parts
          </h1>
          <p className="text-slate-500 mt-6 font-medium">
            Explore our professional range of high-pressure boilers, finishing
            tables, and precision steam components for garment manufacturing.
          </p>
        </header>

        <div className="relative w-full md:w-[450px]">
          <label htmlFor="machine-search" className="sr-only">
            Search Machinery
          </label>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            id="machine-search"
            type="text"
            placeholder="Search boilers, irons, or parts..."
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

      <section aria-label="Machinery Grid">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((item) => (
              <article key={item.id}>
                <ProductCard product={item} />
              </article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-xl font-bold text-slate-900">
              No results for &quot;{searchQuery}&quot;
            </h3>
            <p className="text-slate-500 mt-2">
              Try searching for &quot;Boiler&quot;, &quot;Iron&quot;, or
              &quot;Vacuum&quot;.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
