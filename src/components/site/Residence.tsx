import { Button } from "@/components/ui/button";
import { Wifi, Coffee, Car, Bath, Tv, Sparkles, Check } from "lucide-react";
import lounge from "@/assets/lounge.jpg";
import pool from "@/assets/pool.jpg";

const amenities = [
  { icon: Wifi, label: "WiFi grátis" },
  { icon: Coffee, label: "Pequeno-almoço" },
  { icon: Car, label: "Estacionamento" },
  { icon: Bath, label: "Casa de banho privada" },
  { icon: Tv, label: "TV por cabo" },
  { icon: Sparkles, label: "Limpeza diária" },
];

export const Residence = () => {
  return (
    <section id="residencia" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-3">Residência</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-balance">
            O conforto de <span className="text-primary">sentir-se em casa</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Quartos elegantes, áreas de lazer convidativas e todo o conforto para a sua estadia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant group h-[420px]">
            <img src={lounge} alt="Sala de estar" className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent" />
            <div className="absolute bottom-0 p-8 text-primary-foreground">
              <span className="bg-accent text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Lounge</span>
              <h3 className="font-display text-3xl font-bold mt-3">Espaço de Convívio</h3>
              <p className="text-primary-foreground/80 mt-2">Relaxe num ambiente moderno, perfeito para descontrair com amigos e família.</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-elegant group h-[420px]">
            <img src={pool} alt="Piscina ao ar livre" className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent" />
            <div className="absolute bottom-0 p-8 text-primary-foreground">
              <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Lazer</span>
              <h3 className="font-display text-3xl font-bold mt-3">Piscina & Jardim</h3>
              <p className="text-primary-foreground/80 mt-2">Um oásis ao ar livre para refrescar-se e curtir o sol em qualquer estação.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-soft border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl font-bold mb-4">Tudo o que você precisa</h3>
              <p className="text-muted-foreground mb-6">Todos os nossos quartos incluem comodidades modernas para garantir uma estadia perfeita do início ao fim.</p>
              <Button variant="hero" size="lg" asChild>
                <a href="#contacto">Reservar Quarto</a>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {amenities.map((a) => (
                <div key={a.label} className="flex items-center gap-3 bg-background rounded-lg p-3 shadow-soft">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <a.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium leading-tight">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
