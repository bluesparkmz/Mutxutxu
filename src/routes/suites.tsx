import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Wifi, Coffee, Bath, Wind, Star } from "lucide-react";
import residence1 from "@/assets/residence-1.jpg";
import residence2 from "@/assets/residence-2.jpg";
import residence3 from "@/assets/residence-3.jpg";
import bedroom1 from "@/assets/residence-bedroom-1.jpg";
import bedroom2 from "@/assets/residence-bedroom-2.jpg";
import bedroom3 from "@/assets/residence-bedroom-3.jpg";

export const Route = createFileRoute("/suites")({
  head: () => ({
    meta: [
      { title: "Suítes Boutique — Mutxutxu Residência" },
      { name: "description", content: "Apenas 8 suítes. Refúgio íntimo, vistas que param o tempo. Reserve a sua estadia no Mutxutxu." },
      { property: "og:title", content: "Suítes Boutique — Mutxutxu" },
      { property: "og:description", content: "Refúgio de luxo discreto. Apenas 8 suítes — reserve já." },
      { property: "og:image", content: bedroom1 },
    ],
  }),
  component: SuitesPage,
});

const suites = [
  {
    name: "Suíte Esmeralda",
    tagline: "A mais íntima",
    desc: "Cama king-size, sala de estar privativa com iluminação ambiente esmeralda, kitchenette completa e TV de tela plana. Pensada para quem busca conforto e estilo.",
    price: "4.500 MT",
    night: "/noite",
    img: residence1,
    bedroom: bedroom1,
  },
  {
    name: "Suíte Safira",
    tagline: "A favorita",
    desc: "Salão amplo com iluminação azul cinematográfica, sofás veludo, kitchenette de mármore e quarto com vista privilegiada. Cortinas brown e cama de madeira nobre.",
    price: "5.800 MT",
    night: "/noite",
    img: residence2,
    bedroom: bedroom2,
  },
  {
    name: "Suíte Mutxutxu Master",
    tagline: "A experiência completa",
    desc: "A nossa suíte de assinatura — sala lounge, kitchenette gourmet, quarto principal com cama king, candeeiros dourados, almofadas premium e jantar do chef incluído.",
    price: "8.500 MT",
    night: "/noite",
    img: residence3,
    bedroom: bedroom3,
  },
];

const amenities = [
  { icon: Wifi, label: "Wi-Fi de alta velocidade" },
  { icon: Coffee, label: "Pequeno-almoço gourmet" },
  { icon: Bath, label: "Amenities de assinatura" },
  { icon: Wind, label: "Ar condicionado silencioso" },
];

function SuitesPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <img src={bedroom1} alt="" className="h-full w-full object-cover opacity-30 animate-ken-burns" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-primary">A Residência</p>
          <h1 className="mt-4 font-display text-6xl md:text-8xl">
            <span className="block">Apenas</span>
            <span className="text-shimmer">8 suítes</span>
            <span className="block italic font-light text-foreground/95 text-3xl md:text-5xl mt-4">
              para nunca esquecer
            </span>
          </h1>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
            Privacidade absoluta, design contemporâneo e o luxo discreto que só os verdadeiros conhecedores valorizam.
          </p>
          <div className="mt-8 flex justify-center gap-1 text-primary">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary"/>)}
          </div>
        </motion.div>
      </section>

      <section className="px-6 lg:px-10 pb-24">
        <div className="mx-auto max-w-7xl space-y-24">
          {suites.map((suite, i) => (
            <motion.article
              key={suite.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative grid grid-cols-3 gap-3">
                <div className="relative group col-span-2 overflow-hidden rounded-2xl shadow-elegant">
                  <img
                    src={suite.img}
                    alt={`Sala — ${suite.name}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-primary/30 text-[10px] uppercase tracking-[0.25em] text-primary">
                    {suite.tagline}
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-elegant">
                  <img
                    src={suite.bedroom}
                    alt={`Quarto — ${suite.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-display text-5xl md:text-6xl text-gold">{suite.name}</h2>
                <div className="my-6 gold-divider w-24" />
                <p className="text-lg text-foreground/85 leading-relaxed">{suite.desc}</p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {amenities.map((a) => (
                    <div key={a.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <a.icon className="h-4 w-4 text-primary shrink-0" />
                      {a.label}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-baseline gap-2">
                  <span className="font-display text-4xl text-primary">{suite.price}</span>
                  <span className="text-muted-foreground">{suite.night}</span>
                </div>
                <Link
                  to="/contato"
                  className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold hover:scale-105 transition-transform"
                >
                  Reservar esta suíte <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative py-24 px-6 lg:px-10 bg-[oklch(0.13_0.02_160)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Pacote Mutxutxu</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">
            Estadia <span className="italic text-gold">+ Jantar do Chef</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/80">
            Inclui menu degustação de 5 tempos com harmonização, check-out tardio e pequeno-almoço na suíte.
            Apenas para quem sabe que a vida é demasiado curta para o comum.
          </p>
          <Link
            to="/contato"
            className="mt-8 inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold animate-pulse-glow"
          >
            Quero este pacote <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}