/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A4D2E",
        secondary: "#FF9F29",
        background: "#FAF3E3",
        text: "#000000",
      },
    },
    plugins: [],
  },
};
