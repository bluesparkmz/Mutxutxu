import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Wine } from "lucide-react";
import dishDessert from "@/assets/dish-dessert.jpg";
import heroImg from "@/assets/hero-restaurant.jpg";
import dishFrango from "@/assets/dish-frango.jpg";
import dishCarneMolho from "@/assets/dish-carne-molho.jpg";
import dishTilapiaGrelhada from "@/assets/dish-tilapia-grelhada.jpg";
import dishCaril from "@/assets/dish-caril.jpg";
import dishPeixeLegumes from "@/assets/dish-peixe-legumes.jpg";
import dishPeixeTrio from "@/assets/dish-peixe-trio.jpg";
import dishCamaraoSalada from "@/assets/dish-camarao-salada.jpg";
import dishBacalhau from "@/assets/dish-bacalhau.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu do Chef — Mutxutxu" },
      { name: "description", content: "Descubra a cozinha autoral do Mutxutxu: entradas, principais e sobremesas que celebram Moçambique." },
      { property: "og:title", content: "Menu do Chef — Mutxutxu" },
      { property: "og:description", content: "Cada prato é uma viagem. Reserve a sua mesa." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: MenuPage,
});

const sections = [
  {
    title: "Petisco",
    items: [
      { name: "Mutxutxu de Galinha", desc: "A assinatura da casa. Galinha tenra em molho aromático.", price: "200 MT", hot: true },
      { name: "Cabeça de Vaca", desc: "Tradicional, lenta cozedura, sabor profundo.", price: "200 MT" },
      { name: "Dobrada", desc: "Receita clássica, temperos da casa.", price: "200 MT" },
      { name: "Adrinha", desc: "Petisco da terra, servido bem quente.", price: "250 MT" },
      { name: "Cabeça de Peixe", desc: "Fresca, do dia, com tempero local.", price: "200 MT" },
      { name: "Chouriço", desc: "Grelhado, defumado na medida certa.", price: "300 MT" },
      { name: "Worce", desc: "Especialidade da casa.", price: "300 MT" },
      { name: "Tostas c/ Batata Frita", desc: "Crocantes, douradas, perfeitas.", price: "300 MT" },
      { name: "Mão de Vaca", desc: "Cozida lentamente, textura inigualável.", price: "200 MT" },
      { name: "Babalaza", desc: "Para os corajosos. Picante, intenso.", price: "300 MT", hot: true },
      { name: "Chamuça", desc: "Crocante por fora, recheio generoso.", price: "40 MT" },
    ],
  },
  {
    title: "Pizzas",
    items: [
      { name: "Pizza de Frango", desc: "Frango marinado, mussarela, molho da casa.", price: "800 MT" },
      { name: "Pizza Vegetariana", desc: "Legumes frescos da estação.", price: "700 MT" },
      { name: "Pizza 4 Estações", desc: "Quatro sabores, uma viagem.", price: "1000 MT" },
    ],
  },
  {
    title: "Sopas",
    items: [
      { name: "Caldo Verde", desc: "Couve, batata, chouriço — reconfortante.", price: "150 MT" },
      { name: "Sopa de Feijão", desc: "Cremosa, com legumes da horta.", price: "150 MT" },
      { name: "Sopa de Legumes", desc: "Leve, vibrante, perfumada.", price: "150 MT" },
    ],
  },
  {
    title: "Carnes & Sandes",
    items: [
      { name: "Bife Carne de Porco", desc: "Suculento, no ponto pedido.", price: "800 MT", img: dishCaril },
      { name: "Bife Completo", desc: "Acompanhado de batata, ovo e salada.", price: "800 MT" },
      { name: "Bife Trincha do", desc: "Corte especial, marinado em ervas.", price: "700 MT" },
      { name: "Frango Assado 1/4", desc: "Quarto de frango, brasa lenta.", price: "300 MT" },
      { name: "Frango Assado 1/2", desc: "Meio frango dourado.", price: "600 MT" },
      { name: "Frango Assado", desc: "Inteiro, marinado 24h.", price: "1200 MT" },
      { name: "Galinha Fumada", desc: "Defumada lentamente — sabor único.", price: "1500 MT", hot: true, img: dishFrango },
      { name: "Frango à Passarinho", desc: "Crocante, porção generosa.", price: "1250 MT" },
      { name: "T-Bone", desc: "O rei da brasa.", price: "800 MT", hot: true, img: dishCarneMolho },
      { name: "Hamburguer Simples", desc: "Pão da casa, carne fresca.", price: "250 MT" },
      { name: "C Double Burger", desc: "Duplo de carne, queijo derretido.", price: "500 MT" },
      { name: "Hamburguer Completo", desc: "Tudo a que tens direito.", price: "300 MT" },
      { name: "Sande de Ovo", desc: "Simples, perfeita.", price: "200 MT" },
      { name: "Prego no Prato", desc: "Servido com batata frita.", price: "450 MT" },
      { name: "Prego no Pão", desc: "O clássico irresistível.", price: "300 MT" },
    ],
  },
  {
    title: "Doses & Acompanhamentos",
    items: [
      { name: "Batata Frita", desc: "Douradas, crocantes.", price: "100 MT" },
      { name: "Arroz", desc: "Soltinho, no ponto.", price: "100 MT" },
      { name: "Chima", desc: "Tradicional moçambicana.", price: "100 MT" },
      { name: "Saladas", desc: "Frescas, coloridas.", price: "75 MT" },
      { name: "Arroz / Batata Xima / Puré de Batata Doce", desc: "Acompanhamento à escolha.", price: "—" },
    ],
  },
  {
    title: "Massas",
    items: [
      { name: "Milanesa c/ Carne", desc: "Empanada, dourada, suculenta.", price: "800 MT" },
      { name: "Milanesa c/ Frango", desc: "Crocante, tenra por dentro.", price: "600 MT" },
      { name: "Milanesa c/ Camarão", desc: "Camarão envolvido em massa estaladiça.", price: "800 MT" },
      { name: "Milanesa c/ Atum", desc: "Atum fresco, panado artesanal.", price: "600 MT" },
    ],
  },
  {
    title: "Mariscos",
    items: [
      { name: "Peixe Chambo Pequeno", desc: "Grelhado, com tempero da casa.", price: "600 MT", img: dishTilapiaGrelhada },
      { name: "Peixe Chambo Médio", desc: "Para partilhar a dois.", price: "800 MT", img: dishPeixeTrio },
      { name: "Peixe Chambo Grande", desc: "Inteiro, da brasa para a mesa.", price: "1000 MT", img: dishPeixeLegumes },
      { name: "Filetes de Peixe", desc: "Sem espinha, dourados.", price: "800 MT", img: dishBacalhau },
      { name: "Lulas", desc: "Grelhadas com alho e azeite.", price: "800 MT" },
      { name: "Camarão Amanteigado", desc: "Manteiga, alho, lima — derrete na boca.", price: "800 MT", hot: true, img: dishCamaraoSalada },
    ],
  },
  {
    title: "Especialidades & Guisados",
    items: [
      { name: "Guisado de Carne c/ Vegetais e Arroz", desc: "Lento, perfumado, reconfortante.", price: "350 MT" },
      { name: "Caril de Frango c/ Cocó e Amendoim", desc: "Coco fresco, amendoim torrado — receita matriarcal.", price: "350 MT", hot: true },
      { name: "Matapa com Peixe", desc: "Folhas de mandioqueira, coco, peixe fresco.", price: "350 MT" },
      { name: "Feijão com Peixe", desc: "Tradição em cada colherada.", price: "350 MT" },
      { name: "Feijoada", desc: "Da casa, à moda antiga.", price: "350 MT" },
      { name: "2 Cordonzois c/ Batata", desc: "Saboroso, generoso.", price: "600 MT" },
    ],
  },
  {
    title: "Sobremesas",
    items: [
      { name: "Mousse de chocolate & maracujá", desc: "Chocolate negro 70%, coulis de maracujá.", price: "320 MT", img: dishDessert },
      { name: "Tarte de coco & lima", desc: "Massa folhada, recheio cremoso, raspas de lima.", price: "280 MT" },
      { name: "Sorvete de baunilha & rum velho", desc: "Artesanal, com biscoito de canela.", price: "240 MT" },
    ],
  },
];

