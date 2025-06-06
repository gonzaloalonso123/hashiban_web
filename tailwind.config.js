/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hashiban: "font",
      },
      dropShadow: {
        hero: "-1px 2px 8px #000",
      },
    },
  },
  plugins: [],
};
