import type { Config } from "tailwindcss";

export default {
  // darkMode: "selector",
  darkMode: ["variant", ["&:where(.dark, .dark *)", "&:where(:global(.dark), :global(.dark) *)"]], // Fix for dark mode after upgrade to svelte 5
  content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        b: {
          red: "var(--color-b-red)",
          lime: "var(--color-b-lime)",
          yellow: "var(--color-b-yellow)",
          cyan: "var(--color-b-cyan)",
          blue: "var(--color-b-blue)",
          maastricht: "var(--color-b-maastricht)",
        },
        m: {
          'base-100': "var(--color-m-base-100)",
          'base-200': "var(--color-m-base-200)",
          'base-300': "var(--color-m-base-300)",
          'base-content': "var(--color-m-base-content)",
          'primary': "var(--color-m-primary)",
          'primary-content': "var(--color-m-primary-content)",
          'secondary': "var(--color-m-secondary)",
          'secondary-content': "var(--color-m-secondary-content)",
          'accent': "var(--color-m-accent)",
          'accent-content': "var(--color-m-accent-content)",
          'neutral': "var(--color-m-neutral)",
          'neutral-content': "var(--color-m-neutral-content)",
          'info': "var(--color-m-info)",
          'info-content': "var(--color-m-info-content)",
          'success': "var(--color-m-success)",
          'success-content': "var(--color-m-success-content)",
          'warning': "var(--color-m-warning)",
          'warning-content': "var(--color-m-warning-content)",
          'error': "var(--color-m-error)",
          'error-content': "var(--color-m-error-content)",
        },
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("flowbite-typography"),
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "mocha",
    }),
  ],
} satisfies Config;
