import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import WorldMap from "@/components/ui/WorldMap";
import { markets } from "@/lib/data";

export default function Markets() {
  return (
    <section className="section-space bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Export Markets"
          title="Global Reach, Reliable Supply"
          description="Building dependable trade relationships across high-potential rice markets."
        />
        <Reveal className="mt-12">
          <WorldMap />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map((market, index) => (
            <Reveal key={market.name} delay={index * 0.04}>
              <div className="h-full rounded-r-2xl border-l-4 border-accent bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <span className="text-3xl">{market.flag}</span>
                <h3 className="mt-3 font-bold text-primary">{market.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{market.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
