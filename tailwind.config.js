/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {

    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1348px",

    // },

    extend: {
      colors: {
        primary: "#D434FE",
        secondary: "#FF26B9",
        modalBg: "rgba(21, 14, 40, 0.93)",
      },
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
        primaryGradient:
          "linear-gradient(0deg, #140d27, #140d27), linear-gradient(0deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.18))",
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
