"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 3, suffix: "+", label: "Rice Varieties" },
  { value: 7, suffix: "+", label: "Export Markets" },
  { value: 100, suffix: "%", label: "Quality Focused" },
  { value: 24, suffix: "/7", label: "Buyer Support" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const duration = 1200;
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-primary py-14 text-white">
      <div className="container-shell grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/15 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-primary px-4 py-8 text-center">
            <p className="font-heading text-4xl font-bold sm:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-green-200">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
