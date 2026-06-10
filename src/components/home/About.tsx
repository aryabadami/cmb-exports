import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutFeatures } from "@/lib/data";

export default function About() {
  return (
    <section className="section-space bg-white">
      <div className="container-shell grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-green-50 shadow-2xl">
            <Image
              src="/products/all-three-varieties.png"
              alt="CMB Exports Premium Rice"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-4"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="About CMB Exports"
            title="Trusted Rice Trading Network From India"
            description="M/s. C.M. Badami and Sons connects international buyers with premium Indian non-basmati rice through dependable procurement, responsive communication and export-focused operations."
            align="left"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {aboutFeatures.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-r-2xl border-l-4 border-accent bg-muted p-5"
              >
                <Icon className="size-6 text-primary" />
                <h3 className="mt-3 font-bold text-primary">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
