import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  mark?: "full" | "compact" | "wordmark";
  tone?: "ink" | "bone";
};

export function Logo({ className, mark = "full", tone = "ink" }: LogoProps) {
  const color = tone === "ink" ? "text-ink" : "text-bone";

  if (mark === "wordmark") {
    return (
      <div className={cn("flex flex-col leading-none", color, className)}>
        <span className="font-serif text-[28px] font-normal leading-[0.95] tracking-[0.01em]">
          Forma Reta
        </span>
        <span className="mt-2 text-[9px] uppercase tracking-[0.42em] opacity-60">
          Construção · Remodelação
        </span>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-3.5", color, className)}>
      <Monogram className="h-10 w-auto shrink-0" />
      {mark === "full" && (
        <div className="leading-none">
          <div className="font-serif text-[22px] font-normal tracking-[0.015em]">
            Forma Reta
          </div>
          <div className="mt-1.5 text-[9px] uppercase tracking-[0.42em] opacity-55">
            Construção · Remodelação
          </div>
        </div>
      )}
    </div>
  );
}

function Monogram({ className }: { className?: string }) {
  // House frame with inscribed serif "FR" — matches the real banner lockup.
  return (
    <svg
      viewBox="0 0 52 56"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 24 L26 4 L48 24"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="miter"
        strokeLinecap="square"
      />
      <path d="M4 24 V52" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
      <path d="M48 24 V52" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
      <path d="M4 52 H48" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />

      {/* F */}
      <path d="M14 52 V28" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
      <path d="M14 28 H23" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
      <path d="M14 37 H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />

      {/* R */}
      <path
        d="M28 52 V28 H35 Q39 28 39 34 Q39 40 35 40 H28"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="miter"
        strokeLinecap="square"
      />
      <path d="M34 40 L40 52" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}
