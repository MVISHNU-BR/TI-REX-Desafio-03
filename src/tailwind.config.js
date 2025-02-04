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
        secondDark: "#333333"
      },
      fontFamily: {
        poppins: ["Poppins", 'sans-serif'],
        montserrat: ["Montserrat", 'sans-serif']
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

