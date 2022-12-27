/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        upheaval: ["Upheaval", "sans-serif"],
        blackoak: ["Blackoak", "sans-serif"],
        cotton: ["Cotton", "sans-serif"],
        omori: ["Omori", "sans-serif"],
        oxygen: ["Oxygen", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        sacramento: ["Sacramento", "cursive"],
        greycliff: ["Greycliff", "sans"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
