import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, UtensilsCrossed, BedDouble, Sparkles } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Reservas - Mutxutxu Restaurante & Residencia" },
      {
        name: "description",
        content: "Reserve a sua mesa ou suite no Mutxutxu. Disponibilidade limitada - garanta o seu lugar.",
      },
      { property: "og:title", content: "Reservas - Mutxutxu" },
      { property: "og:description", content: "A sua mesa aguarda. A sua suite tambem." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [type, setType] = useState<"mesa" | "suite">("mesa");
  const whatsappNumber = "258825516853";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const date = String(formData.get("date") ?? "");
    const count = String(formData.get("count") ?? "");
    const message = String(formData.get("message") ?? "").trim();

    const serviceLabel = type === "mesa" ? "Mesa" : "Suite";
    const dateLabel = type === "mesa" ? "Data" : "Check-in";
    const countLabel = type === "mesa" ? "Pessoas" : "Noites";

    const lines = [
      "Ola, gostaria de fazer uma reserva no Mutxutxu.",
      "",
      `Tipo: ${serviceLabel}`,
      `Nome: ${name}`,
      `Telefone: ${phone}`,
      `${dateLabel}: ${date}`,
      `${countLabel}: ${count}`,
      `Mensagem: ${message || "Sem mensagem adicional"}`,
    ];

    const text = encodeURIComponent(lines.join("\n"));
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    form.reset();
    setType("mesa");
  };

  return (
    <>
      <section className="relative pt-40 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold opacity-50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-primary inline-flex items-center gap-2">
            <Sparkles className="h-3 w-3" /> Ultima chamada
          </p>
          <h1 className="mt-4 font-display text-6xl md:text-8xl">
            <span className="text-shimmer">Reserve</span>
            <span className="block italic font-light text-foreground/95 text-3xl md:text-5xl mt-3">
              o seu momento Mutxutxu
            </span>
          </h1>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
            Disponibilidade muito limitada. Quanto antes reservar, melhor a sua mesa ou vista.
          </p>
        </motion.div>
      </section>

      <section className="px-6 lg:px-10 pb-32">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-card rounded-2xl p-8 md:p-10 border border-border shadow-elegant"
          >
            <div className="flex gap-2 p-1 rounded-full bg-background border border-border w-fit">
              <button
                onClick={() => setType("mesa")}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  type === "mesa" ? "bg-gradient-gold text-primary-foreground shadow-gold" : "text-foreground/70"
                }`}
              >
                <UtensilsCrossed className="h-4 w-4" /> Mesa
              </button>
              <button
                onClick={() => setType("suite")}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  type === "suite" ? "bg-gradient-gold text-primary-foreground shadow-gold" : "text-foreground/70"
                }`}
              >
                <BedDouble className="h-4 w-4" /> Suite
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nome completo" name="name" placeholder="O seu nome" required />
                <Field label="Telefone" name="phone" type="tel" placeholder="+258 ..." required />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label={type === "mesa" ? "Data" : "Check-in"} name="date" type="date" required />
                <Field
                  label={type === "mesa" ? "Pessoas" : "Noites"}
                  name="count"
                  type="number"
                  placeholder={type === "mesa" ? "2" : "1"}
                  required
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Mensagem (opcional)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Aniversario, alergias, pedidos especiais..."
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="mt-2 group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold hover:scale-[1.02] transition-transform animate-pulse-glow"
              >
                Reservar via WhatsApp
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-xs text-center text-muted-foreground">
                Voce sera redirecionado para o WhatsApp com os dados preenchidos.
              </p>
            </form>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <Info icon={MapPin} title="Visite-nos" lines={["Bairo massenjere"]} />
            <Info icon={Phone} title="Ligue" lines={["877810419"]} />
            <Info icon={Mail} title="Escreva" lines={["mutxutxu@gmail.com"]} />
            <Info icon={Clock} title="Horarios" lines={["10h as 23h", "Fechado a segunda-feira"]} />

            <div className="rounded-2xl p-6 bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/30">
              <p className="font-display text-2xl text-gold">Ultima disponibilidade</p>
              <p className="mt-2 text-sm text-foreground/80">
                Sextas e sabados esgotam com 3 semanas de antecedencia. Nao deixe para depois.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all"
      />
    </div>
  );
}

function Info({ icon: Icon, title, lines }: { icon: React.ComponentType<{ className?: string }>; title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl p-6 bg-card border border-border hover:border-primary/40 transition-colors">
      <div className="flex items-start gap-4">
        <div className="h-11 w-11 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary">{title}</p>
          {lines.map((l) => (
            <p key={l} className="mt-1 text-foreground/90">{l}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
