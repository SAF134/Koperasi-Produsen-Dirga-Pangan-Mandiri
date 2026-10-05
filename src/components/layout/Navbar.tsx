"use client";

import Link from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";
import { Home, Building2, Briefcase, Users, Camera, Phone } from "lucide-react";
import { siteIdentity, navigationLinks } from "@/content/site-data";

// Map ikon navigasi untuk desktop, tablet, dan bottom bar
const navIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "/": Home,
  "/profil": Building2,
  "/usaha": Briefcase,
  "/organisasi": Users,
  "/galeri": Camera,
  "/kontak": Phone,
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border bg-canvas/95 backdrop-blur-md transition-colors shadow-sm">
      <div className="mx-auto flex h-20 max-w-container items-center justify-between px-3 sm:px-4 md:px-5 lg:px-8">
        {/* Left: Brand Wordmark */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2 sm:gap-2.5 rounded-md p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agri-green transition-transform duration-200 hover:scale-[1.02]"
          aria-label={`${siteIdentity.name} - Beranda`}
        >
          {/* Emblem brand: Logo Koperasi */}
          <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-surface border border-border shadow-xs transition-all duration-200 group-hover:border-agri-green group-hover:shadow-sm overflow-hidden p-0.5">
            <NextImage
              src="/images/logo-koperasi.png"
              alt="Logo Koperasi Produsen Dirga Pangan"
              width={40}
              height={40}
              priority
              className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-110"
            />
          </span>
          <div className="flex flex-col md:hidden lg:flex">
            <span className="text-xs sm:text-sm font-bold tracking-tight text-ink leading-tight">
              Koperasi Produsen
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-tight text-ink leading-tight">
              Dirga Pangan
            </span>
          </div>
        </Link>

        {/* Center: Desktop/Tablet Navigation Links with Icons */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2"
          aria-label="Navigasi Utama"
        >
          {navigationLinks.map((item) => {
            const Icon = navIcons[item.href] || Home;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative flex items-center gap-1.5 px-2 py-1.5 md:px-2.5 md:py-1.5 lg:px-3 lg:py-2 text-xs lg:text-sm font-medium transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agri-green hover:-translate-y-0.5 active:translate-y-0 ${
                  isActive
                    ? "text-ink font-semibold bg-surface shadow-xs border border-agri-green/50"
                    : "text-muted-ink hover:text-ink hover:bg-surface/70"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon
                  className={`h-3.5 w-3.5 lg:h-4 lg:w-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                    isActive ? "text-agri-green" : "text-muted-ink group-hover:text-agri-green"
                  }`}
                  aria-hidden="true"
                />
                <span className="whitespace-nowrap">{item.label}</span>
              </Link>
            );
          })}
        </nav>

      {/* Right: CTA Button (Desktop & Tablet) */}
      <div className="hidden shrink-0 items-center md:flex">
        <Link
          href="/kontak"
          className="inline-flex items-center justify-center gap-2 rounded-button bg-ink px-3.5 py-1.5 md:px-3.5 md:py-1.5 lg:px-4 lg:py-2 text-xs font-semibold !text-white border-2 border-ink shadow-btn whitespace-nowrap transition-all duration-200 hover:shadow-btn-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agri-green"
        >
          <Phone className="h-3.5 w-3.5 text-white" aria-hidden="true" />
          <span className="text-white font-semibold">Hubungi Kami</span>
        </Link>
      </div>

      {/* Mobile Header Right: Tombol Hubungi Kami */}
      <div className="flex shrink-0 items-center gap-2 md:hidden">
        <Link
          href="/kontak"
          className="inline-flex items-center justify-center gap-1.5 rounded-button bg-ink px-3 py-1.5 text-xs font-semibold !text-white border-2 border-ink shadow-btn whitespace-nowrap transition-all duration-200 hover:shadow-btn-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agri-green"
        >
          <Phone className="h-3.5 w-3.5 text-white" aria-hidden="true" />
          <span className="text-white font-semibold">Hubungi Kami</span>
        </Link>
      </div>
      </div>
    </header>
  );
}
