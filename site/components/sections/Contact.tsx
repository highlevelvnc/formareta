"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils";

const SERVICE_OPTIONS = [
  "Construção",
  "Remodelação",
  "Demolição",
  "Reabilitação",
  "Acabamentos",
  "Gestão de Obra",
];

const BUDGET_OPTIONS = [
  "< 50.000 €",
  "50 – 150.000 €",
  "150 – 500.000 €",
  "500.000 €+",
  "A definir",
];

export function Contact() {
  return (
    <section id="contacto" className="relative bg-bone py-[var(--section-y)]">
      <div className="shell">
        <SectionHeader
          count="[ 10 ]"
          eyebrow="Contacto"
          title="Tem uma obra em mãos? Conte-nos — respondemos em 24h úteis."
          description="Preencha o formulário ou use um dos canais directos. Em pedidos de orçamento, inclua a localização, a tipologia e o estado actual do imóvel para acelerarmos a resposta."
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-12 lg:col-span-5 lg:pl-10">
            <Reveal delay={0.1}>
              <div className="bg-ink p-10 text-bone">
                <h3 className="font-display text-xl uppercase tracking-[-0.005em]">
                  Canais directos
                </h3>
                <p className="mt-3 text-sm text-bone/60">
                  Fale connosco pelo canal que preferir. Respondemos sempre em
                  horário comercial.
                </p>

                <ul className="mt-8 space-y-6">
                  <DirectLine
                    Icon={MessageCircle}
                    label="WhatsApp · Obra"
                    value={BRAND.phones.whatsapp}
                    href={BRAND.whatsappHref}
                    external
                  />
                  <DirectLine
                    Icon={Phone}
                    label="Escritório"
                    value={BRAND.phones.office}
                    href={BRAND.officeHref}
                  />
                  <DirectLine
                    Icon={Mail}
                    label="Email"
                    value={BRAND.email}
                    href={`mailto:${BRAND.email}`}
                  />
                </ul>

                <div className="mt-10 flex flex-col gap-3">
                  <LinkButton href={BRAND.whatsappHref} external variant="accent">
                    Iniciar conversa no WhatsApp
                  </LinkButton>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="border border-bone-300 p-10">
                <h4 className="flex items-center gap-3 text-label uppercase text-ink">
                  <span className="h-px w-6 bg-accent" />
                  Visita técnica
                </h4>
                <ul className="mt-6 space-y-5 text-sm text-ink-500">
                  <li className="flex gap-4">
                    <MapPin strokeWidth={1.25} className="h-4 w-4 shrink-0 translate-y-0.5 text-accent" />
                    <span>
                      {BRAND.address.line1}
                      <br />
                      {BRAND.address.line2}
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <Clock strokeWidth={1.25} className="h-4 w-4 shrink-0 translate-y-0.5 text-accent" />
                    <span>
                      {BRAND.hours.weekdays}
                      <br />
                      {BRAND.hours.saturday}
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}

function DirectLine({
  Icon,
  label,
  value,
  href,
  external,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group flex items-center gap-5 border-b border-bone/10 pb-5 transition-colors hover:border-accent"
      >
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-bone/20 transition-colors group-hover:border-accent group-hover:text-accent">
          <Icon className="h-4 w-4" strokeWidth={1.25} />
        </span>
        <span className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.28em] text-bone/50">
            {label}
          </span>
          <span className="mt-1 text-body text-bone">{value}</span>
        </span>
        <ArrowRight
          className="ml-auto h-4 w-4 -translate-x-2 opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-accent"
          strokeWidth={1.25}
        />
      </a>
    </li>
  );
}

function ContactForm() {
  const [service, setService] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!service) return;
    setStatus("sending");
    // simulated submit — integrate with your backend / form endpoint here
    setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <Reveal>
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2"
      >
        <Field label="Nome completo" name="nome" required placeholder="Como devemos tratá-lo?" />
        <Field label="Email" name="email" type="email" required placeholder="nome@dominio.pt" />
        <Field label="Telefone" name="telefone" required placeholder="+351 910 000 000" />
        <Field label="Localização do imóvel" name="local" placeholder="Ex: Baixa de Lisboa" />

        {/* Service selector */}
        <div className="md:col-span-2">
          <Label>Tipo de projeto *</Label>
          <div className="mt-4 flex flex-wrap gap-2">
            {SERVICE_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setService(opt)}
                aria-pressed={service === opt}
                className={cn(
                  "border px-5 py-2.5 text-label uppercase transition-all duration-300",
                  service === opt
                    ? "border-ink bg-ink text-bone"
                    : "border-bone-300 text-ink-500 hover:border-ink hover:text-ink",
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div className="md:col-span-2">
          <Label>Orçamento previsto</Label>
          <div className="mt-4 flex flex-wrap gap-2">
            {BUDGET_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setBudget(opt)}
                aria-pressed={budget === opt}
                className={cn(
                  "border px-5 py-2.5 text-label uppercase transition-all duration-300",
                  budget === opt
                    ? "border-accent bg-accent text-bone"
                    : "border-bone-300 text-ink-500 hover:border-ink hover:text-ink",
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <Label htmlFor="mensagem">Descreva o projeto</Label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={5}
            required
            placeholder="Área, tipologia, estado actual do imóvel, timing esperado e qualquer detalhe relevante."
            className="mt-3 block w-full resize-none border-b border-bone-300 bg-transparent py-3 text-body text-ink placeholder:text-ink-300 focus:border-ink"
          />
        </div>

        <div className="md:col-span-2">
          <label className="flex items-start gap-4 text-sm text-ink-500">
            <input
              type="checkbox"
              required
              className="mt-1 h-4 w-4 shrink-0 appearance-none border border-bone-400 checked:border-ink checked:bg-ink"
            />
            <span>
              Li e aceito a <a href="#" className="text-ink underline underline-offset-4 hover:text-accent">Política de Privacidade</a> e o
              tratamento dos dados para efeitos de contacto comercial.
            </span>
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-6 md:col-span-2">
          <button
            type="submit"
            disabled={status === "sending" || !service}
            className={cn(
              "btn-base px-9 py-4 transition-all",
              status === "sent"
                ? "bg-accent text-bone"
                : "bg-ink text-bone hover:bg-accent disabled:opacity-40",
            )}
          >
            {status === "sent" ? (
              <>
                <Check className="h-4 w-4" strokeWidth={2} /> Pedido recebido
              </>
            ) : status === "sending" ? (
              "A enviar…"
            ) : (
              <>
                Pedir Orçamento <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </>
            )}
          </button>
          <span className="text-xs uppercase tracking-[0.28em] text-ink-400">
            Respondemos em 24h úteis
          </span>
        </div>
      </form>
    </Reveal>
  );
}

function Label({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-ink-400"
    >
      <span className="h-px w-5 bg-accent" />
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <Label htmlFor={name}>
        {label}
        {required && " *"}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 block w-full border-b border-bone-300 bg-transparent py-3 text-body text-ink placeholder:text-ink-300 focus:border-ink"
      />
    </div>
  );
}
