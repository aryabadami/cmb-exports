import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyUs } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="section-space bg-muted">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Our Advantage"
          title="Why Partner With CMB Exports"
          description="Practical export support built for reliable, long-term buyer relationships."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-transparent bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-lg">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary text-white">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-primary">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
