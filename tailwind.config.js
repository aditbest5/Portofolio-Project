/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  darkMode: false,
  theme: {
    extend: {
      height: {
        128: "32rem",
        160: "40rem",
        180: "48rem",
        200: "56rem",
      },
    },
    screens: {
      xs: { max: "600px" },
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "retro",
      "cyberpunk",
      "aqua",
      "garden",
    ],
  },
  plugins: [require("daisyui")],
};
