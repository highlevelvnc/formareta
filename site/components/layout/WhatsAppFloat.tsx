"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          href={BRAND.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar via WhatsApp"
          className="group fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center gap-3 bg-ink text-bone shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out-expo hover:bg-accent sm:bottom-10 sm:right-10 sm:h-auto sm:w-auto sm:justify-start sm:px-5 sm:py-4"
        >
          <MessageCircle strokeWidth={1.5} className="h-5 w-5 shrink-0" />
          <span className="hidden text-label uppercase sm:inline">WhatsApp</span>
          <span className="hidden h-4 w-px bg-bone/25 sm:block" />
          <span className="hidden text-xs uppercase tracking-[0.2em] text-bone/70 transition-colors group-hover:text-bone/90 sm:inline">
            {BRAND.phones.whatsapp}
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
