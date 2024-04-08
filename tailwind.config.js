/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      nunito: ["Nunito Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
