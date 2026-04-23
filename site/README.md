# Forma Reta — Website institucional

Website premium para a **Forma Reta — Construção e Remodelação**.
Desenvolvido com **Next.js 15 + TypeScript + Tailwind CSS + Framer Motion**,
em linguagem visual editorial/corporate alinhada com a identidade real da marca.

---

## 1. Análise crítica do layout recebido (Stitch)

**O que manter**
- Paleta monocromática (preto / creme / tom dourado) e o espírito "gallery white".
- Geometria rigorosa (sem cantos arredondados).
- Estrutura narrativa de oito secções (Hero → About → Serviços → Diferenciais → Portfólio → Processo → CTA → Footer).
- Blocos-âncora do layout Material (Inter, tracking generoso, headings em caixa alta).

**O que melhorar**
- O tom `#8B7355` do Stitch ficava entre castanho e sujo; foi substituído por um champagne gold mais elegante (`#B89968`), compatível com a identidade que nos enviou.
- O hero era literal demais (imagem + headline frontal); foi transformado num hero narrativo com revelação por palavra, meta-rail superior, marquee inferior e parallax suave.
- Os cards de serviço eram planos e genéricos; passaram a ter imagens revelando-se no hover, numeração técnica 01–06, borders contínuas (grid-sheet feel) e estado dark-on-hover.
- O bloco de diferenciais tinha hierarquia fraca; passou a usar uma grelha editorial com overlay técnico e reveal por stagger.
- Faltavam: dropdown de FAQ, depoimentos, formulário real de pedido de orçamento e CTA flutuante de WhatsApp. Todos adicionados.
- A tipografia do Stitch estava presa a 32 / 48 px estáticos; agora tudo é `clamp()` fluido com clamps conservadores para mobile.

**O que elevar visualmente**
- Acréscimo de microelementos "de atelier": numeração `[ 01 ] — 06`, hairlines douradas, corner ticks, grids técnicos sobrepostos, Fig. 01 captions.
- Ring de assinatura "FORMA RETA" em stroke-text no fim do footer.
- Parallax a duas camadas no Hero e Final CTA.
- Transições `cubic-bezier(0.16, 1, 0.3, 1)` em todas as interacções — signature easing premium.

---

## 2. Plano de UI/UX aplicado

| Eixo | Decisão |
|---|---|
| **Tipografia** | `Archivo` para display (corpo das headlines em caixa alta com tracking negativo); `Inter` para UI e corpo; `Instrument Serif` como acento editorial pontual. |
| **Escala** | `clamp()` em todas as display sizes, com mínimos adequados a 360 px para nunca cortar em mobile. |
| **Espaçamento** | `--section-y: clamp(5rem, 10vw, 9rem)` — respiração que escala com o viewport sem grandes "buracos" em tablet. |
| **Grid** | Shell de 1440 px com `px-6 sm:px-8 lg:px-12 xl:px-16`. Cards dos serviços usam borders contínuas em vez de shadows — "technical sheet" feel. |
| **Cor** | Bone `#FAFAF7`, Ink `#0A0A0A`, Accent `#B89968`. Variações `ink-*` e `accent-*` para tratar hover e opacidade com consistência. |
| **Componentes** | Geometria 100 % sharp (`border-radius: 0`). Botões com quatro variantes (solid / ghost / ghost-light / accent / link). Inputs com underline only — estética técnica. |
| **Animações** | `fade-up` com stagger, reveal-on-scroll via `framer-motion useInView`, parallax leve no Hero e Final CTA, overlay hover nos cards, marquee no bottom rail. Toda a composição respeita `prefers-reduced-motion`. |
| **Responsividade** | Mobile-first: navegação colapsa para drawer full-screen, cards reorganizam para 1 coluna, stat-boxes reposicionam-se, clamps fluidos garantem tipografia legível em 360 px. |
| **Acessibilidade** | Focus rings discretos, `aria-label` em todos os ícones-botão, `prefers-reduced-motion` respeitado, contraste AA+. |

---

## 3. Estrutura de pastas

```
site/
├─ app/
│  ├─ globals.css          # tokens, @layer utilities, animações
│  ├─ layout.tsx           # fonts, metadata OG, Header/Footer/WhatsAppFloat
│  └─ page.tsx             # composição da home
├─ components/
│  ├─ layout/
│  │  ├─ Header.tsx        # sticky + transparente→bone ao scrollar + mobile drawer
│  │  ├─ Footer.tsx        # colunas + assinatura stroke-text
│  │  └─ WhatsAppFloat.tsx # CTA flutuante após 400 px de scroll
│  ├─ sections/
│  │  ├─ Hero.tsx          # headline com reveal por palavra, parallax, marquee
│  │  ├─ About.tsx         # manifesto + stat-box 15+ anos
│  │  ├─ Services.tsx      # 6 cards bordered com imagem hover
│  │  ├─ Differentials.tsx # 6 compromissos em grelha editorial
│  │  ├─ Portfolio.tsx     # 6 projetos filtráveis + layout mixed-aspect
│  │  ├─ Process.tsx       # 4 passos com ícones + connecting line
│  │  ├─ Testimonials.tsx  # 3 quote cards com NPS chip
│  │  ├─ FAQ.tsx           # 6 perguntas em accordion
│  │  ├─ Contact.tsx       # formulário completo + painel de canais directos
│  │  └─ FinalCTA.tsx      # CTA fullbleed com parallax
│  └─ ui/
│     ├─ Button.tsx        # Button + LinkButton (5 variantes)
│     ├─ Logo.tsx          # monograma FR custom + wordmark
│     ├─ Marquee.tsx       # marquee com pausa no hover
│     ├─ Reveal.tsx        # Reveal / Stagger / StaggerItem
│     └─ SectionHeader.tsx # eyebrow + count + title + description
├─ lib/
│  ├─ constants.ts         # BRAND (contactos, endereço, redes) + NAV
│  └─ utils.ts             # cn()
├─ public/                 # assets
├─ tailwind.config.ts      # design tokens (cores, fontes, animações)
├─ next.config.mjs         # remote image patterns + optim
└─ tsconfig.json
```

