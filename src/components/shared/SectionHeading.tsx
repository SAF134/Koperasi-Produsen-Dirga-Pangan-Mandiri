import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-10 sm:mb-14",
        align === "center" && "items-center text-center",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-agri-green mb-3.5">
          <span className="h-1.5 w-1.5 rounded-full bg-agri-green" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-3.5 max-w-2xl text-base text-muted-ink sm:text-lg leading-relaxed text-justify">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
