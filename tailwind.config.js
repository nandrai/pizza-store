/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#eb4d4b",
        secondary: "#ffbe76",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
