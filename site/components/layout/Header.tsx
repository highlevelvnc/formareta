"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { LinkButton } from "@/components/ui/Button";
import { NAV, BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const ids = NAV.map((n) => n.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        data-scrolled={scrolled}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo",
          scrolled
            ? "bg-bone/85 backdrop-blur-md border-b border-bone-300"
            : "bg-gradient-to-b from-ink/55 via-ink/15 to-transparent border-b border-transparent",
        )}
      >
        <div className="shell flex h-[var(--header-h)] items-center justify-between">
          <Link href="#inicio" aria-label="Forma Reta — início" className="group">
            <Logo tone={scrolled ? "ink" : "bone"} />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-active={active === item.href}
                className={cn(
                  "nav-link",
                  !scrolled &&
                    "text-bone/65 hover:text-bone data-[active=true]:text-bone",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <LinkButton
              href="#contacto"
              variant={scrolled ? "solid" : "ghost-light"}
              icon={<ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />}
            >
              Pedir Orçamento
            </LinkButton>
          </div>

          <button
            onClick={() => setOpen(true)}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center border transition-colors lg:hidden",
              scrolled ? "border-ink text-ink" : "border-bone/40 text-bone",
            )}
            aria-label="Abrir menu"
          >
            <Menu strokeWidth={1.5} className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && <MobileDrawer onClose={() => setOpen(false)} active={active} />}
      </AnimatePresence>
    </>
  );
}

function MobileDrawer({
  onClose,
  active,
}: {
  onClose: () => void;
  active: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] bg-ink text-bone lg:hidden"
    >
      <div className="flex h-[var(--header-h)] items-center justify-between px-6">
        <Logo tone="bone" />
        <button
          onClick={onClose}
          className="inline-flex h-11 w-11 items-center justify-center border border-bone/30"
          aria-label="Fechar menu"
        >
          <X strokeWidth={1.5} className="h-5 w-5" />
        </button>
      </div>

      <div className="flex h-[calc(100dvh-var(--header-h))] flex-col justify-between px-6 pb-10">
        <nav className="mt-10 flex flex-col gap-2">
          {NAV.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={onClose}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-baseline justify-between border-b border-bone/10 py-6"
            >
              <span className="flex items-baseline gap-5">
                <span className="font-display text-[10px] tracking-widest text-accent">
                  0{i + 1}
                </span>
                <span
                  className={cn(
                    "font-display text-3xl uppercase tracking-[-0.01em]",
                    active === item.href ? "text-bone" : "text-bone/70",
                  )}
                >
                  {item.label}
                </span>
              </span>
              <ArrowUpRight strokeWidth={1.25} className="h-5 w-5 opacity-40 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
            </motion.a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 pt-10">
          <LinkButton href="#contacto" variant="accent" className="w-full">
            Pedir Orçamento
          </LinkButton>
          <LinkButton href={BRAND.whatsappHref} external variant="ghost-light" className="w-full">
            WhatsApp · {BRAND.phones.whatsapp}
          </LinkButton>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] uppercase tracking-[0.3em] text-bone/45">
            <a href={BRAND.officeHref} className="hover:text-bone">
              {BRAND.phones.office}
            </a>
            <span className="h-1 w-1 rounded-full bg-bone/30" />
            <a href={`mailto:${BRAND.email}`} className="hover:text-bone">
              {BRAND.email}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
