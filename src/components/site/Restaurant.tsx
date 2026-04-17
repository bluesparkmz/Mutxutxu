import { Button } from "@/components/ui/button";
import dish from "@/assets/dish.jpg";
import interior from "@/assets/restaurant-interior.jpg";
import table from "@/assets/table-setup.jpg";
import { Clock, ChefHat, Wine } from "lucide-react";

export const Restaurant = () => {
  return (
    <section id="restaurante" className="py-24 bg-gradient-dark text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--primary)) 0%, transparent 50%)' }} />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold tracking-widest uppercase text-sm mb-3">Restaurante</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-balance">
            Sabores que <span className="text-accent">contam histórias</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Pratos cuidadosamente preparados, do mar à mesa, com toda a alma da nossa terra.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:row-span-2 relative rounded-2xl overflow-hidden group shadow-elegant">
            <img src={dish} alt="Prato principal" className="w-full h-full min-h-[400px] object-cover group-hover:scale-110 transition-smooth duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Especialidade</p>
              <h3 className="font-display text-3xl font-bold">Peixe Grelhado da Casa</h3>
              <p className="text-primary-foreground/80 mt-2">Servido com salada fresca, arroz aromático e batatas douradas.</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden group shadow-elegant min-h-[240px]">
            <img src={interior} alt="Salão do restaurante" className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <h3 className="font-display text-xl font-bold">Salão Acolhedor</h3>
              <p className="text-primary-foreground/70 text-sm">Ambiente perfeito para refeições em família.</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden group shadow-elegant min-h-[240px]">
            <img src={table} alt="Mesa para ocasiões especiais" className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <h3 className="font-display text-xl font-bold">Eventos Especiais</h3>
              <p className="text-primary-foreground/70 text-sm">Celebrações, jantares e momentos únicos.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { icon: ChefHat, title: "Cozinha de Autor", desc: "Receitas tradicionais com toque moderno" },
            { icon: Wine, title: "Carta Selecionada", desc: "Vinhos e bebidas para harmonizar" },
            { icon: Clock, title: "Aberto Todos os Dias", desc: "Almoço e jantar 12h - 23h" },
          ].map((item) => (
            <div key={item.title} className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 hover:border-accent/40 transition-smooth">
              <item.icon className="h-8 w-8 text-accent mb-3" />
              <h4 className="font-display text-lg font-bold mb-1">{item.title}</h4>
              <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="gold" size="xl" asChild>
            <a href="#contacto">Reservar Mesa</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
