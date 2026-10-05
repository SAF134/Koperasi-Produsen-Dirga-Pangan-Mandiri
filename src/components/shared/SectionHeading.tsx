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
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col mb-10 sm:mb-14",
        isCenter ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <div className={cn("flex mb-3.5", isCenter ? "justify-center w-full" : "justify-start")}>
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-agri-green/30 bg-surface px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-agri-green shadow-xs hover:border-agri-green hover:shadow-card transition-all duration-200">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-agri-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-agri-green" />
            </span>
            <span>{eyebrow}</span>
          </span>
        </div>
      )}
      <h2
        className={cn(
          "text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl text-balance",
          isCenter && "text-center"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3.5 max-w-2xl text-base text-muted-ink sm:text-lg leading-relaxed",
            isCenter ? "text-center mx-auto" : "text-justify"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
