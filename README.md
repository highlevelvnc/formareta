# Forma Reta

Repositório monolítico do website institucional da **Forma Reta — Construção, Remodelação e Demolição**.

## Estrutura

```
formareta/
├─ site/                               # Website em Next.js 15 + TypeScript + Tailwind
│  ├─ app/                             # App Router (layout, página, globals)
│  ├─ components/                      # Secções, layout, UI primitives
│  ├─ lib/                             # BRAND constants, media manifest, utils
│  ├─ public/images/                   # Fotos + vídeos reais de obra
│  └─ README.md                        # Análise, plano UI/UX, stack, instruções
└─ stitch_forma_reta_premium_website/  # Layout base recebido do Stitch (referência)
```

## Começar

```bash
cd site
npm install
npm run dev        # http://localhost:3000
npm run build
```

## Marca

- **Serviços:** Construção · Remodelação · Demolição · Reabilitação · Acabamentos · Gestão de Obra.
- **Especialidade:** reabilitação de edifícios antigos em Lisboa e área metropolitana.
- **WhatsApp:** +351 964 216 541 · **Escritório:** +351 212 418 822 · **Email:** formaretaconstrucao@gmail.com

A documentação técnica completa (análise crítica do briefing, plano de UI/UX, estrutura, copy e guidelines de imagem) está em [`site/README.md`](site/README.md).
