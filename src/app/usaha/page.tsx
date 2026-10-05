import type { Metadata } from "next";
import Link from "next/link";
import NextImage from "next/image";
import { ChevronRight } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { businessContent, type BusinessUnit } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Unit & Kegiatan Usaha",
  description:
    "Daftar portofolio kegiatan usaha Koperasi Produsen Dirga Pangan Mandiri yang terbagi dalam Usaha Utama, Usaha Pendukung, dan Usaha Tambahan.",
  alternates: {
    canonical: "/usaha",
  },
};

/**
 * Komponen Kartu Usaha
 * Menampilkan: gambar (rasio 16:9), jenis usaha, kategori, dan nama usaha.
 */
function BusinessCard({ item }: { item: BusinessUnit }) {
  const typeBadgeColor = {
    "Usaha Utama": "bg-agri-green text-white border-white/20",
    "Usaha Pendukung": "bg-ink text-white border-white/20",
    "Usaha Tambahan": "bg-emerald-800 text-white border-white/20",
  }[item.type];

  return (
    <div className="group flex flex-col overflow-hidden rounded-card border-2 border-border bg-surface shadow-card hover:shadow-card-hover hover:-translate-y-1.5 hover:border-agri-green/60 transition-all duration-300">
      {/* Gambar Usaha (Rasio 16:9) */}
      <div className="relative w-full aspect-[16/9] bg-canvas overflow-hidden">
        <NextImage
          src={item.imageUrl || "/images/placeholder.png"}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Badge Jenis Usaha Mengambang */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold shadow-md border ${typeBadgeColor}`}
          >
            {item.type}
          </span>
        </div>
      </div>

      {/* Konten Kartu: Kategori & Nama Usaha */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-surface">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-agri-green block mb-1.5">
            {item.category}
          </span>
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-ink group-hover:text-agri-green transition-colors leading-snug">
            {item.name}
          </h3>
        </div>

        <div className="mt-4 pt-3.5 border-t border-border flex items-center justify-between text-[11px] text-muted-ink">
          <span className="font-semibold text-ink">Klasifikasi: {item.type}</span>
          <span className="font-medium text-agri-green">KBLI Resmi</span>
        </div>
      </div>
    </div>
  );
}

export default function BusinessPage() {
  return (
    <div className="flex flex-col">
      {/* ========================================================= */}
      {/* 1. HEADER & BREADCRUMB                                    */}
      {/* ========================================================= */}
      <section
        className="pt-10 pb-16 sm:pt-16 sm:pb-20 border-b border-border bg-canvas"
        aria-labelledby="business-heading"
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
                Unit & Kegiatan Usaha
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-agri-green/30 bg-surface px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-agri-green shadow-xs hover:border-agri-green hover:shadow-card transition-all duration-200 mb-4">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-agri-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-agri-green" />
              </span>
              <span>Portofolio Kegiatan Usaha</span>
            </span>

            {/* Exactly 1 H1 on page */}
            <h1
              id="business-heading"
              className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl text-balance text-center"
            >
              {businessContent.header.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted-ink leading-relaxed text-center max-w-2xl mx-auto">
              {businessContent.header.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 2. USAHA UTAMA                                            */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 border-b border-border bg-surface"
        aria-labelledby="main-business-heading"
      >
        <Container>
          <SectionHeading
            id="main-business-heading"
            eyebrow="Pilar Pokok"
            title="Usaha Utama"
            description="Kegiatan usaha primer yang menjadi fondasi operasional perunggasan dan perniagaan Koperasi Produsen Dirga Pangan Mandiri."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {businessContent.mainBusinesses.map((item) => (
              <BusinessCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 3. USAHA PENDUKUNG                                        */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 border-b border-border bg-canvas"
        aria-labelledby="supporting-business-heading"
      >
        <Container>
          <SectionHeading
            id="supporting-business-heading"
            eyebrow="Ekosistem Hilirisasi"
            title="Usaha Pendukung"
            description="Rangkaian kegiatan pengolahan daging, rumah potong unggas (RPHU), rantai pendingin, dan sarana edukasi untuk memperkuat daya saing usaha anggota."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {businessContent.supportingBusinesses.map((item) => (
              <BusinessCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* 4. USAHA TAMBAHAN                                         */}
      {/* ========================================================= */}
      <section
        className="py-16 sm:py-24 bg-surface"
        aria-labelledby="additional-business-heading"
      >
        <Container>
          <SectionHeading
            id="additional-business-heading"
            eyebrow="Diversifikasi Terpadu"
            title="Usaha Tambahan"
            description="Layanan terintegrasi pendukung seperti industri pupuk organik, remediasi limbah peternakan, armada logistik, katering, dan permodalan koperasi."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {businessContent.additionalBusinesses.map((item) => (
              <BusinessCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
