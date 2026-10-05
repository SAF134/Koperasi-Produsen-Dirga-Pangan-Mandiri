"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn, Tag, Calendar } from "lucide-react";
import LightboxModal, { LightboxItem } from "@/components/ui/LightboxModal";
import { galleryContent, GalleryItem } from "@/content/site-data";
import { cn } from "@/lib/utils";

export default function GalleryView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [activeItem, setActiveItem] = useState<LightboxItem | null>(null);

  // Filter items
  const filteredItems =
    selectedCategory === "Semua"
      ? galleryContent.items
      : galleryContent.items.filter((item) => item.category === selectedCategory);

  return (
    <>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-14">
        {galleryContent.categories.map((cat) => {
          const isActive = selectedCategory === cat;
          const count =
            cat === "Semua"
              ? galleryContent.items.length
              : galleryContent.items.filter((item) => item.category === cat).length;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "inline-flex items-center gap-2 rounded-pill px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agri-green active:scale-95",
                isActive
                  ? "bg-ink text-white shadow-btn scale-105"
                  : "bg-surface border border-border text-muted-ink shadow-xs hover:text-ink hover:border-agri-green/60 hover:-translate-y-0.5"
              )}
              aria-pressed={isActive}
            >
              <span>{cat}</span>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.2 text-[10px]",
                  isActive ? "bg-white/20 text-white" : "bg-canvas text-muted-ink"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group relative flex flex-col overflow-hidden rounded-card border border-border bg-surface cursor-pointer shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-agri-green/60 transition-all duration-300"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveItem(item);
              }
            }}
            aria-label={`Buka pratinjau: ${item.title}`}
          >
            {/* Image Container */}
            <div
              className={cn(
                "relative w-full overflow-hidden bg-black/5",
                item.aspect === "4:3" ? "aspect-[4/3]" : "aspect-[16/9]"
              )}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay with Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-ink shadow-md backdrop-blur-sm">
                  <ZoomIn className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
            </div>

            {/* Caption & Metadata */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-muted-ink mb-2">
                  <span className="inline-flex items-center gap-1 font-semibold text-agri-green">
                    <Tag className="h-3 w-3" aria-hidden="true" />
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-ink group-hover:text-agri-green transition-colors">
                  {item.title}
                </h3>
              </div>

              <p className="mt-2 text-xs sm:text-sm text-muted-ink line-clamp-2 leading-relaxed text-justify">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={activeItem !== null}
        onClose={() => setActiveItem(null)}
        item={activeItem}
      />
    </>
  );
}
