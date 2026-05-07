import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import ServiceCard from "@/components/ServiceCard";

const services = [
  { title: "Advance Hair-Cut", image: "/images/Gorgeous/advance-haircut.jpg", desc: "Expert haircuts tailored to your face shape and style." },
  { title: "Facial", image: "/images/Gorgeous/facial-370x370.jpg", desc: "Rejuvenating facials for glowing, healthy skin." },
  { title: "SPA", image: "/images/Gorgeous/spa.jpeg", desc: "Relaxing spa treatments for mind and body wellness." },
  { title: "Body Wax", image: "/images/Gorgeous/body-wax.jpeg", desc: "Smooth, long-lasting hair removal services." },
  { title: "Professional Make-Up", image: "/images/Gorgeous/Pro-makeup.jpeg", desc: "Professional makeup for all occasions." },
  { title: "Hair Extension", image: "/images/Gorgeous/hair-ext.jpeg", desc: "High-quality extensions for volume and length." },
  { title: "Bridal", image: "/images/Gorgeous/bridal.jpeg", desc: "Complete bridal packages for your special day." },
  { title: "Hair Coloring", image: "/images/Gorgeous/hair-color.jpeg", desc: "Vibrant, long-lasting professional hair color." },
  { title: "Hair Styling", image: "/images/Gorgeous/hair-style.jpg", desc: "Creative styling for any look or occasion." },
  { title: "Chemical Treatments", image: "/images/Gorgeous/chemical.jpeg", desc: "Advanced chemical treatments for hair transformation." },
  { title: "Advance Manicures & Pedicures", image: "/images/Gorgeous/mani-pedi.jpg", desc: "Luxurious nail care treatments." },
  { title: "Body Polishing", image: "/images/Gorgeous/body-polish.jpeg", desc: "Full body polishing for radiant skin." },
  { title: "Re-Bonding", image: "/images/Gorgeous/hair-rebond.jpg", desc: "Permanent hair straightening treatment." },
  { title: "Smoothening", image: "/images/Gorgeous/hair-smooth.jpg", desc: "Smooth, frizz-free hair treatment." },
  { title: "Keratin Treatment", image: "/images/Gorgeous/keratin.jpeg", desc: "Protein-rich treatment for silky hair." },
  { title: "Botox", image: "/images/Gorgeous/botox.jpeg", desc: "Hair botox for deep repair and shine." },
  { title: "Nano Plastic Treatment", image: "/images/Gorgeous/nano.jpg", desc: "Advanced nano treatment for ultra-smooth hair." },
];

const certificates = Array.from({ length: 8 }, (_, i) => `/images/Gorgeous/aai%20che%20certificates/certificate${i + 1}.jpg`);

export default function AboutPage() {
  return (
    <>
      <div className="relative h-60 md:h-80 overflow-hidden">
        <Image src="/images/Gorgeous/Aboutus.png" alt="About Us" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-rg-900/70 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">About Us</h1>
            <p className="text-rg-100 text-sm"><Link href="/" className="hover:text-white">Home</Link> / About Us</p>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white/90">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-60 rounded-2xl overflow-hidden shadow-2xl shadow-rg-200/50">
              <Image src="/images/Gorgeous/who_we_are1.jpg" alt="Who We Are" fill className="object-cover" />
            </div>
            <div className="relative h-60 rounded-2xl overflow-hidden shadow-2xl shadow-rg-200/50 mt-8">
              <Image src="/images/Gorgeous/who_we_are2.jpg" alt="Our Team" fill className="object-cover" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-rg-500 text-xs tracking-[0.35em] uppercase mb-3">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 section-heading mx-auto">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Gorgeous Beauty Parlour is a premium beauty destination in Bhosari, Pune, dedicated to enhancing your natural beauty. With a passionate team of skilled beauty professionals, we provide personalized services that cater to your unique needs.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Over the years, we have served thousands of happy clients, becoming their trusted beauty partner for everyday care, special occasions, and bridal preparation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We use only high-quality, professional-grade products to ensure outstanding results that keep our clients coming back.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-rg-50/80">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <div className="text-center">
            <p className="text-rg-500 text-xs tracking-[0.35em] uppercase mb-3">Meet The Owner</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 section-heading mx-auto">Our Founder</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our founder brings years of expertise and a genuine passion for beauty and wellness. With extensive training in the latest beauty techniques and a commitment to excellence, she has built Gorgeous Beauty Parlour into a trusted name in Pune.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Her dedication to client satisfaction and continuous learning ensures that Gorgeous Beauty Parlour stays at the forefront of beauty trends and techniques.
            </p>
          </div>
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl shadow-rg-200/60">
            <Image src="/images/Gorgeous/owner.jpg" alt="Owner" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/90">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-rg-500 text-xs tracking-[0.35em] uppercase mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 section-heading mx-auto">Our Services</h2>
          </div>
          <Carousel>
            {services.map((s) => (
              <ServiceCard key={s.title} title={s.title} image={s.image} desc={s.desc} />
            ))}
          </Carousel>
        </div>
      </section>

      <section className="py-24 bg-rg-50/80">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-rg-500 text-xs tracking-[0.35em] uppercase mb-3">Certifications</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 section-heading mx-auto">Our Certificates</h2>
          </div>
          <Carousel>
            {certificates.map((cert, i) => (
              <div key={i} className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl shadow-rg-100/40 bg-white">
                <Image src={cert} alt={`Certificate ${i + 1}`} fill className="object-contain p-4" />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="py-24 bg-white/90">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl shadow-rg-200/50">
            <Image src="/images/Gorgeous/variety1.jpg" alt="Variety of Services 1" fill className="object-cover" />
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl shadow-rg-200/50">
            <Image src="/images/Gorgeous/variety2.jpg" alt="Variety of Services 2" fill className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
