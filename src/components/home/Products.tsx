import ProductCard from "@/components/ui/ProductCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { products } from "@/lib/data";

export default function Products() {
  return (
    <section className="section-space bg-muted">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Our Products"
          title="Our Premium Rice Varieties"
          description="Carefully sourced varieties prepared for bulk international requirements."
        />
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 0.08}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
