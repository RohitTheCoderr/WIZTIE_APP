/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { Poppins: ["Poppins", "sans serif"], inter:["Inter", " sans-serif"],DM:["DM Sans", "sans-serif"] },
      fontWeight: { Five: 500, four: 400 },
      boxShadow: {
        'custom': '1px 4px 10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
};
