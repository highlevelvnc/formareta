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
          className="group fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 bg-ink px-5 py-4 text-bone shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out-expo hover:bg-accent sm:bottom-10 sm:right-10"
        >
          <MessageCircle strokeWidth={1.5} className="h-5 w-5" />
          <span className="hidden text-label uppercase sm:inline">WhatsApp</span>
          <span className="h-4 w-px bg-bone/25 hidden sm:block" />
          <span className="hidden text-xs uppercase tracking-[0.2em] text-bone/70 transition-colors group-hover:text-bone/90 sm:inline">
            {BRAND.phones.whatsapp}
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
