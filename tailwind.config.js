/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#213555",
        secondary: "#3E5879",
        light: "#D8C4B6",
        dark: "#F5EFE7",
      },
    },
  },
  plugins: [],
};
