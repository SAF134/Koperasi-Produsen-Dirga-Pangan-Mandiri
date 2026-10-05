"use client";

import Link from "next/link";
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
          {/* Emblem brand */}
          <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-surface border border-border shadow-xs transition-all duration-200 group-hover:border-agri-green group-hover:shadow-sm">
            <svg
              className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-agri-green transition-transform duration-200 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
          </span>
          <div className="flex flex-col md:hidden lg:flex">
            <span className="text-sm sm:text-base font-bold tracking-tight text-ink uppercase leading-tight">
              {siteIdentity.shortName}
            </span>
            <span className="text-[9px] sm:text-[10px] font-medium tracking-wider text-muted-ink uppercase leading-tight">
              Koperasi Produsen
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
            className="inline-flex items-center justify-center rounded-button bg-ink px-3.5 py-1.5 md:px-3.5 md:py-1.5 lg:px-4 lg:py-2 text-xs font-semibold !text-white border-2 border-ink shadow-btn whitespace-nowrap transition-all duration-200 hover:shadow-btn-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agri-green"
          >
            <span className="text-white font-semibold">Hubungi Kami</span>
          </Link>
        </div>

        {/* Mobile Header Right: Tombol Hubungi Kami (Menggantikan Badge Pasokan Aktif) */}
        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <Link
            href="/kontak"
            className="inline-flex items-center justify-center rounded-button bg-ink px-3 py-1.5 text-xs font-semibold !text-white border-2 border-ink shadow-btn whitespace-nowrap transition-all duration-200 hover:shadow-btn-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agri-green"
          >
            <span className="text-white font-semibold">Hubungi Kami</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
