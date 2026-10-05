import type { MetadataRoute } from "next";
import { siteIdentity } from "@/content/site-data";

/**
 * Metadata Route: sitemap.xml
 * Otomatis di-render menjadi static sitemap.xml saat next build (output: 'export').
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteIdentity.siteUrl;
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/profil`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/usaha`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/organisasi`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/galeri`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
