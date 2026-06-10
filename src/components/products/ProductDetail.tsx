"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Check, MapPin, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

type ProductDetailProps = {
  name: string;
  breadcrumbName: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  packagingDescription: string;
  ctaTitle: string;
};

export default function ProductDetail({
  name,
  breadcrumbName,
  tagline,
  description,
  image,
  features,
  packagingDescription,
  ctaTitle,
}: ProductDetailProps) {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-muted to-white pb-20 pt-32"
      >
        <div className="container-shell">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-accent"
          >
            <ArrowLeft className="size-4" /> Back to Products
          </Link>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="order-2 lg:order-1"
            >
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"
              >
                <Link href="/home" className="hover:text-primary">
                  Home
                </Link>
                <span>›</span>
                <Link href="/products" className="hover:text-primary">
                  Products
                </Link>
                <span>›</span>
                <span className="text-accent">{breadcrumbName}</span>
              </nav>
              <h1 className="mt-5 font-heading text-5xl font-bold leading-tight text-primary sm:text-6xl">
                {name}
              </h1>
              <p className="mt-5 text-lg font-bold text-accent">{tagline}</p>
              <p className="mt-6 leading-8 text-slate-600">{description}</p>
              <div className="mt-8">
                <Button href="/home#quote">Request Quote</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative order-1 h-80 overflow-hidden rounded-3xl bg-white shadow-2xl sm:h-[32rem] lg:order-2"
            >
              <Image
                src={image}
                alt={name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-accent">
            Product Advantages
          </p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-primary">
            Key Features
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 rounded-2xl border border-green-100 bg-muted p-5"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <Check className="size-4" />
                </span>
                <p className="font-semibold text-primary">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-muted">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <MapPin className="size-9 text-accent" />
              <p className="mt-5 text-xs font-extrabold uppercase tracking-widest text-slate-500">
                Origin
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-primary">
                India
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Sourced from the fertile agricultural regions of South India
              </p>
            </article>
            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <Package className="size-9 text-accent" />
              <p className="mt-5 text-xs font-extrabold uppercase tracking-widest text-slate-500">
                Packaging Options
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-primary">
                25 kg | 50 kg
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Flexible packaging tailored to your market and procurement needs
              </p>
            </article>
          </div>
          <div className="mt-8 rounded-3xl border border-green-100 bg-white p-7 leading-8 text-slate-600 sm:p-9">
            <h2 className="font-heading text-2xl font-bold text-primary">
              Packaging Designed For International Supply
            </h2>
            <p className="mt-4">{packagingDescription}</p>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white">
        <div className="container-shell flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <h2 className="font-heading text-4xl font-bold">{ctaTitle}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/home#quote" variant="light">
              Request Quote
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
