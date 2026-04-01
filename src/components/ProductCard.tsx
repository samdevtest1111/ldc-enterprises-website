import { Product } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/machinery/${product.id}`} className="group block h-full">
      {/* Updated card styling: Changed 'bg-white' to 'bg-slate-50' and added a heavy 'shadow-lg' by default */}
      <div className="border border-slate-100 rounded-[2rem] p-5 hover:shadow-2xl hover:shadow-slate-500/10 transition-all duration-500 bg-slate-50 shadow-lg h-full flex flex-col">
        {/* 1. IMAGE CONTAINER - with curves and subtle shadow */}
        {/* Added 'shadow-inner' and 'bg-white' to make the image area pop slightly */}
        <div className="relative aspect-square bg-white rounded-[1.5rem] mb-6 flex items-center justify-center overflow-hidden border border-slate-100 group-hover:shadow-lg transition-all duration-500 shadow-inner">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-6 mix-blend-multiply rounded-[1.5rem] group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* 2. TEXT CONTENT */}
        <div className="space-y-2 flex-grow text-left px-2">
          <span className="text-[10px] uppercase tracking-widest text-red-600 font-black">
            {product.category}
          </span>
          <h3 className="text-xl font-black text-slate-900 group-hover:text-red-600 transition-colors uppercase tracking-tighter">
            {product.name}
          </h3>
          {/* Changed text color to 'text-slate-600' for slightly better readability on the darker background */}
          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* 3. QUICK SPECS */}
        <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 gap-4 text-left px-2">
          {product.specs.slice(0, 2).map((spec, index) => (
            <div key={index}>
              <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest">
                {spec.label}
              </p>
              <p className="text-xs font-black text-slate-800 uppercase italic">
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        {/* 4. VIEW BUTTON */}
        <div className="mt-6 px-2 pb-2">
          <span className="text-[10px] font-black text-slate-400 group-hover:text-red-600 transition-colors border-b-2 border-transparent group-hover:border-red-600 pb-1 uppercase tracking-tighter">
            View Full Specs →
          </span>
        </div>
      </div>
    </Link>
  );
}