---

## 4. Getting started

```bash
cd site
npm install
npm run dev        # http://localhost:3000
npm run build      # produção optimizada
npm run typecheck  # type-check sem emit
```

### Requisitos
- Node.js 18.18+ ou 20+
- npm / pnpm / yarn

### Variáveis de marca
Edite `lib/constants.ts` para alterar telefone, WhatsApp, email, morada e links sociais — todo o site lê a partir dali.

### Formulário de contacto
`components/sections/Contact.tsx` tem o submit simulado. Para produção:
- Integrar com **Resend**, **Formspree** ou um webhook custom;
- Opcional: `/app/api/contact/route.ts` com `POST` handler;
- Ativar um honey-pot e rate-limit antes do envio.

---

## 5. Copy refinado (português de Portugal, já aplicado)

**Hero**
> CONSTRUÍMOS COM PRECISÃO. REABILITAMOS COM RIGOR.
> Estúdio de construção e remodelação ao serviço de projetos exigentes. Técnica apurada, acompanhamento próximo, entregas cumpridas.

**Sobre / Manifesto**
> Construir é um acto de *rigor* e de *responsabilidade*.
> A Forma Reta nasce da convicção de que uma obra bem-feita começa muito antes da primeira parede e termina bem depois da entrega das chaves.

**Serviços (subtítulos curtos, incluídos nos cards)**
- Construção — moradias unifamiliares e edifícios de raiz
- Remodelação — transformação integral de interiores
- Reabilitação — recuperação de edifícios antigos
- Obras Gerais — intervenções estruturais e técnicas
- Acabamentos — materiais nobres, detalhe absoluto
- Gestão de Obra — coordenação técnica e fiscalização

**Diferenciais (secção "Porquê a Forma Reta")**
Rigor técnico · Organização e cumprimento · Soluções à medida · Materiais de referência · Transparência total · Acompanhamento próximo

**CTA final**
> Um projeto merece mais que um orçamento. Merece um *parceiro*.
> Marque uma visita técnica sem compromisso.

**Micro-provas em rodapé**
Resposta em 24h úteis · Visita técnica sem custos · Confidencialidade garantida.

---

## 6. Imagens ideais por secção

As imagens actuais usam Unsplash (placeholders profissionais). Para substituir por fotografia real da Forma Reta, use estas guidelines:

| Secção | Tema | Notas |
|---|---|---|
| **Hero** | Fachada nocturna de moradia contemporânea, iluminação quente interior, betão + vidro | 2400×1350 mínimo, export em AVIF/WebP |
| **Sobre** | Mesa de atelier técnico, planta + régua + escala, luz natural lateral | 1600×2000 (aspect 4:5) |
| **Serviços (hover)** | Uma imagem por serviço — obra em andamento ou detalhe de acabamento | 1400×1050, com margem para scrim |
| **Portfólio** | 6 obras reais, mix de exterior/interior. Aspect 16:9 (wide) + 3:4 (tall) | Tratamento BW neutro — desatura 60 %, colour lift on hover |
| **Final CTA** | Obra ao entardecer, contraluz, baixa saturação | Mesmo enquadramento mais amplo que o hero |

Boas práticas: todas as imagens passam por `next/image` (`priority` apenas no Hero). Usar `blurDataURL` quando tiver as próprias fotos.

---

## 7. Extras de percepção premium (já implementados)

1. **Monograma FR** desenhado em SVG puro, com linhas de frame arquitectónico.
2. **Bottom rail com marquee** no Hero (pausa ao hover) — transmite "sempre em obra".
3. **Stat block** com 15+ anos e 4 métricas no Hero desktop.
4. **Grid técnico** subtil sobre o fundo de 3 secções — sensação de planta.
5. **Corner ticks** nos cards (top-left + bottom-right) ao hover — piscadela a desenho técnico.
6. **Number-tags** `[ 01 ] — 08` em todas as secções — ritmo editorial.
7. **Stroke-text "FORMA RETA"** gigante no footer — signature final.
8. **Filter por categoria** no portfólio (animação `layout` do Framer).
9. **CTA flutuante WhatsApp** com entrada suave após 400 px de scroll.
10. **Respeito por `prefers-reduced-motion`** em todas as animações.

---

## 8. Próximos passos sugeridos

- Substituir imagens placeholder por fotografia real (sessão com fotógrafo de arquitectura).
- Criar uma página `/projetos/[slug]` para case-studies detalhados.
- Ligar o formulário a Resend + Google Sheets / HubSpot (CRM interno).
- Adicionar plano editorial: `/obras-em-curso`, `/jornal-de-obra` (SEO long-tail).
- Instalar **Umami** ou **Plausible** para analytics privacidade-first.
- Preparar meta-OG image com o monograma + tipografia (1200×630).
- Publicar um sitemap.xml + robots.txt automáticos via Next.

---

## 9. Stack técnica

- **Next.js 15** (App Router, RSC, static-first)
- **React 19**
- **TypeScript 5.7**
- **Tailwind CSS 3.4** (com tokens próprios)
- **Framer Motion 11** (scroll, layout, reduce-motion)
- **Lucide React** (ícones, stroke 1.25/1.5)
- `clsx` + `tailwind-merge` via `cn()`
- Google Fonts via `next/font`: Inter · Archivo · Instrument Serif

Build actual: **23 kB** de JS na home + **105 kB** partilhados, todas as páginas pré-renderizadas estaticamente.
