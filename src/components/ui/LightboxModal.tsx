"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, Calendar, Tag } from "lucide-react";

export interface LightboxItem {
  id?: string;
  title: string;
  imageUrl: string;
  category?: string;
  date?: string;
  description?: string;
}

export interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: LightboxItem | null;
}

export function LightboxModal({ isOpen, onClose, item }: LightboxModalProps) {
  // Handle ESC key press
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Pratinjau foto: ${item.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-card bg-surface shadow-2xl border border-border/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between border-b border-border bg-surface px-5 py-3.5 sm:px-6">
          <div className="flex items-center gap-2">
            {item.category && (
              <span className="inline-flex items-center gap-1 rounded-pill bg-agri-light px-2.5 py-0.5 text-xs font-semibold text-agri-green">
                <Tag className="h-3 w-3" aria-hidden="true" />
                {item.category}
              </span>
            )}
            {item.date && (
              <span className="flex items-center gap-1 text-xs text-muted-ink">
                <Calendar className="h-3 w-3" aria-hidden="true" />
                {item.date}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-button text-muted-ink hover:bg-canvas hover:text-ink shadow-xs hover:shadow-btn active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agri-green"
            aria-label="Tutup pratinjau foto"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Image Preview Container */}
        <div className="relative max-h-[60vh] w-full overflow-hidden bg-black flex items-center justify-center">
          <div className="relative aspect-[16/9] w-full max-h-[60vh]">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Caption & Description */}
        <div className="border-t border-border bg-surface p-5 sm:p-6">
          <h3 className="text-lg font-bold text-ink sm:text-xl">
            {item.title}
          </h3>
          {item.description && (
            <p className="mt-2 text-sm leading-relaxed text-muted-ink text-justify">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LightboxModal;
