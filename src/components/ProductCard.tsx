import { Product } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/machinery/${product.id}`}
      className="group block h-full focus:outline-none focus:ring-2 focus:ring-red-600 rounded-[2rem]"
      aria-label={`View details for ${product.name}`}
    >
      <div className="border border-slate-100 rounded-[2rem] p-5 hover:shadow-2xl hover:shadow-red-600/5 transition-all duration-500 bg-slate-50 shadow-lg h-full flex flex-col relative overflow-hidden">
        {/* SEO-Optimized Image Container */}
        <div className="relative aspect-square bg-white rounded-[1.5rem] mb-6 flex items-center justify-center overflow-hidden border border-slate-100 group-hover:border-red-600/20 transition-all duration-500 shadow-inner">
          <Image
            src={product.image}
            // SEO: Enhanced ALT text for image search ranking
            alt={`${product.name} - High-Performance ${product.category} Machinery by LDC Enterprises`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-6 mix-blend-multiply rounded-[1.5rem] group-hover:scale-110 transition-transform duration-700 ease-in-out"
            priority={false}
          />

          {/* Subtle Industrial Overlay */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="bg-red-600 text-[8px] text-white font-black px-2 py-1 rounded-md tracking-tighter uppercase italic">
              Heavy Duty
            </span>
          </div>
        </div>

        {/* Text Content with Semantic H3 */}
        <div className="space-y-2 flex-grow text-left px-2">
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 bg-red-600 rounded-full" />
            <span className="text-[10px] uppercase tracking-widest text-red-600 font-black">
              {product.category}
            </span>
          </div>

          <h3 className="text-xl font-black text-slate-900 group-hover:text-red-600 transition-colors uppercase tracking-tighter leading-tight">
            {product.name}
          </h3>

          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed font-medium">
            {product.description}
          </p>
        </div>

        {/* Quick Specs Grid */}
        <div className="mt-6 pt-5 border-t border-slate-200/60 grid grid-cols-2 gap-4 text-left px-2">
          {product.specs.slice(0, 2).map((spec, index) => (
            <div key={index} className="group/spec">
              <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest group-hover/spec:text-red-600 transition-colors">
                {spec.label}
              </p>
              <p className="text-xs font-black text-slate-800 uppercase italic">
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        {/* View Button */}
        <div className="mt-6 px-2 pb-2 flex items-center justify-between">
          <span className="text-[10px] font-black text-slate-950 group-hover:text-red-600 transition-colors border-b-2 border-slate-950 group-hover:border-red-600 pb-1 uppercase tracking-tighter">
            Full Engineering Specs →
          </span>
          <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all">
            <div className="w-1.5 h-1.5 bg-slate-400 group-hover:bg-white rounded-full" />
          </div>
        </div>
      </div>
    </Link>
  );
}
