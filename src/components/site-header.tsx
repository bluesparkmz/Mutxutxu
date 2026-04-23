import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-mutxutxu.png";

const links = [
  { to: "/", label: "Início" },
  { to: "/menu", label: "Menu" },
  { to: "/suites", label: "Suítes" },
  { to: "/galeria", label: "Galeria" },
  { to: "/contato", label: "Reservas" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={logo}
            alt="Mutxutxu — Residencial e Restaurante"
            className="h-12 w-12 object-contain transition-transform duration-500 group-hover:rotate-6 drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]"
          />
          <div className="leading-tight">
            <div className="font-display text-xl tracking-wide">Mutxutxu</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Restaurante · Residência
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors py-2"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
              <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
          <Link
            to="/contato"
            className="px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium tracking-wide shadow-gold hover:scale-105 transition-transform duration-300"
          >
            Reservar agora
          </Link>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-lg font-display text-foreground/90 hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 rounded-full bg-gradient-gold text-primary-foreground text-center font-medium"
            >
              Reservar agora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}