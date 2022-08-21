/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./container/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navBarBg: "#1C6C59",
        priColor: "#365850",
        homeTextColor: "#383838",
        priHeadColor: "#08352A",
        secColor: "#FFFFFF",
        recBgGradient: " linear-gradient(180deg, #00614A 0%, #001B14 100%)",
        bodyGradient:
          " linear-gradient(179.77deg, #FFFFFF 43.21%, #CBFFF0 74.26%, #FFFFFF 115.51%)",
        secBg: "#7DADA2",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        priPara: "1.6rem",
        secPara: '1.3rem',
        priHead: "5rem",
        secHead: "4rem",
        mediumHead: "2rem"
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "850px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
