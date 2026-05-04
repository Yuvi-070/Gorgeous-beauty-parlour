"use client";

import { Children, ReactNode, useState } from "react";

interface CarouselProps {
  children: ReactNode;
  className?: string;
}

export default function Carousel({ children, className = "" }: CarouselProps) {
  const items = Children.toArray(children);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = (idx: number) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  };

  const prev = () => go((current - 1 + items.length) % items.length);
  const next = () => go((current + 1) % items.length);

  if (items.length === 0) return null;

  return (
    <div className={`relative ${className}`}>
      {/* Slide area */}
      <div className="relative">
        <div
          className={`transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}
          aria-live="polite"
          aria-atomic="true"
        >
          {items[current]}
        </div>

        {/* Prev arrow */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/90 text-rose-700 shadow-xl hover:bg-rose-50 hover:scale-110 transition-all duration-200 flex items-center justify-center text-2xl border border-rose-200/70 backdrop-blur-sm"
          aria-label="Previous"
        >
          &#8249;
        </button>

        {/* Next arrow */}
        <button
          type="button"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/90 text-rose-700 shadow-xl hover:bg-rose-50 hover:scale-110 transition-all duration-200 flex items-center justify-center text-2xl border border-rose-200/70 backdrop-blur-sm"
          aria-label="Next"
        >
          &#8250;
        </button>
      </div>

      {/* Counter & Dots */}
      <div className="flex flex-col items-center gap-3 mt-5">
        <span className="text-xs text-rose-400 font-medium tracking-widest uppercase">
          {current + 1} / {items.length}
        </span>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-rose-500 w-8 h-2.5"
                  : "bg-rose-200 w-2.5 h-2.5 hover:bg-rose-300"
              }`}
              aria-label={`Go to item ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
