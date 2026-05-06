/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "rose-gold": "var(--rg-gold)",
        "rose-gold-light": "var(--rg-gold-light)",
        "rose-primary": "var(--primary)",
        "rose-primary-dark": "var(--primary-dark)",
        "rose-surface": "var(--surface-alt)",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Lato", "sans-serif"],
      },
      boxShadow: {
        "rose-glow": "0 24px 48px -32px rgba(194, 100, 122, 0.45)",
      },
    },
  },
  plugins: [],
};
