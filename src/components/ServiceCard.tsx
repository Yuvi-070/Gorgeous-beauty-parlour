import Image from "next/image";

interface Props {
  title: string;
  image: string;
}

export default function ServiceCard({ title, image }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-gray-800 font-semibold font-serif text-lg">{title}</h3>
        <div className="w-8 h-0.5 bg-pink-500 mx-auto mt-2" />
      </div>
    </div>
  );
}
