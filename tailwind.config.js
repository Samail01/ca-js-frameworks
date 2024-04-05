/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#ebfbf9",
          "light-hover": "#e1f9f5",
          "light-active": "#c1f2eb",
          normal: "#38d6bf",
          "normal-hover": "#32c1ac",
          "normal-active": "#2dab99",
          dark: "#2aa18f",
          "dark-hover": "#228073",
          "dark-active": "#196056",
          darker: "#144b43",
        },
      },
    },
  },
  plugins: [],
};
