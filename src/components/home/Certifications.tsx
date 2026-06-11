import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section className="section-space bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Compliance"
          title="Export Ready Documentation"
          description="A transparent view of our current registration and documentation readiness."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map(
            ({ icon: Icon, name, status, description }, index) => (
              <Reveal key={name} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-green-100 p-6 shadow-sm">
                  <Icon className="size-9 text-primary" />
                  <h3 className="mt-5 font-heading text-xl font-bold text-primary">
                    {name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                  <span className="mt-4 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-extrabold text-green-700">
                    ✓ {status}
                  </span>
                </div>
              </Reveal>
            ),
          )}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          GST, IEC, APEDA and export compliance documentation are available.
        </p>
      </div>
    </section>
  );
}
