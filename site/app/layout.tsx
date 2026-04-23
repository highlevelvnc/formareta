import type { Metadata } from "next";
import { Inter, Archivo, Instrument_Serif } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const siteUrl = "https://www.formareta.pt";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Forma Reta — Construção, Remodelação e Demolição em Lisboa",
    template: "%s · Forma Reta",
  },
  description:
    "Empresa portuguesa de construção, remodelação e demolição. Especialistas em reabilitação de edifícios antigos em Lisboa e na área metropolitana. Rigor técnico, prazos cumpridos, acompanhamento próximo.",
  keywords: [
    "construção Lisboa",
    "remodelação Lisboa",
    "demolição Lisboa",
    "reabilitação de edifícios Lisboa",
    "reabilitação pombalino",
    "empresa de construção em Lisboa",
    "reforço estrutural",
    "Forma Reta",
  ],
  authors: [{ name: "Forma Reta" }],
  creator: "Forma Reta",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: siteUrl,
    title: "Forma Reta — Construção, Remodelação e Demolição",
    description:
      "Construímos com precisão. Reabilitamos com rigor. Empresa portuguesa especializada em reabilitação de edifícios antigos em Lisboa.",
    siteName: "Forma Reta",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forma Reta — Construção, Remodelação e Demolição",
    description: "Rigor técnico. Execução sólida. Resultados duradouros.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className={`${inter.variable} ${archivo.variable} ${instrument.variable}`}>
      <body className="min-h-dvh bg-bone text-ink antialiased">
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
