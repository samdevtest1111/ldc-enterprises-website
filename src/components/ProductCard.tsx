import { Product } from "@/data/products";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/machinery/${product.id}`} className="group block h-full">
      <div className="border border-slate-100 rounded-2xl p-4 hover:shadow-xl hover:shadow-brand-purple/5 transition-all bg-white h-full flex flex-col">
        {/* 1. IMAGE CONTAINER (Empty for your future images) */}
        <div className="aspect-square bg-slate-50 rounded-xl mb-4 flex items-center justify-center overflow-hidden border border-slate-100">
          {/* This space is reserved for your <img> tag */}
        </div>

        {/* 2. TEXT CONTENT */}
        <div className="space-y-2 flex-grow text-left">
          <span className="text-[10px] uppercase tracking-widest text-brand-purple font-bold">
            {product.category}
          </span>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-purple transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-slate-500 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* 3. QUICK SPECS */}
        <div className="mt-4 pt-4 border-t border-slate-50 grid grid-cols-2 gap-2 text-left">
          {product.specs.slice(0, 2).map((spec, index) => (
            <div key={index}>
              <p className="text-[10px] text-slate-400 uppercase tracking-tight">
                {spec.label}
              </p>
              <p className="text-xs font-semibold text-slate-700">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
