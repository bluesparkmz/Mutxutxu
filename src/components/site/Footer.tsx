import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-primary-foreground py-10 border-t border-primary-foreground/10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Mutxutxu" className="h-12 w-12" />
          <div>
            <p className="font-display font-bold text-lg">Mutxutxu</p>
            <p className="text-xs text-primary-foreground/60 tracking-widest uppercase">Residencial & Restaurante</p>
          </div>
        </div>
        <p className="text-sm text-primary-foreground/60 text-center">
          © {new Date().getFullYear()} Mutxutxu. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
