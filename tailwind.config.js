/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hashiban: "font",
      },
      dropShadow: {
        hero: "0 0 10px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
