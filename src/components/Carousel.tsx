"use client";

import { Children, ReactNode, useRef } from "react";

interface CarouselProps {
  children: ReactNode;
  itemClassName?: string;
  className?: string;
  controlsClassName?: string;
}

export default function Carousel({
  children,
  itemClassName = "",
  className = "",
  controlsClassName = "",
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.9;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`flex items-center justify-center gap-4 mb-6 ${controlsClassName}`}>
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          className="h-11 w-11 rounded-full border border-rose-200/70 bg-white/90 text-rose-700 text-xl shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md hover:bg-rose-50 flex items-center justify-center"
          aria-label="Scroll carousel left"
        >
          &#8249;
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          className="h-11 w-11 rounded-full border border-rose-200/70 bg-white/90 text-rose-700 text-xl shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md hover:bg-rose-50 flex items-center justify-center"
          aria-label="Scroll carousel right"
        >
          &#8250;
        </button>
      </div>
      <div
        ref={trackRef}
        className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 -mx-2 pb-6"
      >
        {Children.map(children, (child, index) => (
          <div key={index} className={`snap-start flex-shrink-0 ${itemClassName}`}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
