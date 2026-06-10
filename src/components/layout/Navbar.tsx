"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white shadow-lg shadow-black/5" : "bg-transparent"
      }`}
    >
      <nav className="container-shell flex h-20 items-center justify-between">
        <Link href="/home" className="flex items-center gap-3">
          <div className="relative h-12 w-[4.5rem] overflow-hidden rounded-xl border-2 border-green-600 bg-white shadow-sm">
            <Image
              src="/logo.png"
              alt="CMB Exports"
              fill
              sizes="72px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <span
              className={`block font-heading text-xl font-bold ${solid ? "text-primary" : "text-white"}`}
            >
              CMB Exports
            </span>
            <span
              className={`hidden text-[10px] font-bold uppercase tracking-[0.18em] sm:block ${solid ? "text-slate-500" : "text-green-100"}`}
            >
              Trust • Quality • Tradition
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition hover:text-accent ${
                pathname === link.href
                  ? "text-accent"
                  : solid
                    ? "text-slate-700"
                    : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#quote"
            className="rounded-full bg-accent px-5 py-3 text-sm font-bold text-white transition hover:scale-[1.03] hover:bg-green-600"
          >
            Request Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={`rounded-lg p-2 lg:hidden ${solid ? "text-primary" : "text-white"}`}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${open ? "max-h-[32rem] border-t border-green-100" : "max-h-0"}`}
      >
        <div className="container-shell flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-semibold text-slate-700 hover:bg-muted hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#quote"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg bg-accent px-4 py-3 text-center font-bold text-white"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
