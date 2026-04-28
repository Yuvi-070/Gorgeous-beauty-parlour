import Image from "next/image";
import Link from "next/link";

const haircuts = [
  { name: "Straight Cut", image: "/images/Gorgeous/haircut/straight.jpg" },
  { name: "Movement Hair-cut", image: "/images/Gorgeous/haircut/movement.jpg" },
  { name: "Half-Feather Cut", image: "/images/Gorgeous/haircut/halfFeather.jpg" },
  { name: "Full-Feather Cut", image: "/images/Gorgeous/haircut/fullFeather.jpg" },
  { name: "Standing Cut (45')", image: "/images/Gorgeous/haircut/45.jpg" },
  { name: "Sliding Cut (90')", image: "/images/Gorgeous/haircut/90.jpg" },
  { name: "Reverse Graduation", image: "/images/Gorgeous/haircut/reverse.jpg" },
  { name: "Advance Reverse Graduation (Nauching)", image: "/images/Gorgeous/haircut/areverse.jpg" },
  { name: "Invert Blend", image: "/images/Gorgeous/haircut/straight.jpg" },
  { name: "Wedge Cut (Layer Cut)", image: "/images/Gorgeous/haircut/movement.jpg" },
  { name: "Edge Cut (Boy Cut)", image: "/images/Gorgeous/haircut/halfFeather.jpg" },
  { name: "Disconnected Cut", image: "/images/Gorgeous/haircut/fullFeather.jpg" },
  { name: "Natural Cut", image: "/images/Gorgeous/haircut/45.jpg" },
  { name: "Apple Cut (90')", image: "/images/Gorgeous/haircut/90.jpg" },
  { name: "Snow White Cut", image: "/images/Gorgeous/haircut/reverse.jpg" },
];

const facials = [
  { name: "Fruit Facial", image: "/images/Gorgeous/facial/Fruit-Facial.jpg" },
  { name: "D-TAN Facial", image: "/images/Gorgeous/facial/dtan.jpg" },
  { name: "Brightening Facial", image: "/images/Gorgeous/facial/Brightening-Facial.jpg" },
  { name: "Gold Facial", image: "/images/Gorgeous/facial/gold.jpg" },
  { name: "Diamond Facial", image: "/images/Gorgeous/facial/diamond.jpeg" },
  { name: "Hydra Facial", image: "/images/Gorgeous/facial/hydra.jpeg" },
  { name: "BB Glow Facial", image: "/images/Gorgeous/facial/bb.jpg" },
  { name: "Tightening Facial", image: "/images/Gorgeous/facial/tight.jpg" },
  { name: "Anti Ageing Facial", image: "/images/Gorgeous/facial/antiaging.jpg" },
  { name: "Korean Glass Facial", image: "/images/Gorgeous/facial/korean.jpeg" },
];

const spas = [
  { name: "Hair SPA", image: "/images/Gorgeous/SPA/hair-spa.jpg" },
  { name: "Hand SPA", image: "/images/Gorgeous/SPA/hand.jpeg" },
  { name: "Body SPA", image: "/images/Gorgeous/SPA/body.jpg" },
  { name: "Leg SPA", image: "/images/Gorgeous/SPA/leg.jpeg" },
];

function AmenityCard({ name, image }: { name: string; image: string }) {
  return (
    <div className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
      <div className="relative h-48 overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-3 text-center">
        <h3 className="text-gray-800 font-semibold text-sm font-serif">{name}</h3>
      </div>
    </div>
  );
}

export default function AmenitiesPage() {
  return (
    <>
      <div className="relative h-56 md:h-72 mt-16 bg-pink-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-800 to-rose-900 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">Amenities</h1>
            <p className="text-pink-200 text-sm"><Link href="/" className="hover:text-white">Home</Link> / Amenities</p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-pink-500 text-sm tracking-widest uppercase mb-2">Styling & Cutting</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 section-heading mx-auto">Hair Cuts</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {haircuts.map((h) => <AmenityCard key={h.name} name={h.name} image={h.image} />)}
          </div>
        </div>
      </section>

      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-pink-500 text-sm tracking-widest uppercase mb-2">Skin Care</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 section-heading mx-auto">Facial Treatments</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {facials.map((f) => <AmenityCard key={f.name} name={f.name} image={f.image} />)}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-pink-500 text-sm tracking-widest uppercase mb-2">Relaxation</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 section-heading mx-auto">SPA Treatments</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {spas.map((s) => <AmenityCard key={s.name} name={s.name} image={s.image} />)}
          </div>
        </div>
      </section>
    </>
  );
}
