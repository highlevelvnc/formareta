"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { REELS } from "@/lib/media";
import { cn } from "@/lib/utils";

export function Reels() {
  return (
    <section id="bastidores" className="relative overflow-hidden bg-bone py-[var(--section-y)]">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeader
            count="[ 06 ]"
            eyebrow="Bastidores de obra"
            title="Obra a decorrer, sem filtros."
            description="Momentos captados no estaleiro — reforços estruturais, demolições controladas e acabamentos. Imagens reais, feitas pela equipa."
          />
          <div className="hidden items-center gap-3 text-xs uppercase tracking-[0.28em] text-ink-400 lg:flex">
            <span className="h-px w-10 bg-accent" />
            Clique para reproduzir · arraste para navegar
          </div>
        </div>
      </div>

      <div className="mt-12 overflow-hidden md:mt-16">
        <div className="shell !pr-0">
          <div className="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 pr-6 sm:gap-5 md:gap-6">
            {REELS.map((reel, i) => (
              <ReelCard key={reel.id} reel={reel} index={i} />
            ))}
            <div className="w-2 shrink-0" aria-hidden />
          </div>
        </div>
      </div>

      <div className="shell mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-ink-400 lg:hidden">
        <span className="h-px w-6 bg-accent" />
        Deslize para ver mais
      </div>
    </section>
  );
}

function ReelCard({
  reel,
  index,
}: {
  reel: (typeof REELS)[number];
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const inView = useInView(containerRef, { amount: 0.5 });

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView && playing) {
      v.play().catch(() => setPlaying(false));
    } else {
      v.pause();
    }
  }, [inView, playing]);

  function toggle(e: React.MouseEvent) {
    e.stopPropagation();
    setPlaying((p) => !p);
  }

  function toggleMute(e: React.MouseEvent) {
    e.stopPropagation();
    setMuted((m) => !m);
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative aspect-[9/16] w-[240px] shrink-0 snap-start overflow-hidden border border-bone-300 bg-ink sm:w-[300px] lg:w-[340px]"
    >
      {/* Poster (shows until the user hits play) */}
      <Image
        src={reel.poster}
        alt={reel.label}
        fill
        sizes="(max-width: 640px) 80vw, 340px"
        className={cn(
          "object-cover transition-opacity duration-500",
          playing ? "opacity-0" : "opacity-100 grayscale-[30%] group-hover:grayscale-0",
        )}
      />

      {/* Video element only plays on demand */}
      <video
        ref={videoRef}
        src={reel.src}
        muted={muted}
        loop
        playsInline
        preload="none"
        poster={reel.poster}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
          playing ? "opacity-100" : "opacity-0",
        )}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />

      {/* Label */}
      <div className="absolute left-4 top-4 flex items-center gap-2 bg-ink/70 px-3 py-1.5 backdrop-blur-sm">
        <span className={cn("h-1.5 w-1.5 rounded-full", playing ? "bg-accent animate-pulse" : "bg-accent")} />
        <span className="text-[10px] uppercase tracking-[0.28em] text-bone/85">
          {reel.label}
        </span>
      </div>

      {/* Bottom controls */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
        <button
          onClick={toggle}
          aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
          className="inline-flex h-11 w-11 items-center justify-center border border-bone/30 bg-ink/60 text-bone backdrop-blur-sm transition-all hover:border-accent hover:bg-accent hover:text-ink"
        >
          {playing ? (
            <Pause className="h-4 w-4" strokeWidth={1.5} />
          ) : (
            <Play className="h-4 w-4 translate-x-[1px]" strokeWidth={1.5} />
          )}
        </button>

        {playing && (
          <button
            onClick={toggleMute}
            aria-label={muted ? "Ativar som" : "Silenciar"}
            className="inline-flex h-11 w-11 items-center justify-center border border-bone/30 bg-ink/60 text-bone backdrop-blur-sm transition-all hover:border-accent hover:text-accent"
          >
            {muted ? (
              <VolumeX className="h-4 w-4" strokeWidth={1.5} />
            ) : (
              <Volume2 className="h-4 w-4" strokeWidth={1.5} />
            )}
          </button>
        )}

        <span className="ml-auto text-[10px] uppercase tracking-[0.3em] text-bone/55">
          0{index + 1} / 0{REELS.length}
        </span>
      </div>

      <span aria-hidden className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l border-t border-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b border-r border-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}
