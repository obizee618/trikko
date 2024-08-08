/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e8512a",
        secondary: "#110e09",
        backdrop: "#f9fafc",
        dark: "#252525",
        light: "#f1f3f2",
      }
    },
  },
  plugins: [],
}