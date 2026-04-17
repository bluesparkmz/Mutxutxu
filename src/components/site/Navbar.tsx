import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#restaurante", label: "Restaurante" },
  { href: "#residencia", label: "Residência" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contacto", label: "Contacto" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-smooth",
        scrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-elegant py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Mutxutxu logótipo" className="h-12 w-12 md:h-14 md:w-14 object-contain drop-shadow-lg" />
          <div className="hidden sm:block">
            <p className="font-display text-lg md:text-xl font-bold text-primary-foreground leading-none">Mutxutxu</p>
            <p className="text-[10px] md:text-xs text-accent tracking-widest uppercase">Residencial & Restaurante</p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/90 hover:text-accent transition-smooth relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-smooth" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="hero" size="sm" asChild>
            <a href="#contacto">Reservar</a>
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-secondary/98 backdrop-blur-lg border-t border-primary-foreground/10 mt-2">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-primary-foreground/90 hover:text-accent transition-smooth py-2"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" asChild>
              <a href="#contacto" onClick={() => setOpen(false)}>Reservar</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
