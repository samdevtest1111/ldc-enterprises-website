import Link from "next/link";
import { products } from "@/data/products";
import Hero from "@/components/Hero"; // Import our new high-profile hero

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Featured Machinery */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">
              Featured Machinery
            </h2>
            <p className="text-slate-500 mt-4 text-lg">
              Precision-engineered systems designed for high-volume 24/7
              production environments.
            </p>
          </div>
          <Link
            href="/machinery"
            className="text-red-600 font-bold hover:text-black transition-colors flex items-center gap-2"
          >
            Full Catalog &rarr;
          </Link>
        </div>

        {/* Rest of your sections... */}
      </section>
    </main>
  );
}
