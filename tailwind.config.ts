import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        surface: "var(--color-surface)",
        ink: "var(--color-ink)",
        "muted-ink": "var(--color-muted-ink)",
        border: "var(--color-border)",
        "border-dark": "var(--color-border-dark)",
        "agri-green": "var(--color-agri-green)",
        "agri-light": "var(--color-agri-light)",
        "status-green": "var(--color-status-green)",
        wa: "var(--color-wa)",
      },
      borderRadius: {
        button: "8px",
        card: "12px",
        pill: "9999px",
      },
      maxWidth: {
        container: "1200px",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        28: "7rem",
      },
      boxShadow: {
        xs: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        card: "0 10px 25px -3px rgba(0, 0, 0, 0.2), 0 4px 10px -2px rgba(0, 0, 0, 0.12)",
        "card-hover": "0 22px 45px -4px rgba(0, 0, 0, 0.28), 0 10px 20px -3px rgba(0, 0, 0, 0.16)",
        dock: "0 16px 40px -4px rgba(0, 0, 0, 0.3), 0 6px 16px -2px rgba(0, 0, 0, 0.16)",
        btn: "0 4px 14px 0 rgba(0, 0, 0, 0.28), 0 2px 6px 0 rgba(0, 0, 0, 0.16)",
        "btn-hover": "0 10px 25px -2px rgba(0, 0, 0, 0.38), 0 5px 12px -1px rgba(0, 0, 0, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
