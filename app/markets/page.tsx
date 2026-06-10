import type { Metadata } from "next";
import ContactCTA from "@/components/home/ContactCTA";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import WorldMap from "@/components/ui/WorldMap";
import { markets } from "@/lib/data";

export const metadata: Metadata = {
  title: "Export Markets",
  description:
    "Explore CMB Exports target rice markets across the Gulf, Sri Lanka, USA and Europe.",
};

export default function MarketsPage() {
  return (
    <>
      <PageHero
        eyebrow="International Supply"
        title="Connecting Indian Rice With Global Demand"
        description="Our market focus combines strong regional demand with dependable shipment planning and buyer support."
      />
      <section className="section-space bg-white">
        <div className="container-shell">
          <Reveal>
            <WorldMap />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((market, index) => (
              <Reveal key={market.name} delay={index * 0.05}>
                <article className="h-full rounded-2xl border border-green-100 p-7 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg">
                  <span className="text-4xl">{market.flag}</span>
                  <h2 className="mt-4 font-heading text-2xl font-bold text-primary">
                    {market.name}
                  </h2>
                  <p className="mt-2 font-semibold text-accent">
                    {market.detail}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    We support importer, distributor and wholesale requirements
                    with product matching, packing coordination and clear export
                    communication.
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
