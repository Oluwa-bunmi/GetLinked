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
      boxShadow: {
        regshadow: "0px 4px 4px 0px #00000040",
      },
      backgroundImage: {
        firstLens: "url('../src/assets/gradientbg.png')",
        secondLens: "url('../src/assets/secondLens.png')",
        buttonGradient: "linear-gradient(270deg,#903aff,#fe34b9)",
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
