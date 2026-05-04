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
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-rose-500 text-xs tracking-[0.35em] uppercase mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12 section-heading mx-auto">What Our Clients Say</h2>
        
        <div className={`transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}>
          <div className="flex flex-col items-center bg-white/90 border border-rose-100/80 rounded-3xl px-6 py-10 md:px-12 md:py-12 shadow-2xl shadow-rose-200/50">
            <div className="relative w-20 h-20 rounded-full overflow-hidden mb-5 ring-4 ring-rose-200">
              <Image src={testimonials[current].image} alt={testimonials[current].name} fill className="object-cover" />
            </div>
            <p className="text-gray-600 italic text-lg leading-relaxed mb-6 max-w-2xl">
              &ldquo;{testimonials[current].text}&rdquo;
            </p>
            <h4 className="font-serif font-bold text-gray-900 text-xl">{testimonials[current].name}</h4>
            <div className="flex gap-1 mt-3">
              {[1,2,3,4,5].map(s => <span key={s} className="text-amber-400">&#9733;</span>)}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-rose-500 w-10" : "bg-rose-200 w-2.5"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button onClick={() => go((current - 1 + testimonials.length) % testimonials.length)} className="bg-rose-100/80 hover:bg-rose-200 text-rose-700 px-5 py-2.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase transition-colors">Prev</button>
          <button onClick={() => go((current + 1) % testimonials.length)} className="bg-rose-100/80 hover:bg-rose-200 text-rose-700 px-5 py-2.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase transition-colors">Next</button>
        </div>
      </div>
    </section>
  );
}
