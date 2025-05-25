/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // 👈 includes everything in /app
    "./components/**/*.{js,jsx,ts,tsx}", // 👈 if you have a components folder
    "./App.{js,jsx,ts,tsx}", // 👈 optional, for top-level App.tsx
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "151312",
        light: {
          100: "#d6c6ff",
          200: "#a8b5db",
          300: "#9ca4ab",
        },
        dark: {
          100: "221f3d",
          200: "#ofod23",
        },
        accent: "#ab8bff",
      },
    },
  },
  plugins: [],
};
