import type { Metadata } from "next";
import About from "@/components/home/About";
import Certifications from "@/components/home/Certifications";
import ContactCTA from "@/components/home/ContactCTA";
import Hero from "@/components/home/Hero";
import Markets from "@/components/home/Markets";
import Products from "@/components/home/Products";
import QuoteForm from "@/components/home/QuoteForm";
import Stats from "@/components/home/Stats";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export const metadata: Metadata = {
  title: "Premium Indian Rice Exporter",
  description:
    "CMB Exports supplies premium Sona Masoori and Lachkari Kolam rice with export-ready logistics from India.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Stats />
      <Markets />
      <WhyChooseUs />
      <Certifications />
      <QuoteForm />
      <ContactCTA />
    </>
  );
}
