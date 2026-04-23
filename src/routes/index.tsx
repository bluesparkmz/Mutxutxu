import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Star, UtensilsCrossed, BedDouble, Sparkles, ChefHat, Wine, Clock } from "lucide-react";
import heroImg from "@/assets/hero-restaurant.jpg";
import dishTilapiaGrelhada from "@/assets/dish-tilapia-grelhada.jpg";
import dishPrawns from "@/assets/dish-prawns.jpg";
import dishFish from "@/assets/dish-fish.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import residenceImg from "@/assets/residence-1.jpg";
import residenceBedroom from "@/assets/residence-bedroom-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mutxutxu — Sabores que arrebatam, noites que encantam" },
      { name: "description", content: "Restaurante & Residência boutique em Moçambique. Reserve a sua mesa ou suíte e viva uma experiência sensorial irrepetível." },
      { property: "og:title", content: "Mutxutxu — Sabores que arrebatam" },
      { property: "og:description", content: "Reserve a sua mesa ou suíte e viva uma experiência sensorial irrepetível." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Restaurante Mutxutxu ao entardecer"
            className="h-full w-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-radial-gold opacity-60" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm text-xs uppercase tracking-[0.3em] text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" /> Lichinga
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15 }}
            className="mt-6 font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95]"
          >
            <span className="text-shimmer">Mutxutxu</span>
            <span className="block text-foreground/95 italic text-3xl md:text-5xl mt-4 font-light">
              sabores que arrebatam,<br/>noites que encantam
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-foreground/80 leading-relaxed"
          >
            Um restaurante de assinatura e uma residência boutique sob o mesmo céu.
            Reserve a sua mesa, escolha a sua suíte — e prepare-se para nunca mais ser o mesmo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/contato"
              className="group relative px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium tracking-wide shadow-gold animate-pulse-glow flex items-center gap-2"
            >
              Reservar Mesa
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/suites"
              className="group px-8 py-4 rounded-full border border-primary/50 text-foreground hover:bg-primary/10 transition-all flex items-center gap-2"
            >
              Reservar Suíte
              <BedDouble className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex items-center justify-center gap-6 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
              ))}
              <span className="ml-2">5.0 · 240+ hóspedes felizes</span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* TWO WORLDS */}
      <section className="relative py-32 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Dois mundos · uma alma</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              A mesa que <span className="italic text-gold">conta</span> histórias.
              <br/>O quarto que as <span className="italic text-gold">sonha</span>.
            </h2>
          </motion.div>

          <div className="mt-20 grid md:grid-cols-2 gap-8">
            {[
              {
                img: dishTilapiaGrelhada,
                tag: "Restaurante",
                title: "Cozinha de assinatura",
                desc: "Pratos autorais que celebram o melhor de Moçambique com toques contemporâneos.",
                cta: "Ver o Menu",
                to: "/menu" as const,
                icon: UtensilsCrossed,
              },
              {
                img: residenceBedroom,
                tag: "Residência",
                title: "Suítes boutique",
                desc: "Refúgio de luxo discreto, com vistas que param o tempo. Apenas 8 suítes.",
                cta: "Ver Suítes",
                to: "/suites" as const,
                icon: BedDouble,
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.15 }}
                className="group relative overflow-hidden rounded-2xl shadow-elegant"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
                  <div className="flex items-center gap-2 text-primary text-xs uppercase tracking-[0.3em]">
                    <card.icon className="h-4 w-4" /> {card.tag}
                  </div>
                  <h3 className="mt-3 font-display text-3xl md:text-4xl">{card.title}</h3>
                  <p className="mt-3 text-foreground/80 max-w-md">{card.desc}</p>
                  <Link
                    to={card.to}
                    className="mt-6 inline-flex items-center gap-2 text-primary font-medium group/link"
                  >
                    {card.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="relative py-32 px-6 lg:px-10 bg-[oklch(0.13_0.02_160)]">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.4em] text-primary">Pratos da casa</p>
              <h2 className="mt-4 font-display text-5xl md:text-6xl">
                Cada garfada,<br/><span className="italic text-gold">uma viagem</span>.
              </h2>
            </div>
            <Link
              to="/menu"
              className="self-start md:self-end inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Menu completo <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { img: dishPrawns, name: "Camarão Piri-Piri", desc: "Grelhado em fogo aberto, arroz de coco e lima.", price: "850 MT" },
              { img: dishFish, name: "Peixe & Matapa", desc: "Filete selado sobre puré de mandioca e folhas de mandioqueira.", price: "780 MT" },
              { img: dishDessert, name: "Mousse Maracujá", desc: "Chocolate negro 70%, coulis de maracujá, ouro comestível.", price: "320 MT" },
            ].map((d, i) => (
              <motion.article
                key={d.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl">{d.name}</h3>
                    <span className="text-primary font-medium text-sm whitespace-nowrap">{d.price}</span>
                  </div>
                  <div className="my-3 gold-divider" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative py-32 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={residenceImg}
              alt="A residência ao entardecer"
              loading="lazy"
              className="rounded-2xl shadow-elegant"
            />
            <div className="absolute -bottom-8 -right-8 hidden md:block bg-card border border-primary/30 rounded-2xl p-6 shadow-gold backdrop-blur-xl max-w-xs">
              <div className="flex items-center gap-2 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary"/>)}
              </div>
              <p className="mt-3 italic text-sm text-foreground/90">
                "A melhor noite da minha vida começou à mesa e terminou na suíte. Voltarei."
              </p>
              <p className="mt-2 text-xs text-muted-foreground">— Sofia M., Lisboa</p>
            </div>
          </motion.div>

          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Por que Mutxutxu</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              Mais que um lugar,<br/><span className="italic text-gold">um ritual</span>.
            </h2>
            <div className="mt-10 space-y-6">
              {[
                { icon: ChefHat, title: "Chef premiado", desc: "Cozinha autoral com produtos locais selecionados todas as manhãs." },
                { icon: Wine, title: "Carta exclusiva", desc: "Mais de 120 referências, do Douro ao Cabo, harmonizadas pelo nosso sommelier." },
                { icon: BedDouble, title: "Apenas 8 suítes", desc: "Privacidade absoluta, atenção ao detalhe e amenities de assinatura." },
                { icon: Clock, title: "Estadia + Jantar", desc: "Pacotes especiais com check-in tardio e mesa garantida ao pôr-do-sol." },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex gap-5"
                >
                  <div className="shrink-0 h-12 w-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl">{f.title}</h3>
                    <p className="text-muted-foreground">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BIG CTA */}
      <section className="relative py-32 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold opacity-50" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Última chamada</p>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            A sua mesa <span className="italic text-shimmer">aguarda</span>.<br/>
            A sua suíte também.
          </h2>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
            Disponibilidade limitada esta semana. Garanta o seu lugar antes que outro o faça.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="px-10 py-5 rounded-full bg-gradient-gold text-primary-foreground font-medium text-lg tracking-wide shadow-gold animate-pulse-glow inline-flex items-center justify-center gap-2 group"
            >
              Reservar agora
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:877810419"
              className="px-10 py-5 rounded-full border border-primary/50 text-foreground hover:bg-primary/10 transition-all inline-flex items-center justify-center gap-2"
            >
              Ligar 877810419
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
