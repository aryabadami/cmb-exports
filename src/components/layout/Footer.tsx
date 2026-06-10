import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Products",
    links: [
      ["Sona Masoori Gold", "/products"],
      ["Sona Masoori Silver", "/products"],
      ["Lachkari Kolam", "/products"],
    ],
  },
  {
    title: "Markets",
    links: [
      ["UAE", "/markets"],
      ["Oman", "/markets"],
      ["Kuwait", "/markets"],
      ["USA", "/markets"],
      ["Saudi Arabia", "/markets"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Products", "/products"],
      ["Certifications", "/certifications"],
      ["Contact", "/contact"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-shell grid gap-12 py-16 lg:grid-cols-[1.4fr_2fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-16 w-24 overflow-hidden rounded-xl border-2 border-green-700 bg-white shadow-sm">
              <Image
                src="/logo.png"
                alt="CMB Exports"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-heading text-2xl font-bold">CMB Exports</p>
              <p className="text-xs uppercase tracking-[0.2em] text-green-300">
                Trust • Quality • Tradition
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-md leading-7 text-slate-300">
            M/s. C.M. Badami and Sons supplies premium Indian rice through
            dependable sourcing and export-focused operations.
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              Karnataka, India
            </p>
            <a className="flex gap-3 hover:text-white" href="tel:+917892755421">
              <Phone className="size-4 text-accent" /> +91 78927 55421
            </a>
            <a className="flex gap-3 hover:text-white" href="tel:+917022065539">
              <Phone className="size-4 text-accent" /> +91 70220 65539
            </a>
            <a
              className="flex gap-3 hover:text-white"
              href="https://wa.me/917892755421"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="size-4 text-accent" /> +91 78927 55421
            </a>
            <a
              className="flex gap-3 hover:text-white"
              href="mailto:cmb@cmbfoodsandgrains.com"
            >
              <Mail className="size-4 text-accent" /> cmb@cmbfoodsandgrains.com
            </a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-heading text-lg font-bold">{column.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="transition hover:text-accent">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        © 2025 M/s. C.M. Badami and Sons. All rights reserved.
      </div>
    </footer>
  );
}
