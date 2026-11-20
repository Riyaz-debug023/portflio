const c = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Instrument Serif", "Georgia", "serif"],
      },
      // Colours resolve through CSS variables so the light/dark theme applies everywhere.
      colors: {
        white: c("c-white"),
        black: c("c-black"),
        neutral: {
          300: c("n-300"),
          400: c("n-400"),
          500: c("n-500"),
          600: c("n-600"),
          700: c("n-700"),
          800: c("n-800"),
          900: c("n-900"),
          950: c("n-950"),
        },
      },
    },
  },
  plugins: [],
};
