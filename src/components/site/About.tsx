import { Utensils, BedDouble, Waves, Heart } from "lucide-react";
import wall from "@/assets/mutxutxu-mural.png";

const features = [
  { icon: Utensils, title: "Gastronomia Autêntica", desc: "Pratos preparados com ingredientes frescos e muito sabor." },
  { icon: BedDouble, title: "Quartos Confortáveis", desc: "Hospedagem aconchegante para descansar com qualidade." },
  { icon: Waves, title: "Piscina & Lazer", desc: "Espaços ao ar livre para relaxar em pleno conforto." },
  { icon: Heart, title: "Ambiente Familiar", desc: "Atendimento caloroso que faz você sentir-se em casa." },
];

export const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background relative overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-warm rounded-2xl opacity-20 blur-2xl" />
          <img
            src={wall}
            alt="Entrada do Mutxutxu"
            className="relative rounded-2xl shadow-elegant w-full h-[500px] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-gradient-gold rounded-2xl p-6 shadow-gold hidden md:block">
            <p className="font-display text-4xl font-bold text-secondary">100%</p>
            <p className="text-sm text-secondary/80 font-medium">Hospitalidade</p>
          </div>
        </div>

        <div>
          <span className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-3">Sobre Nós</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-balance">
            Um espaço único onde <span className="text-primary">tradição</span> e <span className="text-primary">conforto</span> se encontram
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            O Mutxutxu nasceu da paixão por receber bem. Combinamos a melhor gastronomia local com hospedagem confortável, num ambiente que celebra a cultura e a alegria de estar junto.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-gradient-card rounded-xl p-5 shadow-soft hover:shadow-warm transition-smooth border border-border group"
              >
                <div className="w-11 h-11 rounded-lg bg-gradient-warm flex items-center justify-center mb-3 group-hover:scale-110 transition-bounce">
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
