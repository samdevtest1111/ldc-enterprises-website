import { products } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, FileText } from "lucide-react";
import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return { title: "Product Not Found | LDC Enterprises" };
  return {
    title: `${product.name} | LDC Enterprises Mumbai`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const whatsappNumber = "919967030123";
  const whatsappMsg = encodeURIComponent(
    `Hello, I want to know more about the ${product.name} (ID: ${product.id}).`,
  );

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* BACK LINK */}
        <Link
          href="/machinery"
          className="group mb-6 md:mb-10 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-red-600 transition-colors"
        >
          <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
          Back to List
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
          {/* LEFT: PHOTO SECTION - Optimized padding for small mobile */}
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-24">
              <div className="relative aspect-square bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 flex items-center justify-center overflow-hidden shadow-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain p-4 md:p-12 hover:scale-105 transition-transform duration-700 mix-blend-multiply"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: DETAILS SECTION */}
          <div className="lg:col-span-6 space-y-8 md:space-y-10">
            <section className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-6 md:w-8 bg-red-600"></span>
                <span className="text-red-600 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
                  {product.category}
                </span>
              </div>

              {/* Reduced mobile text size from 5xl to 3xl for 320px screens */}
              <h1 className="text-3xl md:text-6xl font-black text-slate-950 leading-[0.9] tracking-tighter uppercase italic">
                {product.name}
              </h1>

              <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium max-w-prose border-l-4 border-slate-100 pl-4 md:pl-6">
                {product.description}
              </p>
            </section>

            {/* SPECS LIST */}
            <section className="pt-6 md:pt-8 border-t border-slate-100">
              <h2 className="text-[9px] md:text-[10px] font-black text-slate-950 mb-4 md:mb-8 uppercase tracking-[0.3em] flex items-center gap-2">
                <FileText className="w-4 h-4 text-red-600" />
                Machine Details
              </h2>
              <div className="grid grid-cols-1">
                {product.specs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-4 md:py-5 border-b border-slate-50 last:border-0 group"
                  >
                    <span className="font-bold text-slate-400 uppercase text-[9px] md:text-[10px] tracking-widest group-hover:text-red-600 transition-colors">
                      {spec.label}
                    </span>
                    <span className="text-slate-950 font-black italic uppercase text-xs md:text-sm">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* CONTACT CARD - Optimized for smaller width */}
            <section className="relative p-6 md:p-10 border-[3px] border-slate-950 rounded-[2rem] md:rounded-[3rem] bg-white shadow-[8px_8px_0px_#dc2626] md:shadow-[12px_12px_0px_#dc2626] group mt-8">
              <div className="relative space-y-6 md:space-y-8">
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                      We are online
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-950 uppercase italic tracking-tighter leading-none">
                    Need more <br /> info?
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed max-w-[280px]">
                    Send us a message to get current pricing and installation
                    details.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 md:py-5 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 md:w-5 md:h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.122.554 4.197 1.604 6.013L0 24l6.135-1.61a11.74 11.74 0 005.911 1.586h.005c6.632 0 12.032-5.391 12.036-12.028a11.787 11.787 0 00-3.535-8.455z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                  <div className="flex justify-between items-center px-1">
                    <span className="text-[8px] md:text-[9px] text-slate-400 font-black uppercase tracking-widest">
                      ID: {product.id.slice(0, 8)}
                    </span>
                    <span className="text-[8px] md:text-[9px] text-red-600 font-black uppercase tracking-widest italic">
                      Fast Reply
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
