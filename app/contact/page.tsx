import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
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
        <div className="container-shell grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              Icon: MapPin,
              title: "Location",
              value: "Karnataka, India",
              href: null,
            },
            {
              Icon: Phone,
              title: "Phone",
              value: "+91 78927 55421",
              href: "tel:+917892755421",
            },
            {
              Icon: Phone,
              title: "Phone",
              value: "+91 70220 65539",
              href: "tel:+917022065539",
            },
            {
              Icon: Mail,
              title: "Email",
              value: "cmb@cmbfoodsandgrains.com",
              href: "mailto:cmb@cmbfoodsandgrains.com",
            },
            {
              Icon: MessageCircle,
              title: "WhatsApp",
              value: "+91 78927 55421",
              href: "https://wa.me/917892755421",
            },
          ].map(({ Icon, title, value, href }) => {
            const ContactIcon = Icon as typeof MapPin;
            const content = href ? (
              <a
                href={href}
                target={href.startsWith("https://") ? "_blank" : undefined}
                rel={href.startsWith("https://") ? "noreferrer" : undefined}
                className="mt-2 block text-slate-600 transition hover:text-accent"
              >
                {value}
              </a>
            ) : (
              <p className="mt-2 text-slate-600">{value}</p>
            );

            return (
              <div
                key={`${title}-${value}`}
                className="rounded-2xl border border-green-100 p-7"
              >
                <ContactIcon className="size-7 text-accent" />
                <h2 className="mt-4 font-heading text-xl font-bold text-primary">
                  {title}
                </h2>
                {content}
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
