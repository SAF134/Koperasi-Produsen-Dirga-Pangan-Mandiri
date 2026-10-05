import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/shared/Container";
import GalleryView from "@/components/sections/GalleryView";
import { galleryContent } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Galeri Fasilitas Usaha & Kegiatan",
  description:
    "Dokumentasi visual fasilitas kandang ayam closed house modern, proses panen higienis, dan aktivitas anggota Koperasi Dirga Pangan Mandiri.",
  alternates: {
    canonical: "/galeri",
  },
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      {/* ========================================================= */}
      {/* 1. HEADER & BREADCRUMB                                    */}
      {/* ========================================================= */}
      <section
        className="pt-10 pb-16 sm:pt-16 sm:pb-20 border-b border-border bg-canvas"
        aria-labelledby="gallery-heading"
      >
        <Container>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-ink">
              <li>
                <Link
                  href="/"
                  className="hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-agri-green rounded"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5 text-border-dark/40" aria-hidden="true" />
              </li>
              <li className="font-semibold text-ink" aria-current="page">
                Galeri Dokumentasi
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-agri-green/30 bg-surface px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-agri-green shadow-xs hover:border-agri-green hover:shadow-card transition-all duration-200 mb-4">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-agri-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-agri-green" />
              </span>
              <span>Dokumentasi Lapangan</span>
            </span>

            {/* Exactly 1 H1 on page */}
            <h1
              id="gallery-heading"
              className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl text-balance text-center"
            >
              {galleryContent.header.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted-ink leading-relaxed text-center max-w-2xl mx-auto">
              {galleryContent.header.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 2. GALLERY INTERACTIVE SECTION (FILTER & GRID)           */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 bg-surface"
        aria-label="Dokumentasi Visual Kegiatan"
      >
        <Container>
          <GalleryView />
        </Container>
      </section>
    </div>
  );
}
