import dish from "@/assets/dish.jpg";
import pool from "@/assets/pool.jpg";
import lounge from "@/assets/lounge.jpg";
import interior from "@/assets/restaurant-interior.jpg";
import wall from "@/assets/wall.jpg";
import table from "@/assets/table-setup.jpg";

const images = [
  { src: dish, alt: "Prato especial", label: "Gastronomia" },
  { src: pool, alt: "Piscina", label: "Piscina" },
  { src: lounge, alt: "Lounge", label: "Lounge" },
  { src: interior, alt: "Restaurante", label: "Restaurante" },
  { src: wall, alt: "Entrada", label: "Espaço" },
  { src: table, alt: "Mesa de eventos", label: "Eventos" },
];

export const Gallery = () => {
  return (
    <section id="galeria" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-3">Galeria</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-balance">
            Momentos no <span className="text-primary">Mutxutxu</span>
          </h2>
          <p className="text-muted-foreground text-lg">Veja um pouco da nossa atmosfera única.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden shadow-soft group cursor-pointer ${i === 0 || i === 4 ? "md:row-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover group-hover:scale-110 transition-smooth duration-700 ${i === 0 || i === 4 ? "h-full min-h-[400px]" : "h-48 md:h-56"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-5">
                <span className="text-primary-foreground font-display text-xl font-bold">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
