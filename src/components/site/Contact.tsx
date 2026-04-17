import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, Clock, Instagram, Facebook } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-gradient-dark text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-accent font-semibold tracking-widest uppercase text-sm mb-3">Contacto</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-balance">
            Venha viver a <span className="text-accent">experiência Mutxutxu</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">Reserve a sua mesa ou quarto. Estamos prontos para o receber.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Phone, title: "Telefone", lines: ["+258 87 781 0419"], href: "sms:+258877810419" },
            { icon: Mail, title: "Email", lines: ["mutxutxu@gmail.com"], href: "mailto:mutxutxu@gmail.com" },
            { icon: MapPin, title: "Endereço", lines: ["Bairro Masenjere", "Perto da Escola Eduardo"] },
            { icon: Clock, title: "Horário", lines: ["Todos os dias 10h - 23h", "(Exceto segunda-feira)"] },
          ].map((c) => {
            const Wrapper: any = c.href ? "a" : "div";
            return (
              <Wrapper
                key={c.title}
                href={c.href}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:border-accent/40 hover:bg-primary-foreground/10 transition-smooth block"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-warm flex items-center justify-center mb-4 shadow-warm">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold mb-1">{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="text-primary-foreground/70 text-sm">{l}</p>
                ))}
              </Wrapper>
            );
          })}
        </div>

        <div className="bg-gradient-warm rounded-3xl p-10 md:p-14 text-center shadow-warm">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Pronto para nos visitar?
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            Faça já a sua reserva e garanta uma experiência inesquecível com a hospitalidade Mutxutxu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" asChild>
              <a href="tel:+258877810419">Ligar Agora</a>
            </Button>
            <Button variant="outlineHero" size="xl" asChild>
              <a href="https://wa.me/258825516853" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </Button>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <a href="#" aria-label="Instagram" className="w-11 h-11 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-smooth">
              <Instagram className="h-5 w-5 text-primary-foreground" />
            </a>
            <a href="#" aria-label="Facebook" className="w-11 h-11 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-smooth">
              <Facebook className="h-5 w-5 text-primary-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
