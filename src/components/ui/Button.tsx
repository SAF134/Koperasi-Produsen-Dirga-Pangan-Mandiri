import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "agri" | "ghost";
  size?: "sm" | "md" | "lg";
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
};

export type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    target?: string;
    rel?: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      iconLeft,
      iconRight,
      className,
      children,
      href,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-button focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agri-green focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none no-underline";

    const variantStyles = {
      primary:
        "bg-ink !text-white border-2 border-ink shadow-btn hover:shadow-btn-hover hover:!text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
      secondary:
        "border-2 border-border-dark/60 bg-surface text-ink shadow-btn hover:shadow-btn-hover hover:border-ink hover:bg-canvas hover:text-ink hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
      agri:
        "bg-agri-green !text-white border-2 border-agri-green shadow-btn hover:shadow-btn-hover hover:bg-agri-green/95 hover:!text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
      ghost:
        "border-2 border-transparent text-ink hover:bg-surface/80 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    };

    const sizeStyles = {
      sm: "h-9 px-3.5 text-xs gap-1.5",
      md: "h-11 px-5 text-sm gap-2",
      lg: "h-12 px-6 text-sm sm:text-base gap-2.5",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
      const textColorClass = variant === "primary" || variant === "agri" ? "!text-white" : undefined;

      if (isExternal) {
        const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
        const safeRel = anchorProps.rel || (anchorProps.target === "_blank" ? "noopener noreferrer" : undefined);
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={combinedClassName}
            {...anchorProps}
            rel={safeRel}
          >
            {iconLeft && <span className="shrink-0">{iconLeft}</span>}
            <span className={textColorClass}>{children}</span>
            {iconRight && <span className="shrink-0">{iconRight}</span>}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {iconLeft && <span className="shrink-0">{iconLeft}</span>}
          <span className={textColorClass}>{children}</span>
          {iconRight && <span className="shrink-0">{iconRight}</span>}
        </Link>
      );
    }

    const textColorClass = variant === "primary" || variant === "agri" ? "!text-white" : undefined;

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={(props as ButtonHTMLAttributes<HTMLButtonElement>).type || "button"}
        className={combinedClassName}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {iconLeft && <span className="shrink-0">{iconLeft}</span>}
        <span className={textColorClass}>{children}</span>
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
