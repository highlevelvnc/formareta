"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Em que zonas trabalham?",
    a: "Temos equipa fixa na região de Lisboa e operamos na Grande Lisboa, Setúbal, Cascais, Oeiras, Sintra e Linha do Estoril. Em reabilitação de edifícios antigos temos preferência pelo centro histórico de Lisboa.",
  },
  {
    q: "Fazem demolição e reabilitação estrutural?",
    a: "Sim — é uma das nossas especialidades. Executamos demolição controlada (parcial, total ou selectiva), substituição de vigamentos, reforço com perfis metálicos, consolidação de paredes e recuperação de edifícios pombalinos.",
  },
  {
    q: "Apresentam orçamento sem compromisso?",
    a: "Sim. Fazemos visita técnica ao local e apresentamos uma proposta detalhada, por capítulos e sem custos associados. O orçamento é válido durante 30 dias.",
  },
  {
    q: "Como é feito o acompanhamento da obra?",
    a: "Cada obra tem um director de obra dedicado e um único interlocutor para o cliente. Enviamos reporte semanal com fotografias, progresso do cronograma e próximos passos. Pode visitar a obra sempre que quiser.",
  },
  {
    q: "Trabalham com o arquitecto do cliente?",
    a: "Com todo o prazer. Colaboramos regularmente com gabinetes de arquitectura e respeitamos integralmente o projeto. Se o cliente ainda não tem atelier, indicamos parceiros com quem temos histórico de trabalho.",
  },
  {
    q: "Que garantias oferecem após a entrega?",
    a: "Aplicamos as garantias legais em vigor em Portugal — 5 anos para elementos estruturais e 2 anos para equipamentos e acabamentos. Acrescentamos ainda um ano de acompanhamento pós-obra para afinações e esclarecimentos.",
  },
];

export function FAQ() {
  return (
    <section className="relative bg-bone-200 py-[var(--section-y)]">
      <div className="shell">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:pr-12">
            <SectionHeader
              count="[ 09 ]"
              eyebrow="Perguntas frequentes"
              title="O que costumam perguntar antes de começar a obra."
              description="Uma resposta directa às dúvidas mais recorrentes. Para qualquer questão adicional, estamos a um contacto de distância."
            />
          </div>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <ul className="border-t border-bone-300">
              {FAQS.map((faq, i) => (
                <FaqItem key={faq.q} faq={faq} index={i} />
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  faq,
  index,
}: {
  faq: { q: string; a: string };
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);
  return (
    <li className="border-b border-bone-300">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex w-full items-start justify-between gap-4 py-6 text-left md:gap-8 md:py-7"
      >
        <span className="flex items-start gap-4 md:gap-6">
          <span className="number-tag mt-1 w-8 shrink-0 md:w-10">0{index + 1}</span>
          <span className="font-serif text-[17px] font-normal leading-[1.25] tracking-[-0.005em] text-ink md:text-[22px]">
            {faq.q}
          </span>
        </span>
        <span
          className={cn(
            "mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center border border-bone-300 transition-all duration-500 ease-out-expo group-hover:border-ink",
            open && "bg-ink text-bone",
          )}
        >
          <Plus
            strokeWidth={1.25}
            className={cn(
              "h-4 w-4 transition-transform duration-500 ease-out-expo",
              open && "rotate-45",
            )}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 pl-12 pr-4 md:pb-8 md:pl-16 md:pr-16">
              <p className="max-w-2xl text-body text-ink-400">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
