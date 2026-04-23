"use client";

import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Contratámos a Forma Reta para a reabilitação integral de um prédio antigo no centro de Lisboa. Resolveram a estrutura, substituíram vigamentos e entregaram com a obra limpa. Profissionalismo do primeiro ao último dia.",
    name: "Inês Torres",
    role: "Proprietária",
    project: "Prédio em Santos, Lisboa",
  },
  {
    quote:
      "A demolição controlada deste edifício exigia cuidado redobrado com os vizinhos. A equipa cumpriu o plano, comunicou sempre e não houve uma única ocorrência. Rigor e transparência a sério.",
    name: "Arq. Miguel Antunes",
    role: "Atelier M. Antunes",
    project: "Baixa de Lisboa",
  },
  {
    quote:
      "Orçamento claro, reporte semanal com fotografias e decisões partilhadas. Em dez meses de obra não tivemos uma única surpresa. Recomendo sem reservas a quem procura construtor de confiança em Lisboa.",
    name: "Tiago Almeida",
    role: "Cliente privado",
    project: "Moradia em Setúbal",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-bone py-[var(--section-y)]">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeader
            count="[ 08 ]"
            eyebrow="Quem já trabalhou connosco"
            title="Clientes, arquitectos e parceiros que nos confiaram as suas obras."
          />
          <div className="hidden items-center gap-6 text-xs uppercase tracking-[0.28em] text-ink-400 lg:flex">
            <span className="inline-flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              NPS 9.4 / 10
            </span>
            <span className="inline-flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              96% de recomendação
            </span>
          </div>
        </div>

        <Stagger
          as="ul"
          className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3"
          staggerChildren={0.08}
        >
          {TESTIMONIALS.map((t) => (
            <StaggerItem
              key={t.name}
              as="li"
              className="group flex h-full flex-col justify-between border border-bone-300 bg-bone-100 p-7 transition-all duration-500 ease-out-expo hover:border-ink sm:p-9 lg:p-10"
            >
              <div>
                <Quote
                  strokeWidth={1}
                  className="h-8 w-8 text-accent transition-transform duration-500 ease-out-expo group-hover:-translate-y-1"
                />
                <blockquote className="mt-6 font-serif text-[19px] font-normal leading-[1.4] text-ink-600 sm:mt-8 sm:text-[22px]">
                  <p>&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
              </div>

              <footer className="mt-12 border-t border-bone-300 pt-6">
                <div className="font-serif text-base text-ink">{t.name}</div>
                <div className="mt-1 text-xs text-ink-400">{t.role}</div>
                <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-accent">
                  {t.project}
                </div>
              </footer>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
