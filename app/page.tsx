"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export default function WelcomePage() {
  const router = useRouter();
  const [fading, setFading] = useState(false);
  const isLeavingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const enteredFromSite = sessionStorage.getItem("enteredSite");
    const navigationType = window.performance?.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;
    const isReload = navigationType?.type === "reload";

    if (isReload) {
      sessionStorage.removeItem("enteredSite");
      return;
    }

    if (enteredFromSite) {
      router.push("/home");
    }
  }, [router]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleEnter = useCallback(() => {
    if (isLeavingRef.current) return;

    isLeavingRef.current = true;
    sessionStorage.setItem("enteredSite", "true");
    setFading(true);

    timeoutRef.current = setTimeout(() => {
      router.push("/home");
    }, 500);
  }, [router]);

  return (
    <AnimatePresence>
      {!fading && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex h-screen w-screen items-center justify-center overflow-hidden bg-dark text-center text-white"
        >
          <Image
            src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=2200&q=90"
            alt="Rice field"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-dark/30" />

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="relative z-10 mx-auto max-w-5xl px-6"
          >
            <span className="inline-flex rounded-full border border-[#D4AF37]/60 bg-[#D4AF37]/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#F4D76B] backdrop-blur-sm">
              Est. Since Generations
            </span>
            <h1 className="mt-7 font-heading text-5xl font-bold leading-tight sm:text-7xl lg:text-8xl">
              <span className="block text-3xl font-medium sm:text-5xl">
                Welcome to
              </span>
              <span className="mt-2 block whitespace-nowrap">C.M.B</span>
              <span className="block whitespace-nowrap">Foods &amp; Grains</span>
            </h1>
            <p className="mt-6 text-base text-slate-200 sm:text-xl">
              Your Reliable Partner in Premium Rice Exports
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] sm:text-sm">
              Trust • Quality • Tradition
            </p>
            <div className="mx-auto my-7 h-px w-24 bg-[#D4AF37]" />
            <button
              type="button"
              onClick={handleEnter}
              className="rounded-sm border border-[#D4AF37] px-9 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#D4AF37] hover:text-dark"
            >
              Explore Now →
            </button>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
