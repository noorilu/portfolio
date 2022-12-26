/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        village: ["Village", "sans-serif"],
        upheaval: ["Upheaval", "sans-serif"],
        birch: ["Birch", "sans-serif"],
        blackoak: ["Blackoak", "sans-serif"],
        cotton: ["Cotton", "sans-serif"],
        omori1: ["Omori1", "sans-serif"],
        omori2: ["Omori2", "sans-serif"],
      },
    },
  },
  plugins: [],
};
