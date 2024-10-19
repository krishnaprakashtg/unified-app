const { theme } = require('app/design/tailwind/theme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    '../../../packages/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    ...theme,
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        footerbackground: "var(--footerbackground)",
        themered: "#cd0033"
      },
    },
  },
  plugins: [require('nativewind/tailwind/css')],
};
