"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

const stats = [
  ["3+", "Rice Varieties"],
  ["7+", "Export Markets"],
  ["100%", "Quality Focused"],
  ["24/7", "Buyer Support"],
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-dark via-primary to-green-700 text-white">
      <div className="absolute inset-0 opacity-20 map-grid" />
      <div className="container-shell relative z-10 grid items-center gap-12 pb-44 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] backdrop-blur-md">
            Export Ready • GST Registered
          </span>
          <h1 className="mt-7 max-w-3xl font-heading text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Trusted Supplier of Premium Indian Rice Worldwide
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-green-100 sm:text-lg">
            Supplying Sona Masoori Gold, Sona Masoori Silver and Lachkari Kolam
            Rice with reliable sourcing and export-ready logistics.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/contact#quote">Request Quote</Button>
            <Button href="/products" variant="outline">
              View Products
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative hidden h-[34rem] w-full overflow-hidden rounded-2xl bg-white/95 shadow-2xl lg:block"
        >
          <Image
            src="/products/all-three-varieties.png"
            alt="CMB Exports Rice Varieties"
            fill
            priority
            sizes="45vw"
            className="object-contain p-4"
          />
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-dark/65 backdrop-blur-md">
        <div className="container-shell grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="px-3 py-5 text-center sm:py-7">
              <p className="font-heading text-2xl font-bold text-white sm:text-3xl">
                {value}
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-green-200 sm:text-xs">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
