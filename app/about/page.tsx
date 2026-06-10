import type { Metadata } from "next";
import Image from "next/image";
import { Eye, Handshake, ShieldCheck, Target } from "lucide-react";
import ContactCTA from "@/components/home/ContactCTA";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CMB Exports and our approach to quality Indian rice sourcing and global buyer partnerships.",
};

const values = [
  [ShieldCheck, "Integrity", "Clear communication and honest trade practices."],
  [Target, "Consistency", "Reliable product and service across every order."],
  [Handshake, "Partnership", "Long-term relationships over short-term transactions."],
  [Eye, "Transparency", "Straightforward product, status and process updates."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CMB Exports"
        title="A Trusted Indian Rice Trading Partner"
        description="Built on trade experience, dependable relationships and a clear commitment to serving international rice buyers."
      />
      <section className="section-space bg-white">
        <div className="container-shell grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-[32rem] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=85"
                alt="Rice supply from India"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Our Story"
              title="Rooted In Trade, Ready For Global Markets"
              align="left"
            />
            <div className="mt-6 space-y-5 leading-8 text-slate-600">
              <p>
                M/s. C.M. Badami and Sons is developing CMB Exports as a
                focused international rice supply business. We combine a
                trusted procurement network with practical export coordination.
              </p>
              <p>
                Our role is to make buying Indian rice straightforward: align
                the right variety to the market, communicate specifications
                clearly, coordinate documentation and support dependable
                dispatch.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section-space bg-muted">
        <div className="container-shell">
          <SectionHeading
            eyebrow="What Guides Us"
            title="Values Built For Long-Term Trade"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([Icon, title, text], index) => {
              const ValueIcon = Icon as typeof ShieldCheck;
              return (
                <Reveal key={title as string} delay={index * 0.06}>
                  <div className="h-full rounded-2xl bg-white p-7 shadow-sm">
                    <ValueIcon className="size-8 text-accent" />
                    <h3 className="mt-5 font-heading text-xl font-bold text-primary">
                      {title as string}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {text as string}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-space bg-white">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-green-100 p-8">
            <p className="text-xs font-extrabold uppercase tracking-widest text-accent">
              Our Mission
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-primary">
              Make Indian rice sourcing dependable for global buyers.
            </h2>
          </div>
          <div className="rounded-3xl bg-primary p-8 text-white">
            <p className="text-xs font-extrabold uppercase tracking-widest text-green-300">
              Our Vision
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold">
              Become a trusted supply partner across key international markets.
            </h2>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
