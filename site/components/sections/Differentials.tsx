"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

const ITEMS = [
  {
    num: "01",
    title: "Rigor técnico",
    body: "Cálculos, pormenores e execução segundo as melhores práticas da engenharia e da construção portuguesa.",
  },
  {
    num: "02",
    title: "Organização e cumprimento",
    body: "Planeamento cronológico realista, reporte semanal e responsabilidade clara em cada etapa da obra.",
  },
  {
    num: "03",
    title: "Soluções à medida",
    body: "Cada projeto é analisado na sua especificidade. Não vendemos pacotes — desenhamos a solução certa.",
  },
  {
    num: "04",
    title: "Materiais de referência",
    body: "Seleção criteriosa de materiais e parcerias consolidadas com fornecedores de primeira linha em Portugal.",
  },
  {
    num: "05",
    title: "Transparência total",
    body: "Orçamentos detalhados, faturação clara e decisões partilhadas. Sem surpresas, sem meias palavras.",
  },
  {
    num: "06",
    title: "Acompanhamento próximo",
    body: "Um interlocutor directo, disponível, que conhece a sua obra pelo nome. Do primeiro contacto à entrega final.",
  },
];

export function Differentials() {
  return (
    <section className="relative overflow-hidden bg-bone py-[var(--section-y)]">
      <div className="grid-technical absolute inset-0 opacity-60" aria-hidden />
      <div className="shell relative">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:pr-10">
            <SectionHeader
              count="[ 04 ]"
              eyebrow="Porquê a Forma Reta"
              title="Seis compromissos que tornam a diferença real, não publicitária."
              description="Aquilo que defendemos abaixo não é discurso de marketing — são princípios de trabalho aplicados em cada obra. Escritos para serem cobrados pelo cliente."
            />
          </div>

          <Stagger
            as="ul"
            className="grid gap-0 border-t border-bone-300 lg:col-span-7 lg:grid-cols-2"
            staggerChildren={0.05}
          >
            {ITEMS.map((item) => (
              <StaggerItem
                key={item.num}
                as="li"
                className="group border-b border-bone-300 py-10 pr-6 transition-colors duration-500 ease-out-expo hover:bg-bone-100 lg:px-8 lg:even:border-l"
              >
                <div className="flex items-baseline justify-between">
                  <span className="number-tag">{item.num}</span>
                  <span className="h-px w-10 bg-ink-300/40 transition-all duration-700 ease-out-expo group-hover:w-20 group-hover:bg-accent" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium uppercase tracking-[-0.005em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-body text-ink-400">{item.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
