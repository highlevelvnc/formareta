"use client";

import { animate, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  hint?: string;
};

const STATS: Stat[] = [
  { value: 80, suffix: "+", label: "Obras entregues", hint: "Em Portugal" },
  { value: 15, suffix: "+", label: "Anos de experiência", hint: "Desde 2011" },
  { value: 100, suffix: "%", label: "Obras licenciadas", hint: "Alvará e seguros" },
  { value: 24, suffix: "h", label: "Tempo de resposta", hint: "Em dias úteis" },
];

export function Counter() {
  return (
    <section className="relative overflow-hidden bg-ink py-[var(--section-y)] text-bone">
      <div className="grid-technical-light absolute inset-0 opacity-25" aria-hidden />
      <div className="shell relative">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <div className="eyebrow text-bone/50 before:bg-accent">
                <span className="text-bone/80">Números</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-serif text-display-md font-normal leading-[1.05] tracking-[-0.01em] text-bone">
                Obra feita em Portugal, ano após ano.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-body text-bone/55">
              Construímos em média vinte obras por ano — entre reabilitação de
              edifícios antigos, remodelação e obra nova em Lisboa e arredores.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-2 border-t border-bone/15 md:mt-16 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <li
              key={stat.label}
              className={
                "flex flex-col justify-between border-b border-bone/15 py-8 pr-4 sm:py-10 sm:pr-6 lg:border-b-0 lg:py-12 " +
                (i % 2 === 1 ? "border-l border-bone/15 pl-4 sm:pl-6 " : "") +
                (i > 0 ? "lg:border-l lg:border-bone/15 lg:pl-10 " : "") +
                (i < STATS.length - 1 ? "lg:pr-10" : "")
              }
            >
              <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.28em] text-bone/45 sm:gap-3 sm:text-[10px]">
                <span className="h-px w-4 bg-accent sm:w-6" />
                {stat.hint}
              </div>
              <div className="mt-6 flex items-baseline gap-1 sm:mt-10">
                <Animated value={stat.value} />
                <span className="font-serif text-3xl font-normal leading-none text-accent sm:text-5xl md:text-6xl lg:text-7xl">
                  {stat.suffix}
                </span>
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.16em] text-bone/65 sm:mt-4 sm:text-sm sm:tracking-[0.2em]">
                {stat.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Animated({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motion = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motion, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
    });
    const unsub = motion.on("change", (v) => setDisplay(Math.round(v)));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, motion, value]);

  return (
    <span
      ref={ref}
      className="font-serif text-[48px] font-normal leading-[0.85] tabular-nums text-bone sm:text-[64px] md:text-[84px] lg:text-[112px]"
    >
      {display}
    </span>
  );
}