const drinks = [
  {
    title: "Cervejas & Cidras",
    items: [
      { name: "Cerveja 2M Grande", price: "80 MT" },
      { name: "2M à Lata", price: "80 MT" },
      { name: "2M Chote", price: "90 MT" },
      { name: "Manica Grande", price: "80 MT" },
      { name: "Manica à Lata", price: "90 MT" },
      { name: "Heineken à Garrafa", price: "100 MT" },
      { name: "Heineken à Lata", price: "100 MT" },
      { name: "Heineken Silver", price: "150 MT" },
      { name: "Savana Dry", price: "120 MT" },
      { name: "Castle Doublé", price: "120 MT" },
      { name: "Txilar à Lata", price: "100 MT" },
      { name: "Txilar à Garrafa", price: "80 MT" },
      { name: "Castle Lager", price: "150 MT" },
      { name: "Corona Grande", price: "120 MT" },
      { name: "Corona Pequena", price: "100 MT" },
      { name: "Budweiser", price: "120 MT" },
      { name: "Preta Grande", price: "80 MT" },
      { name: "Preta à Lata", price: "100 MT" },
      { name: "Preta Pequena", price: "100 MT" },
      { name: "Castle Lite", price: "100 MT" },
      { name: "Super Bock", price: "120 MT" },
      { name: "Hunters Gold", price: "100 MT" },
      { name: "Spin", price: "120 MT" },
      { name: "Brizer", price: "120 MT" },
      { name: "Brutal", price: "120 MT" },
      { name: "Hunters Dray", price: "120 MT" },
      { name: "Bernine", price: "120 MT" },
      { name: "Lemone", price: "120 MT" },
    ],
  },
  {
    title: "Vinhos",
    items: [
      { name: "Vinho Portada", price: "1200 MT" },
      { name: "Vinho Cabriz", price: "1200 MT" },
      { name: "Cape Ruby", price: "1100 MT" },
      { name: "Duas Quintas", price: "1100 MT" },
      { name: "Pandora", price: "1100 MT" },
      { name: "Drosdy Hof", price: "800 MT" },
      { name: "Casal Garcia", price: "1200 MT" },
      { name: "Gazela", price: "1100 MT" },
      { name: "Altum", price: "800 MT" },
      { name: "Segredo São Miguel", price: "1200 MT" },
    ],
  },
  {
    title: "Champagnes & Premium",
    items: [
      { name: "Silk Spice", price: "1800 MT" },
      { name: "Celler Cast", price: "1100 MT" },
      { name: "Galo Douro", price: "1100 MT" },
      { name: "Four Causin Grande", price: "1600 MT" },
      { name: "Four Causin Pequeno", price: "800 MT" },
      { name: "Rose Grande", price: "1600 MT" },
      { name: "Amarula", price: "1400 MT" },
      { name: "Martine", price: "1400 MT" },
      { name: "Champagne JC", price: "1200 MT" },
      { name: "Champagne Toste", price: "1500 MT" },
      { name: "Champagne Anabela", price: "1300 MT" },
      { name: "Champagne Martini Rose", price: "1200 MT" },
      { name: "Quinta da Bolota", price: "1200 MT" },
    ],
  },
  {
    title: "Águas & Sumos",
    items: [
      { name: "Água Grande", price: "100 MT" },
      { name: "Água Pequena", price: "50 MT" },
      { name: "Água Tónica", price: "60 MT" },
      { name: "Red Bull", price: "150 MT" },
      { name: "Refresco à Lata", price: "60 MT" },
      { name: "Dry Lemon", price: "150 MT" },
      { name: "Ceres", price: "200 MT" },
      { name: "Compal", price: "200 MT" },
      { name: "Cap", price: "80 MT" },
    ],
  },
  {
    title: "Whiskies",
    items: [
      { name: "Hanker Bannister", price: "1100 MT" },
      { name: "Joh Walker Red", price: "1500 MT" },
      { name: "Jamson", price: "2800 MT" },
      { name: "Grants", price: "1500 MT" },
      { name: "MaicGregor", price: "1500 MT" },
      { name: "Gatão", price: "1200 MT" },
      { name: "John Walker Black", price: "3500 MT" },
      { name: "Gordon", price: "1100 MT" },
      { name: "Havelock", price: "1100 MT" },
      { name: "Bull Dog", price: "3300 MT" },
      { name: "Rusian", price: "1000 MT" },
      { name: "Escape Vodka", price: "1000 MT" },
    ],
  },
];

function MenuPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold opacity-40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Menu do Chef</p>
          <h1 className="mt-4 font-display text-6xl md:text-8xl">
            <span className="text-shimmer">Sabores</span>
            <span className="block italic font-light text-foreground/95">que contam histórias</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
            Cozinha autoral inspirada em Moçambique. Produtos frescos do mercado, técnicas afinadas, sabores ousados.
          </p>
        </motion.div>
      </section>

      <section className="px-6 lg:px-10 pb-32">
        <div className="mx-auto max-w-5xl space-y-24">
          {sections.map((section, sIdx) => (
            <div key={section.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex items-center gap-6 mb-12"
              >
                <h2 className="font-display text-4xl md:text-5xl text-gold whitespace-nowrap">{section.title}</h2>
                <div className="flex-1 gold-divider" />
              </motion.div>

              <div className="grid gap-6">
                {section.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.6 }}
                    className="group flex gap-6 items-start p-5 rounded-xl hover:bg-card/60 transition-colors"
                  >
                    {"img" in item && item.img ? (
                      <img
                        src={item.img as string}
                        alt={item.name}
                        loading="lazy"
                        className="hidden sm:block h-24 w-24 rounded-xl object-cover shadow-elegant shrink-0"
                      />
                    ) : (
                      <div className="hidden sm:block h-24 w-24 rounded-xl border border-primary/30 bg-primary/5 shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-2xl flex items-center gap-2">
                          {item.name}
                          {"hot" in item && item.hot && <Flame className="h-4 w-4 text-accent" />}
                        </h3>
                        <div className="flex-1 border-b border-dashed border-border mb-1.5 hidden md:block" />
                        <span className="text-primary font-medium whitespace-nowrap">{item.price}</span>
                      </div>
                      <p className="mt-2 text-muted-foreground italic">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="pt-16"
          >
            <div className="text-center mb-16">
              <Wine className="h-8 w-8 text-primary mx-auto mb-4" />
              <p className="text-xs uppercase tracking-[0.4em] text-primary">Carta de Bebidas</p>
              <h2 className="mt-4 font-display text-5xl md:text-7xl">
                <span className="text-shimmer">Para acompanhar</span>
                <span className="block italic font-light text-foreground/95">cada momento</span>
              </h2>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              {drinks.map((cat, idx) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.6 }}
                  className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur p-8 shadow-elegant"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="font-display text-2xl md:text-3xl text-gold whitespace-nowrap">{cat.title}</h3>
                    <div className="flex-1 gold-divider" />
                  </div>
                  <ul className="space-y-3">
                    {cat.items.map((d) => (
                      <li key={d.name} className="flex items-baseline gap-3 text-sm">
                        <span className="text-foreground/90">{d.name}</span>
                        <span className="flex-1 border-b border-dashed border-border/60 mb-1" />
                        <span className="text-primary font-medium whitespace-nowrap">{d.price}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center pt-12 border-t border-border"
          >
            <p className="font-display text-3xl italic text-gold">A boa mesa é apenas o começo.</p>
            <p className="mt-3 text-muted-foreground">Reserve já — disponibilidade limitada esta semana.</p>
            <Link
              to="/contato"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold animate-pulse-glow"
            >
              Reservar mesa <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}