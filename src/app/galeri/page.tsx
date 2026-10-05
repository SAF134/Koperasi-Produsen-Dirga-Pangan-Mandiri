import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/shared/Container";
import GalleryView from "@/components/sections/GalleryView";
import { galleryContent } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Galeri Fasilitas Kandang & Kegiatan",
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

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-agri-green mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-agri-green" aria-hidden="true" />
              Dokumentasi Lapangan
            </span>

            {/* Exactly 1 H1 on page */}
            <h1
              id="gallery-heading"
              className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl text-balance"
            >
              {galleryContent.header.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted-ink leading-relaxed text-justify">
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
