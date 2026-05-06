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
    }, 350);
  };

  const prev = () => go((current - 1 + items.length) % items.length);
  const next = () => go((current + 1) % items.length);

  if (items.length === 0) return null;

  return (
    <div className={`relative w-full ${className}`}>
      {/* Slide area */}
      <div className="relative w-full rounded-3xl overflow-hidden">
        <div
          className={`transition-opacity duration-350 ${animating ? "opacity-0 scale-[0.99]" : "opacity-100 scale-100"} transition-all`}
          aria-live="polite"
          aria-atomic="true"
        >
          {items[current]}
        </div>

        {/* Prev arrow — overlaid on left edge */}
        <button
          type="button"
          onClick={prev}
          className="carousel-arrow absolute left-4 top-1/2 -translate-y-1/2 z-10 h-14 w-14 rounded-full bg-white/90 text-rose-700 shadow-2xl hover:bg-rose-600 hover:text-white flex items-center justify-center text-3xl border border-rose-200/50 backdrop-blur-sm"
          aria-label="Previous"
        >
          &#8249;
        </button>

        {/* Next arrow — overlaid on right edge */}
        <button
          type="button"
          onClick={next}
          className="carousel-arrow absolute right-4 top-1/2 -translate-y-1/2 z-10 h-14 w-14 rounded-full bg-white/90 text-rose-700 shadow-2xl hover:bg-rose-600 hover:text-white flex items-center justify-center text-3xl border border-rose-200/50 backdrop-blur-sm"
          aria-label="Next"
        >
          &#8250;
        </button>
      </div>

      {/* Counter & Dots */}
      <div className="flex flex-col items-center gap-3 mt-6">
        <span className="text-xs text-rose-400 font-medium tracking-widest uppercase">
          {current + 1} / {items.length}
        </span>
        <div className="flex gap-2.5">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-rose-500 w-10 h-2.5 shadow-sm shadow-rose-300"
                  : "bg-rose-200 w-2.5 h-2.5 hover:bg-rose-400"
              }`}
              aria-label={`Go to item ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
