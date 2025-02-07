/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        primary: "#B88E2F",
        secondWhite: "#FFF3E3",
        secondDark: "#333333",
        fadeBlack: "#3A3A3A",
        fadeGray: "#898989",
        fadeGray2: "#616161",
        secondFadeGray: "#9F9F9F",
        borderGray: "#D9D9D9",
        bannerColor: "#FAF3EA",
        bannerColorSecondary: "#FCF8F3",

      },
      fontFamily: {
        poppins: ["Poppins", 'sans-serif'],
        montserrat: ["Montserrat", 'sans-serif']
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

