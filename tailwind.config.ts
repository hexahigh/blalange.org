import type { Config } from 'tailwindcss'

export default {
  // darkMode: "selector",
  darkMode: ['variant', ['&:where(.dark, .dark *)', '&:where(:global(.dark), :global(.dark) *)']], // Fix for dark mode after upgrade to svelte 5
  content: ["./src/**/*.{html,js,svelte,ts}", './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
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
    require('@tailwindcss/typography'),
    require("flowbite-typography"),
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "mocha",
    }),
  ],
} satisfies Config
