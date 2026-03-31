import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group border border-slate-100 rounded-2xl p-4 hover:shadow-xl hover:shadow-brand-purple/5 transition-all bg-white">
      {/* Image Placeholder */}
      <div className="aspect-square bg-slate-50 rounded-xl mb-4 flex items-center justify-center text-slate-300 font-medium overflow-hidden">
        {/* We will add real images later */}[ {product.category} Image ]
      </div>

      {/* Content */}
      <div className="space-y-2">
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

      {/* Quick Specs - SEO friendly text */}
      <div className="mt-4 pt-4 border-t border-slate-50 grid grid-cols-2 gap-2">
        {product.specs.slice(0, 2).map((spec, index) => (
          <div key={index}>
            <p className="text-[10px] text-slate-400 uppercase">{spec.label}</p>
            <p className="text-xs font-semibold text-slate-700">{spec.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
