"use client";
import { useState } from "react";
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
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = (idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  };

  return (
    <section className="py-24 bg-rose-50/70">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-rose-500 text-xs tracking-[0.35em] uppercase mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12 section-heading mx-auto">
          What Our Clients Say
        </h2>

        <div className={`transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}>
          <div className="flex flex-col items-center bg-white/95 border border-rose-100/80 rounded-3xl px-6 py-10 md:px-14 md:py-14 shadow-2xl shadow-rose-200/50 relative">
            <span className="text-8xl text-rose-100 font-serif leading-none absolute top-4 left-6 select-none pointer-events-none">
              &ldquo;
            </span>

            <div className="relative w-28 h-28 rounded-full overflow-hidden mb-6 ring-4 ring-rose-200 shadow-xl">
              <Image
                src={testimonials[current].image}
                alt={testimonials[current].name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex gap-1 mb-5" role="img" aria-label="Rating: 5 out of 5 stars">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-amber-400 text-xl" aria-hidden="true">&#9733;</span>
              ))}
            </div>

            <p className="text-gray-600 italic text-lg leading-relaxed mb-6 max-w-2xl">
              &ldquo;{testimonials[current].text}&rdquo;
            </p>
            <h4 className="font-serif font-bold text-gray-900 text-xl">
              {testimonials[current].name}
            </h4>
            <p className="text-rose-400 text-xs tracking-widest uppercase mt-1">Valued Client</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={() => go((current - 1 + testimonials.length) % testimonials.length)}
            className="h-12 w-12 rounded-full bg-white border border-rose-200/70 text-rose-700 shadow-md hover:bg-rose-50 hover:shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center text-2xl"
            aria-label="Previous testimonial"
          >
            &#8249;
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "bg-rose-500 w-8 h-2.5" : "bg-rose-200 w-2.5 h-2.5 hover:bg-rose-300"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => go((current + 1) % testimonials.length)}
            className="h-12 w-12 rounded-full bg-white border border-rose-200/70 text-rose-700 shadow-md hover:bg-rose-50 hover:shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center text-2xl"
            aria-label="Next testimonial"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}
