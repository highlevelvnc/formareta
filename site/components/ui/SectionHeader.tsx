import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "ink" | "bone";
  className?: string;
  count?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "ink",
  className,
  count,
}: SectionHeaderProps) {
  const isBone = tone === "bone";
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col",
        isCenter ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {(eyebrow || count) && (
        <Reveal>
          <div
            className={cn(
              "mb-6 flex items-center gap-4 text-eyebrow uppercase",
              isBone ? "text-bone-300" : "text-ink-400",
            )}
          >
            {count && (
              <span className="font-display tabular-nums text-accent">
                {count}
              </span>
            )}
            {count && eyebrow && (
              <span
                className={cn(
                  "h-px w-8",
                  isBone ? "bg-bone/25" : "bg-ink-300/40",
                )}
              />
            )}
            {eyebrow && <span>{eyebrow}</span>}
          </div>
        </Reveal>
      )}

      <Reveal delay={0.05}>
        <h2
          className={cn(
            "font-display text-display-md uppercase tracking-[-0.01em]",
            isBone ? "text-bone" : "text-ink",
            isCenter && "max-w-4xl",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-6 max-w-prose-narrow text-body-lg",
              isBone ? "text-bone/70" : "text-ink-400",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
