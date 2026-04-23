"use client";

import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BRAND } from "@/lib/constants";
import { PHOTOS } from "@/lib/media";

export function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["15%", "-15%"]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-ink py-[var(--section-y)] text-bone">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <Image
          src={PHOTOS.rooftopView}
          alt="Vista de obra em curso num edifício antigo de Lisboa."
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
        <div className="absolute inset-0 grid-technical-light opacity-20" aria-hidden />
      </motion.div>

      <div className="shell relative">
        <div className="mx-auto grid max-w-5xl gap-12 text-center">
          <Reveal>
            <div className="mx-auto eyebrow text-bone/60">
              Construa a próxima obra com a Forma Reta
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-serif text-display-lg font-normal leading-[1.02] tracking-[-0.01em] text-bone">
              Uma obra merece{" "}
              <span className="italic text-accent">mais que</span> um
              orçamento.
              <br />
              Merece um <span className="stroke-text">parceiro</span>.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto max-w-2xl text-body-lg text-bone/65">
              Marque uma visita técnica sem compromisso. Ouvimos o que tem
              em mente, avaliamos o imóvel e apresentamos uma proposta
              detalhada em tempo útil.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LinkButton href="#contacto" variant="accent" icon={<ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />}>
                Pedir Orçamento
              </LinkButton>
              <LinkButton
                href={BRAND.whatsappHref}
                external
                variant="ghost-light"
                icon={<MessageCircle className="h-4 w-4" strokeWidth={1.5} />}
                iconPosition="leading"
              >
                Falar no WhatsApp
              </LinkButton>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[11px] uppercase tracking-[0.28em] text-bone/55">
              <span>Resposta em 24h úteis</span>
              <span className="hidden h-3 w-px bg-bone/25 sm:block" />
              <span>Visita técnica sem custos</span>
              <span className="hidden h-3 w-px bg-bone/25 sm:block" />
              <span>Confidencialidade garantida</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
