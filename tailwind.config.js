/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "darkMode": "class",
  theme: {
    extend: {
      colors: {
        darkblue: "hsl(209,23%,22%)",
        verydarkblue: "hsl(207,26%,17%)",
        verydarkbluelight: "hsl(200,15%,8%)",
        darkgray: "hsl(0,0%,52%)",
        verylighgray: "hsl(0,0%,98%)",
        white: "hsl(0,0%,100%)"
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

