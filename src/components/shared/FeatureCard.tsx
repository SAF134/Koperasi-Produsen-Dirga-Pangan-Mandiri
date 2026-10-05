import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: ReactNode;
  badge?: string;
  variant?: "default" | "wash";
  footer?: ReactNode;
}

export function FeatureCard({
  title,
  description,
  icon,
  badge,
  variant = "default",
  footer,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col justify-between rounded-card border-2 border-border p-6 sm:p-8 transition-all duration-300 shadow-card hover:shadow-card-hover hover:-translate-y-1",
        variant === "default" && "bg-surface hover:border-agri-green",
        variant === "wash" && "bg-agri-light/60 hover:bg-agri-light hover:border-agri-green",
        className
      )}
      {...props}
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          {icon && (
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface border border-border text-agri-green shadow-xs transition-transform duration-200 group-hover:scale-110">
              {icon}
            </div>
          )}
          {badge && (
            <span className="inline-flex rounded-pill bg-surface border border-border px-3 py-1 text-xs font-semibold text-agri-green">
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-ink group-hover:text-agri-green transition-colors">
          {title}
        </h3>

        <p className="mt-2.5 text-sm sm:text-base text-muted-ink leading-relaxed text-justify">
          {description}
        </p>
      </div>

      {footer && <div className="mt-6 pt-4 border-t border-border/60">{footer}</div>}
    </div>
  );
}

export default FeatureCard;
