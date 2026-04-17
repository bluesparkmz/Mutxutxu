import { Button } from "@/components/ui/button";
import { ChevronDown, Star } from "lucide-react";
import logo from "@/assets/logo.png";
import pool from "@/assets/pool.jpg";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${pool})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-secondary/40" />

      <div className="relative z-10 container text-center text-primary-foreground py-32">
        <img
          src={logo}
          alt="Logótipo Mutxutxu"
          className="h-32 md:h-44 mx-auto mb-6 animate-float drop-shadow-2xl"
        />

        <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-full px-4 py-1.5 mb-6 animate-fade-up">
          <Star className="h-4 w-4 text-accent fill-accent" />
          <span className="text-sm font-medium text-accent">Experiência única em hospedagem & gastronomia</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight animate-fade-up">
          Bem-vindo ao <span className="text-accent">Mutxutxu</span>
        </h1>

        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 text-primary-foreground/90 text-balance animate-fade-up">
          Residencial e Restaurante onde o sabor encontra o conforto. Viva momentos inesquecíveis num ambiente acolhedor.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
          <Button variant="hero" size="xl" asChild>
            <a href="#restaurante">Descobrir Cardápio</a>
          </Button>
          <Button variant="outlineHero" size="xl" asChild>
            <a href="#residencia">Ver Quartos</a>
          </Button>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/80 hover:text-accent transition-smooth z-10"
        aria-label="Descer"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
};
