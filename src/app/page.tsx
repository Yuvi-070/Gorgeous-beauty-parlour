import HeroSlider from "@/components/HeroSlider";
import StatsCounter from "@/components/StatsCounter";
import TestimonialSlider from "@/components/TestimonialSlider";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Advance Hair-Cut", image: "/images/Gorgeous/advance-haircut.jpg" },
  { title: "Facial", image: "/images/Gorgeous/facial-370x370.jpg" },
  { title: "SPA", image: "/images/Gorgeous/spa.jpeg" },
  { title: "Body Wax", image: "/images/Gorgeous/body-wax.jpeg" },
  { title: "Professional Make-Up", image: "/images/Gorgeous/Pro-makeup.jpeg" },
  { title: "Hair Extension", image: "/images/Gorgeous/hair-ext.jpeg" },
  { title: "Bridal", image: "/images/Gorgeous/bridal.jpeg" },
  { title: "Hair Coloring", image: "/images/Gorgeous/hair-color.jpeg" },
  { title: "Hair Styling", image: "/images/Gorgeous/hair-style.jpg" },
  { title: "Chemical Treatments", image: "/images/Gorgeous/chemical.jpeg" },
  { title: "Advance Manicures & Pedicures", image: "/images/Gorgeous/mani-pedi.jpg" },
  { title: "Body Polishing", image: "/images/Gorgeous/body-polish.jpeg" },
  { title: "Re-Bonding", image: "/images/Gorgeous/hair-rebond.jpg" },
  { title: "Smoothening", image: "/images/Gorgeous/hair-smooth.jpg" },
  { title: "Keratin Treatment", image: "/images/Gorgeous/keratin.jpeg" },
  { title: "Botox", image: "/images/Gorgeous/botox.jpeg" },
  { title: "Nano Plastic Treatment", image: "/images/Gorgeous/nano.jpg" },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-pink-500 text-sm tracking-widest uppercase mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6 section-heading">
              Welcome to Gorgeous Beauty Parlour
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Located in the heart of Bhosari, Pune, Gorgeous Beauty Parlour has been a trusted name in beauty and wellness for over a decade. We offer a comprehensive range of services tailored to bring out the best in you.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              From advanced hair treatments and professional makeup to luxurious facials and spa therapies, our skilled team ensures you leave feeling rejuvenated and beautiful.
            </p>
            <Link href="/about" className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold px-8 py-3 rounded-full transition-colors duration-300">
              Learn More
            </Link>
          </div>
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/Gorgeous/why-choose.jpg" alt="Why Choose Gorgeous" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-pink-500 text-sm tracking-widest uppercase mb-2">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 section-heading mx-auto">Our Services</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} title={s.title} image={s.image} />
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-pink-500 text-sm tracking-widest uppercase mb-2">Our Space</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 section-heading mx-auto">Our Salon</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/Gorgeous/oursalon.jpg" alt="Our Salon" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/Gorgeous/oursalon2.jpg" alt="Our Salon Interior" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      <section className="py-16 bg-pink-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready for a Gorgeous Makeover?</h2>
          <p className="text-pink-100 mb-8">Visit us today or call to book your appointment</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919822186362" className="bg-white text-pink-700 font-bold px-8 py-3 rounded-full hover:bg-pink-50 transition-colors">
              Call Us Now
            </a>
            <Link href="/contacts" className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-pink-700 transition-colors">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
