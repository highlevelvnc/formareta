"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type MarqueeProps = {
  items: ReactNode[];
  className?: string;
  separator?: ReactNode;
  speed?: "slow" | "normal";
};

export function Marquee({ items, className, separator, speed = "normal" }: MarqueeProps) {
  const sep = separator ?? <span className="mx-12 text-accent">—</span>;
  const duration = speed === "slow" ? "60s" : "40s";

  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <div
        className="flex w-max animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]"
        style={{ animationDuration: duration }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex items-center">
            {items.map((item, i) => (
              <span key={`${copy}-${i}`} className="flex items-center">
                {item}
                {sep}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
