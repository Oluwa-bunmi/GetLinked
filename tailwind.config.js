/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // sm: "576px",
      // => @media (min-width: 576px) { ... }

      // md: "960px",
      // => @media (min-width: 960px) { ... }

      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1348px",
      // => @media (min-width: 1440px) { ... }
    },

    extend: {
      fontFamily: {
        unica: "'Unica One', cursive",
        mont: "'Montserrat', sans-serif",
      },
      backgroundImage: {
        firstLens: "url('../src/assets/gradientbg.png')",
      },
    },
  },
  plugins: [
    require("tailwind-typewriter")({
      wordsets: {
        writer: {
          words: ["Innovation"],
          repeat: 0,
          eraseSpeed: 0,
        },
      },
    }),
  ],
};
