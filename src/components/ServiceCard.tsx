import Image from "next/image";

interface Props {
  title: string;
  image: string;
  desc?: string;
}

export default function ServiceCard({ title, image, desc }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl shadow-rose-200/50">
      <div className="relative h-[460px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
        <h3 className="text-white font-serif font-bold text-3xl md:text-4xl drop-shadow-lg leading-tight">
          {title}
        </h3>
        {desc && (
          <p className="text-gray-200 text-base mt-3 max-w-lg mx-auto leading-relaxed">
            {desc}
          </p>
        )}
        <div className="w-16 h-0.5 bg-rose-400 mx-auto mt-4" />
      </div>
    </div>
  );
}
