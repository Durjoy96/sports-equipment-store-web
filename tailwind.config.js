/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Bricolage-Grotesque": ["Bricolage Grotesque", "sans-serif"],
      },
      colors: {
        "base-100": "#ffffff",
        "base-200": "#f8f9fd",
        "base-300": "#dfe5eb",
        "base-content": "#30313d",
        "base-content-secondary": "#5c5b61",
        primary: "#FF8000",
        "primary-content": "#ffffff",
      },
    },
  },
  plugins: [require("daisyui")],
};
