/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "9/10": "90%",
        "8/10": "80%",
        "7/10": "70%",
        "6/10": "60%",
      },
    },
  },
  plugins: [],
};
