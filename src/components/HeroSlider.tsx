"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/images/Gorgeous/carousal.jpg",
    title: "Welcome to Gorgeous Beauty Parlour",
    subtitle: "Your Premier Beauty Destination in Pune",
    cta: "Explore Services",
    href: "/about",
  },
  {
    image: "/images/Gorgeous/carousal2.jpg",
    title: "Professional Beauty & Wellness",
    subtitle: "Hair, Skin, Spa & Much More",
    cta: "Our Amenities",
    href: "/amenities",
  },
  {
    image: "/images/Gorgeous/oursalon.jpg",
    title: "Experience Luxury Beauty Care",
    subtitle: "Serving Pune with Love for Over 10 Years",
    cta: "Contact Us",
    href: "/contacts",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[92vh] min-h-[560px] overflow-hidden bg-neutral-950">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-5">
            <span className="text-rose-200 text-xs tracking-[0.4em] uppercase mb-4 font-light">Beauty & Wellness</span>
            <h1 className="text-white text-4xl md:text-6xl font-serif font-bold mb-5 drop-shadow-xl max-w-4xl leading-tight">
              {slide.title}
            </h1>
            <p className="text-gray-100 text-lg md:text-xl mb-9 max-w-2xl">{slide.subtitle}</p>
            <Link
              href={slide.href}
              className="bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold tracking-[0.2em] uppercase px-9 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-rose-500/30"
            >
              {slide.cta}
            </Link>
          </div>
        </div>
      ))}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-rose-400 w-10" : "bg-white/60 w-2.5"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
      <button
        onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 text-white p-3 rounded-full transition-colors border border-white/20 backdrop-blur"
        aria-label="Previous"
      >
        &#8249;
      </button>
      <button
        onClick={() => setCurrent((c) => (c + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 text-white p-3 rounded-full transition-colors border border-white/20 backdrop-blur"
        aria-label="Next"
      >
        &#8250;
      </button>
    </div>
  );
}
