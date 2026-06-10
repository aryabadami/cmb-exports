import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { products } from "@/lib/data";

type Product = (typeof products)[number];

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-green-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-64 w-full overflow-hidden rounded-t-xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-7">
        <h3 className="font-heading text-2xl font-bold text-primary">
          {product.name}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {product.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {["Old Crop", "Export Grade", "Bulk Available", "Ship Ready"].map(
            (badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-[11px] font-bold text-primary"
              >
                <Check className="size-3 text-accent" /> {badge}
              </span>
            ),
          )}
        </div>
        <div className="mt-6 flex flex-col items-start gap-3">
          <Link
            href="/contact#quote"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-primary transition hover:text-accent"
          >
            Request Specification <ArrowRight className="size-4" />
          </Link>
          <Link
            href={`/products/${product.slug}`}
            className="text-sm font-bold text-green-700 underline decoration-green-300 underline-offset-4 transition hover:text-green-900"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </article>
  );
}
