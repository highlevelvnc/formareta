"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { PHOTOS } from "@/lib/media";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  category: "Reabilitação" | "Demolição" | "Construção" | "Estrutura";
  location: string;
  year: string;
  scope: string;
  aspect: "tall" | "wide" | "square";
  image: string;
  alt: string;
};

const PROJECTS: Project[] = [
  {
    title: "Edifício Pombalino",
    category: "Reabilitação",
    location: "Centro Histórico · Lisboa",
    year: "2025",
    scope: "Reabilitação integral + reforço estrutural",
    aspect: "wide",
    image: PHOTOS.outdoorTeam,
    alt: "Vista exterior de edifício pombalino em reabilitação, com andaimes e equipa em obra.",
  },
  {
    title: "Reforço de Vigamento",
    category: "Estrutura",
    location: "Lisboa",
    year: "2025",
    scope: "Substituição de vigas + consolidação",
    aspect: "tall",
    image: PHOTOS.reabilitacaoWorker,
    alt: "Trabalhador especializado em reabilitação estrutural a intervir em vigamento antigo.",
  },
  {
    title: "Desmantelamento Interior",
    category: "Demolição",
    location: "Baixa · Lisboa",
    year: "2024",
    scope: "Demolição controlada + gestão de resíduos",
    aspect: "tall",
    image: PHOTOS.demolicaoWorker,
    alt: "Operador a executar demolição controlada com martelo pneumático.",
  },
  {
    title: "Consolidação de Paredes",
    category: "Estrutura",
    location: "Lisboa",
    year: "2024",
    scope: "Malha metálica + argamassa reforçada",
    aspect: "wide",
    image: PHOTOS.reinforcementMesh,
    alt: "Parede com malha de reforço em rede metálica antes de argamassa.",
  },
  {
    title: "Cobertura & Vigamento",
    category: "Reabilitação",
    location: "Lisboa",
    year: "2024",
    scope: "Substituição de cobertura em madeira",
    aspect: "wide",
    image: PHOTOS.roofBeams,
    alt: "Estrutura de madeira de cobertura antes da colocação de novo vigamento.",
  },
  {
    title: "Abertura de Piso",
    category: "Demolição",
    location: "Lisboa",
    year: "2024",
    scope: "Remoção de pavimento + preparação estrutural",
    aspect: "tall",
    image: PHOTOS.buildingGutted,
    alt: "Interior de edifício em demolição com vigamento exposto.",
  },
  {
    title: "Reforço com Perfis Metálicos",
    category: "Estrutura",
    location: "Lisboa",
    year: "2024",
    scope: "Vigas IPE + ancoragens químicas",
    aspect: "square",
    image: PHOTOS.steelBeam,
    alt: "Perfis metálicos a reforçar estrutura de betão existente.",
  },
  {
    title: "Equipa em Estaleiro",
    category: "Construção",
    location: "Lisboa",
    year: "2025",
    scope: "Obra em execução · acompanhamento diário",
    aspect: "tall",
    image: PHOTOS.teamWheelbarrows,
    alt: "Equipa da Forma Reta em estaleiro de obra de reabilitação.",
  },
];

const FILTERS = ["Todos", "Reabilitação", "Demolição", "Estrutura", "Construção"] as const;
type Filter = (typeof FILTERS)[number];

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("Todos");

  const filtered =
    filter === "Todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section
      id="obras"
      className="relative overflow-hidden bg-ink py-[var(--section-y)] text-bone"
    >
      <div className="grid-technical-light absolute inset-0 opacity-30" aria-hidden />
      <div className="shell relative">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeader
            count="[ 04 ]"
            eyebrow="Obras recentes"
            title="Obra real, documentada em todas as fases."
            description="Uma seleção de intervenções recentes em reabilitação, demolição e reforço estrutural. Sem renders — imagens de obra a decorrer, no estaleiro."
            tone="bone"
          />
          <Link
            href="#contacto"
            className="group hidden items-center gap-3 text-label uppercase text-bone/80 transition-colors hover:text-accent lg:inline-flex"
          >
            Discutir a sua obra
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.25}
            />
          </Link>
        </div>

        <Reveal className="mt-16" delay={0.1}>
          <div className="flex flex-wrap items-center gap-3 border-b border-bone/10 pb-6">
            <span className="mr-4 text-eyebrow uppercase text-bone/40">
              Filtrar
            </span>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "group relative px-4 py-2 text-label uppercase transition-colors",
                  filter === f ? "text-ink" : "text-bone/60 hover:text-bone",
                )}
              >
                {filter === f && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 -z-10 bg-bone"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const span =
    project.aspect === "wide"
      ? "md:col-span-4 aspect-[16/9]"
      : project.aspect === "square"
        ? "md:col-span-3 aspect-square"
        : "md:col-span-2 aspect-[3/4]";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative isolate overflow-hidden border border-bone/10 bg-ink-800",
        span,
      )}
    >
      <Image
        src={project.image}
        alt={project.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw"
        className="object-cover grayscale-[35%] transition-all duration-[1200ms] ease-out-expo group-hover:scale-[1.04] group-hover:grayscale-0"
      />

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink via-ink/70 to-transparent" />

      <div className="absolute left-4 top-4 flex items-center gap-2 bg-ink/70 px-3 py-1.5 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="text-[10px] uppercase tracking-[0.28em] text-bone/85">
          {project.category}
        </span>
      </div>

      <span aria-hidden className="absolute left-0 top-0 h-6 w-6 border-l border-t border-bone/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span aria-hidden className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-bone/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl font-normal leading-tight tracking-[-0.005em] text-bone md:text-[28px]">
              {project.title}
            </h3>
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-eyebrow uppercase text-bone/60">
              <span>{project.location}</span>
              <span>{project.year}</span>
            </div>
            <p className="mt-2 max-w-sm text-xs text-bone/55">{project.scope}</p>
          </div>
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-bone/30 text-bone transition-all duration-500 ease-out-expo group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.25} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
