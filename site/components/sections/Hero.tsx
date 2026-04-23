"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, MoveDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LinkButton } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { BRAND } from "@/lib/constants";
import { PHOTOS } from "@/lib/media";

const HERO_SLIDES = [
  {
    src: PHOTOS.teamReinforcement,
    alt: "Equipa da Forma Reta em obra de reabilitação estrutural no centro de Lisboa, com reforços metálicos em vigamento antigo.",
    caption: "Reabilitação estrutural · Lisboa",
  },
  {
    src: PHOTOS.demolicaoWorker,
    alt: "Operador da Forma Reta a executar demolição controlada com martelo pneumático sobre betão.",
    caption: "Demolição controlada",
  },
  {
    src: PHOTOS.outdoorTeam,
    alt: "Equipa em plena obra exterior, com andaimes e fachada em reabilitação, em edifício antigo de Lisboa.",
    caption: "Obra em curso · Pombalino",
  },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [slide, setSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["0%", "16%"]);
  const scale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1.04, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["0%", "18%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.3]);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(id);
  }, [reduced]);

  const current = HERO_SLIDES[slide];

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink pt-[var(--header-h)] text-bone"
    >
      {/* Background image cross-fade */}
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <AnimatePresence mode="sync">
          <motion.div
            key={current.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              priority={slide === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/65 to-ink/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />
        <div className="absolute inset-0 grid-technical-light opacity-20" aria-hidden />
      </motion.div>

      {/* Top meta row */}
      <div className="pointer-events-none absolute inset-x-0 top-[calc(var(--header-h)+24px)] z-10 hidden lg:block">
        <div className="shell flex items-center justify-between text-eyebrow uppercase text-bone/60">
          <span>Lisboa · Centro Histórico · Área Metropolitana</span>
          <span>Construção · Remodelação · Demolição</span>
          <span className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Obras em execução
          </span>
        </div>
      </div>

      {/* Slide caption (top-right) */}
      <div className="pointer-events-none absolute right-4 top-[calc(var(--header-h)+56px)] z-10 hidden md:right-6 md:top-[calc(var(--header-h)+80px)] md:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.caption}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 border border-bone/20 bg-ink/30 px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-px w-6 bg-accent" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-bone/80">
              {current.caption}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main copy */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="shell relative z-10 pb-28 pt-28 sm:pt-32 md:pb-32 md:pt-36"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 inline-flex items-center gap-3 border border-bone/25 bg-ink/25 px-3.5 py-1.5 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.28em] text-bone/85">
                Reabilitação &middot; Lisboa
              </span>
            </motion.div>

            <h1 className="font-serif text-display-xl font-normal leading-[0.95] tracking-[-0.01em]">
              <AnimatedWord word="Construímos" delay={0.15} />
              <br />
              <AnimatedWord word="com precisão." delay={0.3} className="text-bone/85" />
              <br />
              <AnimatedWord word="Reabilitamos" delay={0.45} />
              <br />
              <AnimatedWord word="com rigor." delay={0.6} className="italic text-accent" />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 max-w-xl text-body-lg text-bone/70"
            >
              Empresa portuguesa de construção, remodelação e demolição —
              especialistas em reabilitação de edifícios antigos em Lisboa e
              na área metropolitana. Técnica, método e obra entregue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <LinkButton href="#contacto" variant="accent" icon={<ArrowRight className="h-4 w-4" strokeWidth={1.5} />}>
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
              <a
                href="#obras"
                className="link-underline ml-2 text-label uppercase text-bone/70 transition-colors hover:text-bone"
              >
                Ver Obras
              </a>
            </motion.div>
          </div>

          {/* Credentials column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:col-span-4 lg:block"
          >
            <div className="mt-auto flex h-full flex-col justify-end">
              <div className="border-t border-bone/20 pt-8">
                <div className="grid grid-cols-2 gap-6">
                  <Stat value="15+" label="Anos de obra" />
                  <Stat value="80+" label="Projetos entregues" />
                  <Stat value="24h" label="Resposta a pedidos" />
                  <Stat value="100%" label="Obras legalizadas" />
                </div>
                <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-bone/55">
                  <span className="h-px w-8 bg-accent" />
                  Licenciada · Seguro de obra · IVA incluído
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Slide indicators */}
        <div className="mt-14 hidden items-center gap-2 md:flex">
          {HERO_SLIDES.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setSlide(i)}
              aria-label={`Mostrar ${s.caption}`}
              className="group flex h-6 items-center"
            >
              <span
                className={
                  "block h-px transition-all duration-700 ease-out-expo " +
                  (i === slide ? "w-16 bg-accent" : "w-8 bg-bone/30 group-hover:bg-bone/60")
                }
              />
            </button>
          ))}
        </div>
      </motion.div>

      {/* Bottom rail */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-bone/10 bg-ink/55 backdrop-blur-sm">
        <Marquee
          className="py-4 text-eyebrow uppercase text-bone/55"
          items={[
            "Construção de raiz",
            "Remodelação integral",
            "Demolição controlada",
            "Reabilitação estrutural",
            "Reforço com vigas metálicas",
            "Acabamentos premium",
            "Gestão e fiscalização de obra",
            "Moradias · Apartamentos · Lojas",
          ].map((t) => (
            <span key={t}>{t}</span>
          ))}
        />
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-20 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <MoveDown className="h-4 w-4 animate-scroll-hint text-bone/60" strokeWidth={1.25} />
        <span className="text-[10px] uppercase tracking-[0.5em] text-bone/50">
          Scroll
        </span>
      </div>
    </section>
  );
}

function AnimatedWord({
  word,
  delay,
  className,
}: {
  word: string;
  delay: number;
  className?: string;
}) {
  return (
    <span className="relative inline-block overflow-hidden align-bottom">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`inline-block ${className ?? ""}`}
      >
        {word}
      </motion.span>
    </span>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-3xl font-normal tabular-nums text-bone">
        {value}
      </div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-bone/50">
        {label}
      </div>
    </div>
  );
}
