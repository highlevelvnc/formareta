"use client";

import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { PHOTOS } from "@/lib/media";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    num: "01",
    title: "Construção",
    short: "Obra nova residencial e de serviços",
    body: "Execução integral de moradias e edifícios, do licenciamento à chave-na-mão, com direção de obra permanente.",
    image: PHOTOS.outdoorTeam,
  },
  {
    num: "02",
    title: "Remodelação",
    short: "Transformação integral de interiores",
    body: "Remodelação de apartamentos, moradias e lojas com nova compartimentação, redes técnicas e acabamentos.",
    image: PHOTOS.interiorWork,
  },
  {
    num: "03",
    title: "Demolição",
    short: "Demolição controlada e selectiva",
    body: "Demolição parcial, total ou selectiva com segurança, proteção de vizinhos e gestão de resíduos em obra.",
    image: PHOTOS.demolicaoWorker,
  },
  {
    num: "04",
    title: "Reabilitação",
    short: "Edifícios antigos e pombalinos",
    body: "Reforço estrutural, substituição de vigamentos, consolidação de paredes e recuperação de edifícios centenários.",
    image: PHOTOS.reinforcementMesh,
  },
  {
    num: "05",
    title: "Acabamentos",
    short: "Materiais e detalhe final",
    body: "Revestimentos, carpintarias, metais e pedra natural aplicados com cuidado que distingue uma obra cuidada.",
    image: PHOTOS.interiorBeams,
  },
  {
    num: "06",
    title: "Gestão de Obra",
    short: "Coordenação técnica e fiscalização",
    body: "Planeamento, orçamentação, controlo de custos e direção de obra com reporte regular ao cliente.",
    image: PHOTOS.teamReinforcement,
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative bg-bone-200 py-[var(--section-y)]">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeader
            count="[ 02 ]"
            eyebrow="Serviços"
            title="Expertise integrada, do licenciamento ao último detalhe."
            description="Um leque de serviços construído para que cada projeto tenha a mesma coerência técnica e acabamento — da demolição inicial ao último revestimento."
          />
          <div className="hidden items-center gap-3 text-xs uppercase tracking-[0.28em] text-ink-400 lg:flex">
            <span className="h-px w-10 bg-accent" />
            06 áreas de actuação
          </div>
        </div>

        <Stagger
          as="ul"
          className="mt-20 grid grid-cols-1 border-l border-t border-bone-300 md:grid-cols-2 lg:grid-cols-3"
          staggerChildren={0.06}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.num} service={service} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  return (
    <StaggerItem
      as="li"
      className={cn(
        "group relative isolate flex min-h-[400px] flex-col justify-between border-b border-r border-bone-300 bg-bone p-10 transition-colors duration-700 ease-out-expo",
        "hover:bg-ink hover:text-bone",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center opacity-0 transition-opacity duration-700 ease-out-expo group-hover:opacity-30"
        style={{ backgroundImage: `url(${service.image})` }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-ink opacity-0 transition-opacity duration-700 ease-out-expo group-hover:opacity-100" aria-hidden />

      <div className="flex items-start justify-between">
        <span className="number-tag">{service.num}</span>
        <ArrowUpRight
          strokeWidth={1.25}
          className="h-5 w-5 text-ink-300 transition-all duration-700 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
        />
      </div>

      <div className="mt-16">
        <h3 className="font-serif text-[30px] font-normal leading-[1.05] tracking-[-0.005em] text-ink transition-colors duration-700 ease-out-expo group-hover:text-bone">
          {service.title}
        </h3>
        <p className="mt-3 text-eyebrow uppercase text-accent/90">
          {service.short}
        </p>
        <p className="mt-6 max-w-sm text-body text-ink-400 transition-colors duration-700 ease-out-expo group-hover:text-bone/70">
          {service.body}
        </p>
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l border-t border-accent opacity-0 transition-opacity duration-500 ease-out-expo group-hover:opacity-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b border-r border-accent opacity-0 transition-opacity duration-500 ease-out-expo group-hover:opacity-100"
      />
    </StaggerItem>
  );
}
