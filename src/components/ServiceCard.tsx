import Image from "next/image";

interface Props {
  title: string;
  image: string;
}

export default function ServiceCard({ title, image }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-rose-100/80 bg-white/95 shadow-lg shadow-rose-100/40 hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-gray-900 font-semibold font-serif text-lg">{title}</h3>
        <div className="w-10 h-0.5 bg-rose-400 mx-auto mt-3" />
      </div>
    </div>
  );
}
