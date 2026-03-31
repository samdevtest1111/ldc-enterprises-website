import { products } from "@/data/products";
import Link from "next/link";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id) || products[0];

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* BREADCRUMBS */}
        <nav className="mb-6 flex gap-2 text-[11px] font-medium text-slate-500">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>›</span>
          <Link href="/machinery" className="hover:underline">
            Machinery
          </Link>
          <span>›</span>
          <span className="text-slate-900 truncate">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT: IMAGE GALLERY */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="sticky top-8 space-y-4">
              {/* Main Product Image */}
              <div className="aspect-square bg-white rounded-lg border border-slate-200 flex items-center justify-center overflow-hidden">
                <img
                  src="/placeholder-main.jpg"
                  alt={product.name}
                  className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Thumbnail Grid */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <button
                    key={i}
                    className="flex-shrink-0 w-20 h-20 bg-white rounded-md border border-slate-200 hover:border-orange-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all overflow-hidden p-1"
                  >
                    <img
                      src={`/placeholder-thumb-${i}.jpg`}
                      alt={`View ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: INFO COLUMN */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            <section className="border-b border-slate-100 pb-6">
              <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-tight">
                {product.name}
              </h1>
              <p className="text-blue-600 text-sm font-medium mt-1 hover:underline cursor-pointer">
                Visit the Industrial Store
              </p>

              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-orange-400 text-sm">★★★★★</div>
                <span className="text-blue-600 text-sm hover:underline cursor-pointer">
                  84 ratings
                </span>
              </div>
            </section>

            <section>
              <div className="flex items-baseline gap-1">
                <span className="text-sm self-start mt-1">$</span>
                <span className="text-3xl font-medium text-slate-900">
                  4,999
                </span>
                <span className="text-sm font-medium text-slate-900">00</span>
              </div>
              <p className="text-slate-700 text-sm mt-4 leading-relaxed">
                {product.description}
              </p>
            </section>

            {/* Technical Specs Table */}
            <section className="pt-4 border-t border-slate-100">
              <h2 className="text-sm font-bold text-slate-900 mb-3">
                Product Specifications
              </h2>
              <table className="w-full text-sm">
                <tbody>
                  {product.specs.map((spec, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-50 last:border-0"
                    >
                      <td className="py-2 pr-4 font-bold text-slate-700 w-1/3">
                        {spec.label}
                      </td>
                      <td className="py-2 text-slate-600">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* Action Card */}
            <section className="p-6 border border-slate-300 rounded-xl space-y-4 shadow-sm bg-slate-50/30">
              <div className="text-green-700 font-bold text-lg">In Stock</div>

              <div className="space-y-3">
                <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black py-2.5 rounded-full text-sm shadow-sm border border-[#FCD200]">
                  Add to Cart
                </button>
                <button className="w-full bg-[#FFA41C] hover:bg-[#FF8F00] text-black py-2.5 rounded-full text-sm shadow-sm border border-[#FF9900]">
                  Buy Now
                </button>
              </div>

              <div className="text-[12px] text-slate-600 pt-2 space-y-1">
                <p>
                  Ships from <span className="text-slate-900 ml-2">Amazon</span>
                </p>
                <p>
                  Sold by{" "}
                  <span className="text-slate-900 ml-2">
                    Verified Industrial
                  </span>
                </p>
                <p className="text-blue-600 hover:underline cursor-pointer">
                  Return policy: Eligible for Return
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
