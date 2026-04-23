import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NAV, BRAND } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-bone">
      <div className="grid-technical-light absolute inset-0 opacity-40" aria-hidden />
      <div className="relative">
        <div className="shell pb-12 pt-16 sm:pb-16 sm:pt-20">
          <div className="grid gap-12 border-b border-bone/10 pb-12 sm:gap-16 sm:pb-16 md:grid-cols-2 lg:grid-cols-12">
            <div className="md:col-span-2 lg:col-span-5">
              <Logo tone="bone" />
              <p className="mt-10 max-w-md text-body text-bone/65">
                Empresa portuguesa de construção, remodelação e demolição.
                Especialistas em reabilitação de edifícios antigos em Lisboa
                e na área metropolitana.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <SocialLink href={BRAND.whatsappHref} label="WhatsApp" external>
                  <MessageCircle strokeWidth={1.25} className="h-4 w-4" />
                </SocialLink>
                <SocialLink href={BRAND.social.instagram} label="Instagram" external>
                  <Instagram strokeWidth={1.25} className="h-4 w-4" />
                </SocialLink>
                <SocialLink href={`mailto:${BRAND.email}`} label="Email">
                  <Mail strokeWidth={1.25} className="h-4 w-4" />
                </SocialLink>
                <SocialLink href={BRAND.phoneHref} label="Telefone">
                  <Phone strokeWidth={1.25} className="h-4 w-4" />
                </SocialLink>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Column title="Navegação">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="text-body text-bone/65 transition-colors hover:text-bone">
                      {n.label}
                    </a>
                  </li>
                ))}
              </Column>
            </div>

            <div className="lg:col-span-2">
              <Column title="Serviços">
                {["Construção", "Remodelação", "Demolição", "Reabilitação", "Acabamentos", "Gestão de Obra"].map(
                  (s) => (
                    <li key={s} className="text-body text-bone/65">
                      {s}
                    </li>
                  ),
                )}
              </Column>
            </div>

            <div className="lg:col-span-3">
              <Column title="Contacto">
                <li className="text-body text-bone/65">
                  {BRAND.address.line1}
                  <br />
                  {BRAND.address.line2}
                </li>
                <li className="pt-2 space-y-0.5">
                  <a href={BRAND.whatsappHref} target="_blank" rel="noopener noreferrer" className="block text-body text-bone hover:text-accent">
                    {BRAND.phones.whatsapp}
                    <span className="ml-2 text-[10px] uppercase tracking-[0.28em] text-accent/90">
                      WhatsApp
                    </span>
                  </a>
                  <a href={BRAND.officeHref} className="block text-body text-bone/65 hover:text-bone">
                    {BRAND.phones.office}
                  </a>
                  <a href={`mailto:${BRAND.email}`} className="block text-body text-bone/65 hover:text-bone">
                    {BRAND.email}
                  </a>
                </li>
                <li className="pt-3 text-sm text-bone/50">
                  {BRAND.hours.weekdays}
                  <br />
                  {BRAND.hours.saturday}
                </li>
              </Column>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 pt-10 sm:flex-row sm:items-center">
            <p className="text-xs tracking-wider text-bone/45">
              © {year} Forma Reta &middot; Construção e Remodelação, Lda.
            </p>
            <div className="flex flex-wrap gap-8 text-xs text-bone/45">
              <a href="#" className="transition-colors hover:text-bone">
                Política de Privacidade
              </a>
              <a href="#" className="transition-colors hover:text-bone">
                Termos de Utilização
              </a>
              <a href="#" className="transition-colors hover:text-bone">
                Livro de Reclamações
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Oversized watermark */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <div className="relative mx-auto flex h-[18vw] min-h-[120px] max-w-shell items-center justify-center px-6">
          <span className="stroke-text whitespace-nowrap font-display text-[22vw] font-light leading-none tracking-[-0.04em] text-bone/10 sm:text-[18vw]">
            FORMA RETA
          </span>
        </div>
      </div>
    </footer>
  );
}

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <h4 className="mb-6 text-label uppercase text-accent">{title}</h4>
      <ul className="space-y-4">{children}</ul>
    </>
  );
}

function SocialLink({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex h-11 w-11 items-center justify-center border border-bone/15 text-bone/70 transition-all duration-500 ease-out-expo hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}
