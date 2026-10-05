import type { Metadata } from "next";
import Link from "next/link";
import NextImage from "next/image";
import {
  ShieldCheck,
  Users,
  Truck,
  ArrowRight,
  CheckCircle2,
  Scale,
  Sparkles,
} from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import StatCard from "@/components/shared/StatCard";
import FeatureCard from "@/components/shared/FeatureCard";
import Button from "@/components/ui/Button";
import {
  homeContent,
  galleryContent,
} from "@/content/site-data";

export const metadata: Metadata = {
  title: "Koperasi Produsen Dirga Pangan Mandiri | Ayam Broiler Berkualitas",
  description:
    "Koperasi produsen peternakan ayam broiler terpadu. Menyediakan pasokan ayam karkas higienis, kemitraan peternak mandiri, dan pangan berkelanjutan.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  // Pick 3 gallery highlights for homepage
  const galleryHighlights = galleryContent.items.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* ========================================================= */}
      {/* 1. HERO SECTION (DENGAN TEMPAT GAMBAR UTAMA KOPERASI)      */}
      {/* ========================================================= */}
      <section
        className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-border bg-canvas overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-8 xl:gap-12 items-center">
            {/* Kolom Teks & Aksi Utama (Desktop: 7 kolom) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Live Status Pill */}
              <div className="inline-flex items-center gap-2.5 rounded-pill border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-ink shadow-sm mb-4 sm:mb-6 w-fit">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-status-green"></span>
                </span>
                <span>{homeContent.hero.badge}</span>
              </div>

              {/* Main Headline (H1 Tunggal) */}
              <h1
                id="hero-heading"
                className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.15rem] font-extrabold tracking-tight text-ink text-balance leading-[1.18] sm:leading-[1.12]"
              >
                {homeContent.hero.headline}
              </h1>

              {/* Sub-headline / Lead paragraph */}
              <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-muted-ink leading-relaxed text-justify">
                {homeContent.hero.subheadline}
              </p>

              {/* Call-to-Action Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href={homeContent.hero.primaryCta.href}
                  className="w-full sm:w-auto"
                  iconRight={<ArrowRight className="h-4 w-4 text-white" aria-hidden="true" />}
                >
                  {homeContent.hero.primaryCta.label}
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  href={homeContent.hero.secondaryCta.href}
                  className="w-full sm:w-auto"
                >
                  {homeContent.hero.secondaryCta.label}
                </Button>
              </div>

              {/* Quick Trust Highlights di bawah tombol */}
              <div className="mt-8 pt-6 border-t border-border/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-muted-ink">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-agri-green shrink-0" aria-hidden="true" />
                  <span className="font-medium text-ink">Closed House Modern</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-agri-green shrink-0" aria-hidden="true" />
                  <span className="font-medium text-ink">Biosecurity Ketat</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <Scale className="h-4 w-4 text-agri-green shrink-0" aria-hidden="true" />
                  <span className="font-medium text-ink">Kemitraan Terbuka</span>
                </div>
              </div>
            </div>

            {/* Kolom Tempat Gambar Utama Koperasi (Desktop: 5 kolom, Tablet: proporsional, Mobile: kartu elegan) */}
            <div className="lg:col-span-5 w-full">
              <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-border bg-surface shadow-card hover:shadow-card-hover transition-all duration-300">
                {/* Rasio Aspek Gambar: 4:3 di mobile, 16:9 di tablet, 4:3 / 5:4 di desktop */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[4/3] xl:aspect-[5/4] bg-muted/30">
                  <NextImage
                    src={homeContent.hero.image.src}
                    alt={homeContent.hero.image.alt}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 45vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 2. PILAR KEUNGGULAN KOPERASI (3 PILAR NILAI)             */}
      {/* ========================================================= */}
      <section
        className="py-20 sm:py-28 border-b border-border bg-surface"
        aria-labelledby="pillars-heading"
      >
        <Container>
          <SectionHeading
            id="pillars-heading"
            eyebrow="Fondasi Kualitas"
            title="Tiga Pilar Keunggulan Koperasi"
            description="Standar operasional terukur yang menjamin kualitas unggas, keadilan bagi peternak, dan kontinuitas pasokan mitra bisnis."
          />

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            {homeContent.pillars.map((pillar) => {
              const icon =
                pillar.iconName === "ShieldCheck" ? (
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                ) : pillar.iconName === "Users" ? (
                  <Users className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Truck className="h-6 w-6" aria-hidden="true" />
                );

              return (
                <FeatureCard
                  key={pillar.id}
                  title={pillar.title}
                  description={pillar.description}
                  icon={icon}
                  variant={pillar.id === "kemitraan" ? "wash" : "default"}
                />
              );
            })}
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 3. METRIK CAPAIAN & ANGKA KUNCI                          */}
      {/* ========================================================= */}
      <section
        className="py-20 sm:py-24 border-b border-border bg-canvas"
        aria-labelledby="metrics-heading"
      >
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-agri-green mb-3.5">
                <span className="h-1.5 w-1.5 rounded-full bg-agri-green" aria-hidden="true" />
                Kapasitas & Integritas
              </span>
              <h2
                id="metrics-heading"
                className="text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl"
              >
                Pertumbuhan Nyata Peternakan Rakyat
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted-ink max-w-md text-justify">
              Data kapasitas terkelola yang terus bertumbuh melalui kolaborasi peternak plasma binaan di Jawa Barat.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeContent.metrics.map((metric, idx) => (
              <StatCard
                key={idx}
                value={metric.value}
                label={metric.label}
                description={metric.description}
                icon={<Sparkles className="h-4 w-4 text-agri-green" aria-hidden="true" />}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 4. SEKILAS KOMODITAS & KAPASITAS UNGGULAN                */}
      {/* ========================================================= */}
      <section
        className="py-20 sm:py-28 border-b border-border bg-surface"
        aria-labelledby="commodity-heading"
      >
        <Container>
          <SectionHeading
            id="commodity-heading"
            eyebrow="Spesifikasi Produk"
            title={homeContent.commoditiesOverview.title}
            description={homeContent.commoditiesOverview.subtitle}
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {homeContent.commoditiesOverview.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-card border-2 border-border bg-surface p-6 sm:p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-agri-green transition-all duration-300"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-agri-green bg-agri-light px-2.5 py-1 rounded-pill">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-ink bg-surface border border-border px-3 py-1 rounded-pill">
                      <Scale className="h-3.5 w-3.5 text-agri-green" aria-hidden="true" />
                      Bobot: {item.weightRange}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-muted-ink leading-relaxed text-justify">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-border/80 pt-6">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-sm text-ink font-medium">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-agri-green mt-0.5" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Button
                    variant="secondary"
                    size="sm"
                    href="/usaha"
                    className="w-full sm:w-auto"
                    iconRight={<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />}
                  >
                    Pelajari Rantai Pasok Usaha
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 5. CUPLIKAN GALERI FASILITAS                             */}
      {/* ========================================================= */}
      <section
        className="py-20 sm:py-28 bg-canvas"
        aria-labelledby="gallery-preview-heading"
      >
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-agri-green mb-3.5">
                <span className="h-1.5 w-1.5 rounded-full bg-agri-green" aria-hidden="true" />
                Fasilitas Nyata
              </span>
              <h2
                id="gallery-preview-heading"
                className="text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl"
              >
                Dokumentasi Lapangan Terverifikasi
              </h2>
            </div>
            <Link
              href="/galeri"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-agri-green transition-colors"
            >
              <span>Buka Galeri Dokumentasi Lengkap</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {galleryHighlights.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col overflow-hidden rounded-card border-2 border-border bg-surface shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-agri-green transition-all duration-300"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/5">
                  <NextImage
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 400px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-ink">
                      {item.category}
                    </span>
                    <h3 className="mt-1 text-base font-bold text-ink group-hover:text-agri-green transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs text-muted-ink line-clamp-2 text-justify">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
