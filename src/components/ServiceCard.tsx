import Image from "next/image";

interface Props {
  title: string;
  image: string;
  desc?: string;
}

export default function ServiceCard({ title, image, desc }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl shadow-rose-200/50 card-hover">
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-10 text-center">
        <div className="w-10 h-0.5 bg-rose-400 mx-auto mb-4 transition-all duration-500 group-hover:w-20" />
        <h3 className="text-white font-serif font-bold text-3xl md:text-4xl drop-shadow-lg leading-tight tracking-wide">
          {title}
        </h3>
        {desc && (
          <p className="text-rose-100 text-base mt-3 max-w-lg mx-auto leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}
