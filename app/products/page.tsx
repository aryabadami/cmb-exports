import type { Metadata } from "next";
import Image from "next/image";
import ContactCTA from "@/components/home/ContactCTA";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Rice Products",
  description:
    "Explore export-grade Sona Masoori Gold, Sona Masoori Silver and Lachkari Kolam rice.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pb-16 pt-36 text-white">
        <div className="absolute inset-0 opacity-20 map-grid" />
        <div className="container-shell relative grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-green-300">
              Premium Indian Rice
            </p>
            <h1 className="mt-4 max-w-3xl font-heading text-5xl font-bold leading-tight sm:text-6xl">
              Rice Varieties For Global Markets
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-green-100">
              Selected non-basmati rice varieties available for bulk buyer
              requirements and custom packing.
            </p>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl bg-white shadow-2xl sm:h-80">
            <Image
              src="/products/all-three-varieties.png"
              alt="CMB Exports rice product range"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain p-3"
            />
          </div>
        </div>
      </section>
      <section className="section-space bg-muted">
        <div className="container-shell space-y-10">
          {products.map((product, index) => (
            <Reveal key={product.name}>
              <article className="grid overflow-hidden rounded-3xl bg-white shadow-sm lg:grid-cols-2">
                <div className={`relative min-h-[24rem] bg-green-50 ${index % 2 ? "lg:order-2" : ""}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-7 sm:p-10">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-accent">
                    Export Grade Rice
                  </p>
                  <h2 className="mt-3 font-heading text-3xl font-bold text-primary">
                    {product.name}
                  </h2>
                  <p className="mt-4 leading-7 text-slate-600">
                    {product.description}
                  </p>
                  <div className="mt-7 overflow-hidden rounded-xl border border-green-100">
                    <table className="w-full text-left text-sm">
                      <tbody>
                        {product.specs
                          .filter(
                            ([label]) =>
                              label !== "Packing" && label !== "Availability",
                          )
                          .map(([label, value]) => (
                          <tr
                            key={label}
                            className="border-b border-green-100 last:border-0"
                          >
                            <th className="bg-muted px-4 py-3 font-bold text-primary">
                              {label}
                            </th>
                            <td className="px-4 py-3 text-slate-600">{value}</td>
                          </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
                    <div>
                      <h3 className="font-bold text-primary">Availability</h3>
                      <p className="mt-1">
                        Thoughtfully prepared and ready for international
                        dispatch — our stocks are maintained year-round to meet
                        your supply commitments without delay.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">
                        Packaging Options
                      </h3>
                      <p className="mt-1">
                        We offer flexible packaging solutions tailored to your
                        market needs:
                      </p>
                      <ul className="mt-2 space-y-1">
                        <li>
                          <strong className="text-primary">25 kg</strong> — Ideal
                          for retail distribution and food service operations
                        </li>
                        <li>
                          <strong className="text-primary">50 kg</strong> —
                          Preferred for wholesale buyers and large-scale
                          procurement
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button href="/contact#quote">Request Specification</Button>
                    <Button
                      href={`/products/${product.slug}`}
                      variant="light"
                      className="border-primary"
                    >
                      Learn More →
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
