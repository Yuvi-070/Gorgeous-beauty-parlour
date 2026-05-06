"use client";
import { useEffect, useRef, useState } from "react";

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

const stats: Stat[] = [
  { label: "Happy Clients", value: 3000, suffix: "+" },
  { label: "Makeup Done", value: 1500, suffix: "+" },
  { label: "Skin Treatments", value: 1000, suffix: "+" },
  { label: "Hair Treatments", value: 600, suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              if (timer) clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsCounter() {
  return (
    <section className="counter-section py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-950/90 via-rose-900/80 to-rose-800/70" />
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card text-white rounded-2xl bg-white/10 border border-white/15 px-4 py-8 backdrop-blur-md text-center">
            <div className="text-4xl md:text-5xl font-bold font-serif mb-3 bg-gradient-to-r from-white to-rose-100 bg-clip-text text-transparent">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-rose-200 text-xs uppercase tracking-[0.3em] font-light">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
