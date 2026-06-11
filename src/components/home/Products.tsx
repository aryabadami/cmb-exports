import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { products } from "@/lib/data";

const badges = ["Old Crop", "Export Grade", "Bulk Available", "Ship Ready"];

export default function Products() {
  return (
    <section className="section-space bg-muted">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Our Products"
          title="Our Premium Rice Varieties"
          description="Carefully sourced varieties prepared for bulk international requirements."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mt-12">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 0.08} className="h-full">
              <div className="flex flex-col h-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-80 flex-shrink-0 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center scale-110"
                  />
                </div>

                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-2 min-h-[3.5rem] leading-tight">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 min-h-[2.5rem]">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {badges.map((badge) => (
                      <span
                        key={badge}
                        className="text-xs bg-green-50 text-green-700 border border-green-200 rounded-full px-3 py-1 flex items-center gap-1"
                      >
                        <Check className="size-3" /> {badge}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col gap-2 pt-2">
                    <Link
                      href="/contact#quote"
                      className="text-green-800 font-semibold hover:text-green-600 flex items-center gap-1"
                    >
                      Request Specification →
                    </Link>
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-green-700 underline hover:text-green-900 text-sm flex items-center gap-1"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
