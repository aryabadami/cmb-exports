import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import ContactCTA from "@/components/home/ContactCTA";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { certifications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "View CMB Exports registration, compliance and export documentation status.",
};

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Documentation & Compliance"
        title="Transparent Export Readiness"
        description="A clear view of our current registrations and the documentation workflow prepared for international trade."
      />
      <section className="section-space bg-muted">
        <div className="container-shell grid gap-6 md:grid-cols-2">
          {certifications.map(
            ({ icon: Icon, name, status, description }, index) => (
              <Reveal key={name} delay={index * 0.05}>
                <article className="flex h-full gap-5 rounded-3xl bg-white p-7 shadow-sm">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                    <Icon className="size-7" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="font-heading text-2xl font-bold text-primary">
                        {name}
                      </h2>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-extrabold text-green-800">
                        {status}
                      </span>
                    </div>
                    <p className="mt-3 leading-7 text-slate-600">
                      {description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ),
          )}
        </div>
      </section>
      <section className="section-space bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-accent">
              Shipment Checklist
            </p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-primary">
              Prepared For Clear Export Coordination
            </h2>
          </div>
          <div className="space-y-4">
            {[
              ["Commercial documentation workflow", true],
              ["Product and packing confirmation", true],
              ["Quality inspection coordination", true],
              ["IEC registration", true],
              ["APEDA registration", true],
            ].map(([label, ready]) => (
              <div
                key={label as string}
                className="flex items-center gap-3 rounded-xl border border-green-100 p-4"
              >
                {ready && <CheckCircle2 className="size-5 text-accent" />}
                <span className="font-semibold text-slate-700">
                  {label as string}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
