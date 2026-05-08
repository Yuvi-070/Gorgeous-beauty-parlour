"use client";

import { Children, ReactNode, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface CarouselProps {
  children: ReactNode;
  className?: string;
}

export default function Carousel({ children, className = "" }: CarouselProps) {
  const items = Children.toArray(children);
  const [current, setCurrent] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (items.length === 0) return null;

  return (
    <div className={`relative ${className}`}>
      <div className="relative w-full max-w-5xl mx-auto rounded-3xl">
        <div className="overflow-hidden rounded-3xl touch-pan-y" ref={emblaRef}>
          <div className="flex">
            {items.map((item, i) => (
              <div key={i} className="min-w-0 flex-[0_0_100%]" aria-live={i === current ? "polite" : undefined}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          className="carousel-arrow absolute left-4 top-1/2 -translate-y-1/2 z-10 h-14 w-14 rounded-full bg-white/90 text-rg-700 shadow-2xl hover:bg-rg-600 hover:text-white flex items-center justify-center text-3xl border border-rg-200/50 backdrop-blur-sm"
          aria-label="Previous"
        >
          &#8249;
        </button>

        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          className="carousel-arrow absolute right-4 top-1/2 -translate-y-1/2 z-10 h-14 w-14 rounded-full bg-white/90 text-rg-700 shadow-2xl hover:bg-rg-600 hover:text-white flex items-center justify-center text-3xl border border-rg-200/50 backdrop-blur-sm"
          aria-label="Next"
        >
          &#8250;
        </button>
      </div>

      <div className="flex flex-col items-center gap-3 mt-6">
        <span className="text-xs text-rg-400 font-medium tracking-widest uppercase">
          {current + 1} / {items.length}
        </span>
        <div className="flex gap-2.5">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
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
