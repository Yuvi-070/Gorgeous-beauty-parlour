import Image from "next/image";
import Link from "next/link";

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
      <div className="relative h-56 md:h-72 mt-16 overflow-hidden">
        <Image src="/images/Gorgeous/Aboutus.png" alt="About Us" fill className="object-cover" />
        <div className="absolute inset-0 bg-pink-900/60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">About Us</h1>
            <p className="text-pink-200 text-sm"><Link href="/" className="hover:text-white">Home</Link> / About Us</p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-60 rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/Gorgeous/who_we_are1.jpg" alt="Who We Are" fill className="object-cover" />
            </div>
            <div className="relative h-60 rounded-xl overflow-hidden shadow-lg mt-8">
              <Image src="/images/Gorgeous/who_we_are2.jpg" alt="Our Team" fill className="object-cover" />
            </div>
          </div>
          <div>
            <p className="text-pink-500 text-sm tracking-widest uppercase mb-2">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6 section-heading">Who We Are</h2>
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

      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-pink-500 text-sm tracking-widest uppercase mb-2">Meet The Owner</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6 section-heading">Our Founder</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our founder brings years of expertise and a genuine passion for beauty and wellness. With extensive training in the latest beauty techniques and a commitment to excellence, she has built Gorgeous Beauty Parlour into a trusted name in Pune.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Her dedication to client satisfaction and continuous learning ensures that Gorgeous Beauty Parlour stays at the forefront of beauty trends and techniques.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/Gorgeous/owner.jpg" alt="Owner" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-pink-500 text-sm tracking-widest uppercase mb-2">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 section-heading mx-auto">Our Services</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-bold text-gray-800 mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-pink-500 text-sm tracking-widest uppercase mb-2">Certifications</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 section-heading mx-auto">Our Certificates</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certificates.map((cert, i) => (
              <div key={i} className="relative h-48 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image src={cert} alt={`Certificate ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image src="/images/Gorgeous/variety1.jpg" alt="Variety of Services 1" fill className="object-cover" />
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image src="/images/Gorgeous/variety2.jpg" alt="Variety of Services 2" fill className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
