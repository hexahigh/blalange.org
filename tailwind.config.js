/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite-typography'),
    /*require("@catppuccin/tailwindcss")({
      // which flavour of colours to use by default, in the `:root`
      prefix: false,
      defaultFlavour: "latte",
    }),*/
  ],
}

