"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Compass, PencilRuler, HardHat, KeyRound } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Contacto e levantamento",
    body: "Primeira reunião, visita técnica e escuta do contexto. Avaliamos viabilidade e alinhamos expectativas.",
    duration: "Semana 1",
    Icon: Compass,
  },
  {
    num: "02",
    title: "Planeamento",
    body: "Orçamento detalhado, cronograma realista, escolha de soluções e seleção criteriosa de materiais.",
    duration: "Semanas 2–4",
    Icon: PencilRuler,
  },
  {
    num: "03",
    title: "Execução",
    body: "Abertura de obra com equipa dedicada, reporte semanal, controlo de qualidade e fiscalização permanente.",
    duration: "Duração da obra",
    Icon: HardHat,
  },
  {
    num: "04",
    title: "Entrega",
    body: "Vistoria final, correcções acompanhadas, entrega do dossier técnico e acompanhamento pós-obra.",
    duration: "Fase final",
    Icon: KeyRound,
  },
];

export function Process() {
  return (
    <section
      id="processo"
      className="relative overflow-hidden bg-bone-100 py-[var(--section-y)]"
    >
      <div className="grid-technical absolute inset-0 opacity-50" aria-hidden />
      <div className="shell relative">
        <SectionHeader
          count="[ 07 ]"
          eyebrow="Método"
          title="Um processo estruturado em quatro momentos claros."
          description="Cada obra segue um método que já provou ser eficaz em dezenas de intervenções. Sabe o que esperar, quando esperar e quem contactar a cada momento."
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-24">
          {/* Connecting line (desktop) */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-bone-300 to-transparent lg:block"
            aria-hidden
          />

          <Stagger
            as="ol"
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0"
            staggerChildren={0.12}
          >
            {STEPS.map((s, i) => (
              <StaggerItem
                as="li"
                key={s.num}
                className="group relative flex flex-col items-center text-center lg:px-8"
              >
                {/* Node */}
                <div className="relative">
                  <div className="flex h-[88px] w-[88px] items-center justify-center border border-bone-300 bg-bone transition-all duration-500 ease-out-expo group-hover:border-accent group-hover:bg-ink group-hover:text-bone md:h-[104px] md:w-[104px]">
                    <s.Icon strokeWidth={1.2} className="h-6 w-6 text-ink-500 transition-colors duration-500 group-hover:text-bone md:h-7 md:w-7" />
                  </div>
                  <span className="absolute -right-2 -top-2 bg-accent px-2 py-1 font-display text-[10px] tracking-widest text-bone">
                    {s.num}
                  </span>
                </div>

                <h3 className="mt-8 font-serif text-xl font-normal tracking-[-0.005em] md:mt-10">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-[240px] text-body text-ink-400 md:mt-5">
                  {s.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-accent md:mt-7">
                  <span className="h-px w-6 bg-accent" />
                  {s.duration}
                </span>

                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="mt-6 h-8 w-px bg-bone-300 lg:hidden"
                  />
                )}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
