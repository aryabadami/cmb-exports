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
  const contactCards = [
    {
      Icon: MapPin,
      title: "Location",
      content: <p className="mt-2 text-slate-600">Karnataka, India</p>,
    },
    {
      Icon: Phone,
      title: "Phone",
      content: (
        <div className="mt-2 space-y-1 text-slate-600">
          <p>+91 78927 55421</p>
          <p>+91 70220 65539</p>
        </div>
      ),
    },
    {
      Icon: Mail,
      title: "Email",
      content: (
        <a
          href="mailto:cmb@cmbfoodsandgrains.com"
          className="mt-2 block text-slate-600 transition hover:text-accent"
        >
          cmb@cmbfoodsandgrains.com
        </a>
      ),
    },
    {
      Icon: MessageCircle,
      title: "WhatsApp",
      content: (
        <div className="mt-2 space-y-1">
          <a
            href="https://wa.me/917892755421"
            target="_blank"
            rel="noreferrer"
            className="block text-slate-600 transition hover:text-accent"
          >
            +91 78927 55421
          </a>
          <a
            href="https://wa.me/917022065539"
            target="_blank"
            rel="noreferrer"
            className="block text-slate-600 transition hover:text-accent"
          >
            +91 70220 65539
          </a>
        </div>
      ),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact CMB Exports"
        title="Start Your Rice Supply Conversation"
        description="Share your destination, product and volume requirements. We will help you plan the next step."
      />
      <section className="section-space bg-white">
        <div className="container-shell grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactCards.map(({ Icon, title, content }) => {
            const ContactIcon = Icon;
            return (
              <div
                key={title}
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
