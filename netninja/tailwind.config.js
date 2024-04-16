/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  layers: {
    "no-tailwindcss": {
      ".no-tailwindcss": {
        all: "unset",
      },
    },
  },
};
