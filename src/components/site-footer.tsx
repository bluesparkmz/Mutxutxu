import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo-mutxutxu.png";

export function SiteFooter() {
  return (
    <footer className="relative bg-[oklch(0.12_0.02_160)] border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Mutxutxu — Residencial e Restaurante"
              className="h-14 w-14 object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]"
            />
            <div>
              <div className="font-display text-2xl">Mutxutxu</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Restaurante · Residência
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
            Onde a alma da gastronomia africana encontra o conforto de uma residência boutique.
            Uma experiência sensorial inesquecível, da mesa ao travesseiro.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Navegar</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Início</Link></li>
            <li><Link to="/menu" className="hover:text-primary">Menu do Chef</Link></li>
            <li><Link to="/suites" className="hover:text-primary">Nossas Suítes</Link></li>
            <li><Link to="/contato" className="hover:text-primary">Reservas</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>Av. Marginal, 1234 — Maputo</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>+258 84 000 0000</span></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>ola@mutxutxu.co.mz</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Mutxutxu — Todos os direitos reservados.</p>
          <p className="font-display italic">Saboreie. Descanse. Reviva.</p>
        </div>
      </div>
    </footer>
  );
}