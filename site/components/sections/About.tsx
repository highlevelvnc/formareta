"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { PHOTOS } from "@/lib/media";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["6%", "-6%"]);

  return (
    <section
      ref={ref}
      id="sobre"
      className="relative bg-bone py-[var(--section-y)]"
    >
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-20">
        {/* Image column */}
        <div className="relative lg:col-span-6">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-6 -top-6 hidden h-40 w-40 border-l border-t border-accent/40 lg:block" aria-hidden />
              <div className="absolute -right-6 -bottom-6 hidden h-40 w-40 border-b border-r border-accent/40 lg:block" aria-hidden />

              <motion.div style={{ y: imgY }} className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={PHOTOS.bannerOutdoor}
                  alt="Banner da Forma Reta em obra de reabilitação num edifício pombalino de Lisboa."
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink/5 mix-blend-multiply" />
              </motion.div>

              <div className="absolute -bottom-10 left-6 z-10 bg-ink p-8 text-bone lg:-bottom-12 lg:-right-12 lg:left-auto">
                <div className="font-serif text-[56px] font-normal leading-none tabular-nums">
                  15<span className="text-accent">+</span>
                </div>
                <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-bone/60">
                  Anos de obra
                  <br />
                  em Portugal
                </div>
              </div>

              <div className="mt-36 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-ink-400 lg:mt-12">
                <span className="h-px w-10 bg-accent" />
                <span>Fig. 01 — Obra em Lisboa</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Copy column */}
        <div className="lg:col-span-6 lg:pl-6">
          <Reveal>
            <div className="eyebrow">Manifesto</div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-6 font-serif text-display-lg font-normal leading-[1.02] tracking-[-0.01em]">
              Construir é um acto
              <br />
              de <span className="text-accent">rigor</span> e
              <br />
              de <span className="italic">responsabilidade.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 space-y-6 text-body-lg text-ink-500">
              <p>
                A <strong className="font-medium text-ink">Forma Reta</strong> é
                uma empresa portuguesa de construção, remodelação e demolição,
                com sede na região de Lisboa e equipa dedicada a reabilitação
                de edifícios antigos.
              </p>
              <p>
                Intervimos em <strong className="font-medium text-ink">edifícios pombalinos</strong>,
                prédios devolutos, moradias e espaços comerciais — sempre com
                o mesmo compromisso: método, segurança em obra e acabamentos
                que resistem ao tempo.
              </p>
              <p>
                O nosso nome diz tudo: trabalhamos em linha direta com o
                cliente, sem rodeios e sem surpresas. Orçamentos claros,
                prazos honestos e uma equipa que se vê no estaleiro todos os
                dias.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-14 grid gap-10 border-t border-bone-300 pt-10 sm:grid-cols-2">
              <Pillar
                title="Especialidade"
                body="Reabilitação estrutural de edifícios antigos — reforços metálicos, vigamentos, consolidação e acabamentos completos."
              />
              <Pillar
                title="Promessa"
                body="Rigor, transparência, cumprimento. Um interlocutor direto do primeiro contacto à entrega das chaves."
              />
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs uppercase tracking-[0.28em] text-ink-400">
              <Badge>Empresa licenciada</Badge>
              <Badge>Alvará de construção</Badge>
              <Badge>Seguro de obra</Badge>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h4 className="flex items-center gap-3 text-label uppercase text-ink">
        <span className="h-px w-6 bg-accent" />
        {title}
      </h4>
      <p className="mt-4 text-body text-ink-400">{body}</p>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}
