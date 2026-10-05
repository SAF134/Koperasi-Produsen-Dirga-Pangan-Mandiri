import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  description?: string;
  icon?: ReactNode;
}

export function StatCard({
  value,
  label,
  description,
  icon,
  className,
  ...props
}: StatCardProps) {
  // Cek apakah value adalah teks panjang (misal > 5 karakter seperti "50.000+" atau "Higienis")
  const isLongValue = value.length > 5;

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-card border-2 border-border bg-surface p-5 sm:p-6 transition-all duration-300 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-agri-green overflow-hidden",
        className
      )}
      {...props}
    >
      <div>
        {/* Top Header: Value & Icon */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="min-w-0 flex-1">
            <span
              className={cn(
                "font-extrabold tracking-tight text-ink font-sans leading-none block transition-colors group-hover:text-agri-green",
                isLongValue
                  ? "text-2xl sm:text-3xl lg:text-[28px] xl:text-3xl"
                  : "text-3xl sm:text-4xl lg:text-4xl"
              )}
            >
              {value}
            </span>
          </div>

          {icon && (
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-canvas border border-border text-agri-green shadow-xs transition-transform duration-200 group-hover:scale-110">
              {icon}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Area: Full-width Divider, Label & Description */}
      <div className="pt-4 border-t border-border">
        <h3 className="text-sm font-bold text-ink leading-snug">
          {label}
        </h3>
        {description && (
          <p className="mt-1 text-xs text-muted-ink leading-relaxed text-justify">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default StatCard;
