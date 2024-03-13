/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/images/image-hero-desktop.png')",
      },
      minHeight: {
        10: "80vh",
      },
      colors: {
        white: "hsl(0, 0%, 98%)",
        pure: "#fff",
        gray: "hsl(0, 0%, 41%)",
        dark: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        epilogue: ["Epilogue", " sans-serif"],
      },
    },
  },
  plugins: [],
};
