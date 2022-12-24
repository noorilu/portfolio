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
      },
    },
  },
  plugins: [],
};
