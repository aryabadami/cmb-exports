import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import QuoteForm from "@/components/home/QuoteForm";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CMB Exports for premium Indian rice specifications, availability and export quotations.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact CMB Exports"
        title="Start Your Rice Supply Conversation"
        description="Share your destination, product and volume requirements. We will help you plan the next step."
      />
      <section className="section-space bg-white">
        <div className="container-shell grid gap-8 lg:grid-cols-3">
          {[
            [MapPin, "Location", "Karnataka, India"],
            [Phone, "Phone", "+91 90000 00000"],
            [Mail, "Email", "exports@cmbexports.com"],
          ].map(([Icon, title, value]) => {
            const ContactIcon = Icon as typeof MapPin;
            return (
              <div
                key={title as string}
                className="rounded-2xl border border-green-100 p-7"
              >
                <ContactIcon className="size-7 text-accent" />
                <h2 className="mt-4 font-heading text-xl font-bold text-primary">
                  {title as string}
                </h2>
                <p className="mt-2 text-slate-600">{value as string}</p>
              </div>
            );
          })}
        </div>
        <div className="container-shell mt-10 overflow-hidden rounded-3xl border border-green-100">
          <iframe
            title="CMB Exports location in Karnataka, India"
            src="https://www.google.com/maps?q=Karnataka%2C%20India&output=embed"
            className="h-96 w-full"
            loading="lazy"
          />
        </div>
      </section>
      <QuoteForm />
    </>
  );
}
