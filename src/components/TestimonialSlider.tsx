"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Arpita Dixit",
    image: "/images/Gorgeous/test1.jpg",
    text: "Punctuality, very friendly always ready if emergency makeup is required and my most favourite place for relaxation. And I am visiting parlour since from last 10 years and I am permanent customer of Gorgeous parlour, never, ever I will change parlour because best and quality service.",
  },
  {
    name: "Vrushali Gunjal",
    image: "/images/Gorgeous/test2.jpg",
    text: "Great experience here from the start to the end. Every staff member is friendly and warm. Loved how my hair came out. Everyone there was so nice and welcoming. Definitely recommend.",
  },
  {
    name: "Suvarna Tadigadapa",
    image: "/images/Gorgeous/test3.jpg",
    text: "I have been visiting for past 6yrs..wonderful experience",
  },
  {
    name: "Lumbini Kamble",
    image: "/images/Gorgeous/test%204.jpg",
    text: "Awesome experience... Feeling relaxed .. good service...",
  },
];

export default function TestimonialSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const idx = Math.round(track.scrollLeft / track.clientWidth);
      setActiveIndex(Math.max(0, Math.min(idx, testimonials.length - 1)));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

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
    if (e && track.hasPointerCapture(e.pointerId)) {
      track.releasePointerCapture(e.pointerId);
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

  return (
    <section className="py-24 bg-rose-50/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-rose-500 text-xs tracking-[0.35em] uppercase mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12 section-heading mx-auto">
          What Our Clients Say
        </h2>

        {/* Swipe/drag carousel — no arrow buttons */}
        <div
          ref={trackRef}
          className="flex overflow-x-auto no-scrollbar select-none"
          style={{ scrollSnapType: "x mandatory", cursor: "grab" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={stopDrag}
          onPointerCancel={stopDrag}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="flex-none w-full px-1" style={{ scrollSnapAlign: "start" }}>
              <div className="flex flex-col items-center bg-white/95 border border-rose-100/80 rounded-3xl px-6 py-10 md:px-14 md:py-14 shadow-2xl shadow-rose-200/50 relative">
                <span className="text-8xl text-rose-100 font-serif leading-none absolute top-4 left-6 select-none pointer-events-none">
                  &ldquo;
                </span>

                <div className="relative w-28 h-28 rounded-full overflow-hidden mb-6 ring-4 ring-rose-200 shadow-xl">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>

                <div className="flex gap-1 mb-5" role="img" aria-label="Rating: 5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-amber-400 text-xl" aria-hidden="true">&#9733;</span>
                  ))}
                </div>

                <p className="text-gray-600 italic text-lg leading-relaxed mb-6 max-w-2xl">
                  &ldquo;{t.text}&rdquo;
                </p>
                <h4 className="font-serif font-bold text-gray-900 text-xl">{t.name}</h4>
                <p className="text-rose-400 text-xs tracking-widest uppercase mt-1">Valued Client</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots only — no arrow buttons */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-rose-500 w-8 h-2.5" : "bg-rose-200 w-2.5 h-2.5 hover:bg-rose-300"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
