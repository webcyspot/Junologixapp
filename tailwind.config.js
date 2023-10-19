/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "290px",
        sm: "640px",
        md: "992px",
        lg: "1024px",
        xl: "1280px",
      },
      animation: {
        slide: "slide 5s infinite", // Adjust the duration as needed
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        primary: "#FF7900",
        secondary: "#26A9E0",
      },
      fontFamily: {
        default: ["Poppins", "DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
