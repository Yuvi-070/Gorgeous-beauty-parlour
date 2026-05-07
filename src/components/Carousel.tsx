"use client";

import { Children, ReactNode, useRef, useState } from "react";

interface CarouselProps {
  children: ReactNode;
  className?: string;
}

export default function Carousel({ children, className = "" }: CarouselProps) {
  const items = Children.toArray(children);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

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
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null;
    touchEndX.current = null;
  };
  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0]?.clientX ?? null;
    if (touchStartX.current === null || touchEndX.current === null) return;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) < 50) return;
    if (delta > 0) next();
    else prev();
  };

  if (items.length === 0) return null;

  return (
    <div className={`relative ${className}`}>
      {/* Slide area */}
      <div
        className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={`transition-all duration-300 ${animating ? "opacity-0 scale-[0.99]" : "opacity-100 scale-100"}`}
          aria-live="polite"
          aria-atomic="true"
        >
          {items[current]}
        </div>

        {/* Prev arrow — overlaid on left edge */}
        <button
          type="button"
          onClick={prev}
          className="carousel-arrow absolute left-4 top-1/2 -translate-y-1/2 z-10 h-14 w-14 rounded-full bg-white/90 text-rg-700 shadow-2xl hover:bg-rg-600 hover:text-white flex items-center justify-center text-3xl border border-rg-200/50 backdrop-blur-sm"
          aria-label="Previous"
        >
          &#8249;
        </button>

        {/* Next arrow — overlaid on right edge */}
        <button
          type="button"
          onClick={next}
          className="carousel-arrow absolute right-4 top-1/2 -translate-y-1/2 z-10 h-14 w-14 rounded-full bg-white/90 text-rg-700 shadow-2xl hover:bg-rg-600 hover:text-white flex items-center justify-center text-3xl border border-rg-200/50 backdrop-blur-sm"
          aria-label="Next"
        >
          &#8250;
        </button>
      </div>

      {/* Counter & Dots */}
      <div className="flex flex-col items-center gap-3 mt-6">
        <span className="text-xs text-rg-400 font-medium tracking-widest uppercase">
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
                  ? "bg-rg-500 w-10 h-2.5 shadow-sm shadow-rg-300"
                  : "bg-rg-200 w-2.5 h-2.5 hover:bg-rg-400"
              }`}
              aria-label={`Go to item ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
