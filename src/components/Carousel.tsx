"use client";

import { Children, ReactNode, useEffect, useRef, useState } from "react";

interface CarouselProps {
  children: ReactNode;
  className?: string;
}

export default function Carousel({ children, className = "" }: CarouselProps) {
  const items = Children.toArray(children);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  // Keep dots in sync with scroll position
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const idx = Math.round(track.scrollLeft / track.clientWidth);
      setActiveIndex(Math.max(0, Math.min(idx, items.length - 1)));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [items.length]);

  // Pointer-based drag (works for both mouse and touch via onPointer* API)
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    track.setPointerCapture(e.pointerId);
    drag.current = { active: true, startX: e.clientX, scrollLeft: track.scrollLeft };
    track.style.scrollSnapType = "none";
    track.style.cursor = "grabbing";
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || !trackRef.current) return;
    trackRef.current.scrollLeft =
      drag.current.scrollLeft + (drag.current.startX - e.clientX);
  };

  const stopDrag = (e?: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || !trackRef.current) return;
    drag.current.active = false;
    const track = trackRef.current;
    if (e) {
      try {
        track.releasePointerCapture(e.pointerId);
      } catch {
        // Pointer may already be released by the browser.
      }
    }
    track.style.cursor = "grab";
    const snapIndex = Math.round(track.scrollLeft / track.clientWidth);
    track.style.scrollSnapType = "x mandatory";
    const targetLeft = snapIndex * track.clientWidth;
    if (Math.abs(track.scrollLeft - targetLeft) > 12) {
      track.scrollTo({ left: targetLeft, behavior: "smooth" });
    }
  };

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  if (items.length === 0) return null;

  return (
    <div className={className}>
      {/* Swipe / drag track — no arrow buttons on the image */}
      <div
        ref={trackRef}
        className="flex overflow-x-auto no-scrollbar select-none rounded-3xl"
        style={{ scrollSnapType: "x mandatory", cursor: "grab" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        aria-live="polite"
        aria-atomic="true"
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex-none w-full"
            style={{ scrollSnapAlign: "start" }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Counter & dots — below the carousel, never over the image */}
      <div className="flex flex-col items-center gap-3 mt-6">
        <span className="text-xs text-rose-400 font-medium tracking-widest uppercase">
          {activeIndex + 1} / {items.length}
        </span>
        <div className="flex gap-2.5">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
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
