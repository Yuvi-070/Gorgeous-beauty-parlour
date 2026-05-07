import HeroSlider from "@/components/HeroSlider";
import StatsCounter from "@/components/StatsCounter";
import TestimonialSlider from "@/components/TestimonialSlider";
import ServiceCard from "@/components/ServiceCard";
import Carousel from "@/components/Carousel";
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

      <section className="py-24 bg-white/90">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-rg-500 text-xs tracking-[0.35em] uppercase mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 section-heading mx-auto leading-tight">
              Welcome to Gorgeous Beauty Parlour
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-14 items-center justify-items-center">
            <div className="relative h-80 md:h-[420px] w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl shadow-rg-200/60 order-1 md:order-none">
              <Image
                src="/images/Gorgeous/why-choose.jpg"
                alt="Why Choose Gorgeous"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="text-center max-w-xl mx-auto">
              <p className="text-gray-600 leading-relaxed mb-4">
                Located in the heart of Bhosari, Pune, Gorgeous Beauty Parlour has been a trusted name in beauty and wellness for over a decade. We offer a comprehensive range of services tailored to bring out the best in you.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From advanced hair treatments and professional makeup to luxurious facials and spa therapies, our skilled team ensures you leave feeling rejuvenated and beautiful.
              </p>
              <Link href="/about" className="inline-block bg-gradient-to-r from-rg-600 via-rg-500 to-rg-400 hover:from-rg-700 hover:via-rg-600 hover:to-rg-500 text-white text-xs font-semibold tracking-[0.24em] uppercase px-10 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-rg-300/50 hover:shadow-xl hover:shadow-rg-300/60 hover:-translate-y-0.5">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-rg-50/80">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-rg-500 text-xs tracking-[0.35em] uppercase mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 section-heading mx-auto">Our Services</h2>
          </div>
          <Carousel>
            {services.map((s) => (
              <ServiceCard key={s.title} title={s.title} image={s.image} />
            ))}
          </Carousel>
        </div>
      </section>

      <StatsCounter />

      <section className="py-24 bg-white/90">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-rg-500 text-xs tracking-[0.35em] uppercase mb-3">Our Space</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 section-heading mx-auto">Our Salon</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 justify-items-center">
            <div className="img-zoom relative h-72 w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl shadow-rg-200/50">
              <Image
                src="/images/Gorgeous/oursalon.jpg"
                alt="Our Salon"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="img-zoom relative h-72 w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl shadow-rg-200/50">
              <Image
                src="/images/Gorgeous/oursalon2.jpg"
                alt="Our Salon Interior"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      <section className="py-20 bg-gradient-to-r from-rg-700 via-rg-600 to-rg-500 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready for a Gorgeous Makeover?</h2>
          <p className="text-rg-100 mb-10 text-lg max-w-xl mx-auto">Visit us today or call to book your appointment</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919822186362" className="bg-white text-rg-700 text-xs font-semibold tracking-[0.2em] uppercase px-10 py-4 rounded-full hover:bg-rg-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
              Call Us Now
            </a>
            <Link href="/contacts" className="border-2 border-white text-white text-xs font-semibold tracking-[0.2em] uppercase px-10 py-4 rounded-full hover:bg-white hover:text-rg-700 transition-all duration-300 hover:-translate-y-0.5">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
