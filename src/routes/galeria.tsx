import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import residence1 from "@/assets/residence-1.jpg";
import residence2 from "@/assets/residence-2.jpg";
import residence3 from "@/assets/residence-3.jpg";
import bedroom1 from "@/assets/residence-bedroom-1.jpg";
import bedroom2 from "@/assets/residence-bedroom-2.jpg";
import bedroom3 from "@/assets/residence-bedroom-3.jpg";
import restaurant1 from "@/assets/restaurant-1.jpg";
import restaurant2 from "@/assets/restaurant-2.jpg";
import restaurant3 from "@/assets/restaurant-3.jpg";
import dishPrawns from "@/assets/dish-prawns.jpg";
import dishFish from "@/assets/dish-fish.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import dishFrango from "@/assets/dish-frango.jpg";
import dishCarneMolho from "@/assets/dish-carne-molho.jpg";
import dishTilapiaGrelhada from "@/assets/dish-tilapia-grelhada.jpg";
import dishCaril from "@/assets/dish-caril.jpg";
import dishPeixeLegumes from "@/assets/dish-peixe-legumes.jpg";
import dishPeixeTrio from "@/assets/dish-peixe-trio.jpg";
import dishCamaraoSalada from "@/assets/dish-camarao-salada.jpg";
import dishBacalhau from "@/assets/dish-bacalhau.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — Mutxutxu Restaurante & Residência" },
      { name: "description", content: "Conheça os ambientes do Mutxutxu — salão, bar, suítes e quartos. Cada imagem é um convite." },
      { property: "og:title", content: "Galeria — Mutxutxu" },
      { property: "og:description", content: "O ambiente, as suítes, os pratos. Veja tudo antes de reservar." },
      { property: "og:image", content: residence1 },
    ],
  }),
  component: GalleryPage,
});

type Item = { src: string; label: string; category: "Residência" | "Restaurante" | "Pratos" };

const items: Item[] = [
  { src: residence1, label: "Sala lounge esmeralda", category: "Residência" },
  { src: bedroom1, label: "Quarto azul cinematográfico", category: "Residência" },
  { src: residence2, label: "Sala de estar contemporânea", category: "Residência" },
  { src: bedroom2, label: "Quarto privativo", category: "Residência" },
  { src: residence3, label: "Lounge com kitchenette", category: "Residência" },
  { src: bedroom3, label: "Quarto Master Mutxutxu", category: "Residência" },
  { src: restaurant1, label: "Salão lounge bordô", category: "Restaurante" },
  { src: restaurant2, label: "Salão principal & bar", category: "Restaurante" },
  { src: restaurant3, label: "Espaço refeições convivial", category: "Restaurante" },
  { src: dishPrawns, label: "Camarão Piri-Piri", category: "Pratos" },
  { src: dishFish, label: "Peixe & Matapa", category: "Pratos" },
  { src: dishDessert, label: "Mousse Maracujá", category: "Pratos" },
  { src: dishFrango, label: "Galinha Fumada com Batata", category: "Pratos" },
  { src: dishCarneMolho, label: "Carne ao Molho da Casa", category: "Pratos" },
  { src: dishTilapiaGrelhada, label: "Tilápia Grelhada na Brasa", category: "Pratos" },
  { src: dishCaril, label: "Caril com Vegetais Salteados", category: "Pratos" },
  { src: dishPeixeLegumes, label: "Peixe Inteiro com Legumes", category: "Pratos" },
  { src: dishPeixeTrio, label: "Trio de Peixes Grelhados", category: "Pratos" },
  { src: dishCamaraoSalada, label: "Camarão Grelhado & Salada Fresca", category: "Pratos" },
  { src: dishBacalhau, label: "Bacalhau Confitado", category: "Pratos" },
];

const categories = ["Tudo", "Residência", "Restaurante", "Pratos"] as const;

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Tudo");
  const [active, setActive] = useState<Item | null>(null);

  const filtered = filter === "Tudo" ? items : items.filter((i) => i.category === filter);

  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Galeria</p>
          <h1 className="mt-4 font-display text-6xl md:text-8xl">
            <span className="text-shimmer">Cada canto</span>
            <span className="block italic font-light text-foreground/95 text-3xl md:text-5xl mt-4">
              uma história à espera
            </span>
          </h1>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore os ambientes que tornam o Mutxutxu inesquecível — do salão acolhedor
            às suítes iluminadas, dos pratos de assinatura ao bar.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.25em] transition-all ${
                filter === c
                  ? "bg-gradient-gold text-primary-foreground shadow-gold"
                  : "border border-primary/30 text-foreground/80 hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((item, i) => (
              <motion.button
                key={item.src}
                onClick={() => setActive(item)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 8) * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl shadow-elegant ${
                  i % 5 === 0 ? "row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-square"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 text-left">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-primary">{item.category}</p>
                  <p className="font-display text-lg text-foreground">{item.label}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 h-12 w-12 rounded-full bg-card border border-primary/40 text-primary flex items-center justify-center hover:scale-110 transition-transform"
            onClick={() => setActive(null)}
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.label}
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-gold"
            />
            <div className="mt-4 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">{active.category}</p>
              <p className="mt-1 font-display text-2xl">{active.label}</p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
