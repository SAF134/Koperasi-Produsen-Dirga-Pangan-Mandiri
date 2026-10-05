"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Building2, Briefcase, Users, Camera, Phone } from "lucide-react";
import { navigationLinks } from "@/content/site-data";
import { cn } from "@/lib/utils";

// Map ikon yang sesuai untuk setiap rute navigasi
const navIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "/": Home,
  "/profil": Building2,
  "/usaha": Briefcase,
  "/organisasi": Users,
  "/galeri": Camera,
  "/kontak": Phone,
};

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigasi Menu Mobile"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden"
    >
      <div className="flex items-center gap-1 sm:gap-1.5 rounded-full bg-white/95 backdrop-blur-xl border border-border/80 px-2.5 py-1.5 shadow-dock transition-all duration-300">
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
              aria-label={item.label}
              title={item.label}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full transition-all duration-200 select-none",
                isActive
                  ? "bg-ink text-white shadow-md shadow-ink/30 scale-105"
                  : "text-muted-ink hover:text-ink hover:bg-canvas/80 active:scale-90"
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5 transition-transform duration-200",
                  isActive
                    ? "scale-105 text-white"
                    : "text-muted-ink group-hover:text-ink group-hover:scale-110"
                )}
              />
              <span className="sr-only">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
