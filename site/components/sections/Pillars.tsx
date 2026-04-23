"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { PHOTOS } from "@/lib/media";
import { cn } from "@/lib/utils";

type Pillar = {
  num: string;
  name: string;
  lead: string;
  summary: string;
  image: string;
};

const PILLARS: Pillar[] = [
  {
    num: "I.",
    name: "Construção",
    lead: "Obra nova",
    summary:
      "Moradias unifamiliares e edifícios de raiz, do licenciamento à chave-na-mão.",
    image: PHOTOS.outdoorTeam,
  },
  {
    num: "II.",
    name: "Remodelação",
    lead: "Transformação integral",
    summary:
      "Remodelação de apartamentos, moradias e lojas com nova compartimentação e acabamentos.",
    image: PHOTOS.interiorWork,
  },
  {
    num: "III.",
    name: "Reabilitação",
    lead: "Edifícios antigos",
    summary:
      "Reforço estrutural, consolidação e recuperação de pombalinos e prédios centenários.",
    image: PHOTOS.reinforcementMesh,
  },
];

export function Pillars() {
  return (
    <section className="relative overflow-hidden border-y border-bone-300 bg-bone-100">
      <ul className="grid grid-cols-1 md:grid-cols-3">
        {PILLARS.map((p, i) => (
          <PillarCard key={p.num} pillar={p} index={i} />
        ))}
      </ul>
    </section>
  );
}

function PillarCard({ pillar, index }: { pillar: Pillar; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative isolate flex min-h-[380px] flex-col justify-between overflow-hidden px-8 py-14 md:px-10 md:py-20 lg:min-h-[460px] lg:px-14",
        index < 2 && "md:border-r md:border-bone-300",
      )}
    >
      {/* bg image that surfaces on hover */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={pillar.image}
          alt=""
          fill
          aria-hidden
          sizes="(max-width: 768px) 100vw, 34vw"
          className="object-cover opacity-0 transition-opacity duration-[1200ms] ease-out-expo group-hover:opacity-25"
        />
        <div className="absolute inset-0 bg-bone-100 transition-opacity duration-700 group-hover:opacity-0" />
      </div>

      {/* top */}
      <div className="flex items-start justify-between">
        <span className="font-serif text-lg tracking-[0.06em] text-accent">
          {pillar.num}
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-ink-400 transition-colors group-hover:text-ink">
          {pillar.lead}
        </span>
      </div>

      {/* bottom */}
      <div className="mt-24">
        <h3 className="font-serif text-[40px] font-normal leading-[0.95] tracking-[-0.01em] text-ink md:text-[56px] lg:text-[64px]">
          {pillar.name}
        </h3>
        <p className="mt-6 max-w-sm text-body text-ink-400">{pillar.summary}</p>
        <Link
          href="#servicos"
          className="mt-8 inline-flex items-center gap-3 text-label uppercase text-ink transition-colors hover:text-accent"
        >
          <span>Explorar</span>
          <ArrowUpRight
            strokeWidth={1.25}
            className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>

      {/* corner tick */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l border-t border-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </motion.li>
  );
}
