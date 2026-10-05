import Link from "next/link";
import { ArrowLeft, Home, BookOpen, Layers, MessageSquare } from "lucide-react";
import Container from "@/components/shared/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[75vh] items-center justify-center py-20 bg-canvas">
      <Container size="narrow">
        <div className="rounded-card border border-border bg-surface p-8 sm:p-14 text-center shadow-subtle">
          <span className="inline-flex items-center gap-1.5 rounded-pill bg-agri-light px-3.5 py-1 text-xs font-semibold text-agri-green mb-5">
            Status 404 • Halaman Tidak Ditemukan
          </span>

          <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Halaman yang Anda Cari Tidak Tersedia
          </h1>

          <p className="mt-4 text-base text-muted-ink leading-relaxed max-w-lg mx-auto">
            Tautan yang Anda tuju mungkin telah dipindahkan, mengalami perubahan alamat,
            atau belum dipublikasikan oleh Koperasi Produsen Dirga Pangan Mandiri.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="primary"
              size="md"
              href="/"
              iconLeft={<ArrowLeft className="h-4 w-4" aria-hidden="true" />}
            >
              Kembali ke Beranda
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="/kontak"
              iconLeft={<MessageSquare className="h-4 w-4" aria-hidden="true" />}
            >
              Hubungi Sekretariat
            </Button>
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-medium text-muted-ink uppercase tracking-wider mb-4">
              Pilihan Navigasi Cepat
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              <Link
                href="/profil"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-canvas text-ink hover:text-agri-green border border-border transition-colors"
              >
                <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                Profil & Legalitas
              </Link>
              <Link
                href="/usaha"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-canvas text-ink hover:text-agri-green border border-border transition-colors"
              >
                <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                Unit Usaha & Kemitraan
              </Link>
              <Link
                href="/organisasi"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-canvas text-ink hover:text-agri-green border border-border transition-colors"
              >
                <Home className="h-3.5 w-3.5" aria-hidden="true" />
                Struktur Organisasi
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
