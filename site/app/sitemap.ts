import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.formareta.pt";
  const now = new Date();
  const sections = [
    "",
    "#sobre",
    "#servicos",
    "#obras",
    "#bastidores",
    "#processo",
    "#contacto",
  ];

  return sections.map((s) => ({
    url: `${base}/${s}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: s === "" ? 1 : 0.7,
  }));
}
