/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "nature": "url('rddback.png')",
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      boxShadow: {
        '3xl': '0 0 100px 600px',
      },
      colors: {
        dark: {
          200: "#1B2838",
          700: "#0E131E",
          007: "rgba(14, 19, 30, 0.5)",
          004: "rgba(14, 19, 30, 0.7)",
          001: "rgba(14, 19, 30, 0.1)",
        },
        blue: {
          500: "#0094FF",
        },
        orange: {
          500: "#FBA94C",
        },
        red: {
          500: "#F75A68",
        },
        gray: {
          100: "#E1E1E6",
          200: "#C4C4CC",
          300: "#8D8D99",
          500: "#323238",
          600: "#29292E",
          700: "#121214",
          900: "#09090A",
        },
      },
    },
  },
  plugins: [],
}
