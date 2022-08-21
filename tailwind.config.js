/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./container/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./container/**/*.{js,ts,jsx,tsx}",
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
        bodyGradient: " linear-gradient(179.77deg, #FFFFFF 43.21%, #CBFFF0 74.26%, #FFFFFF 115.51%)",
        secBg: "#7DADA2",
        'deepGreen': '#195746',
        'white': '#ffffff',
        'lightGreen': '#528276',
        'verydeepGreen': '#004333',
        'lightBrown': '#ab6f6f',
        'midGray': '#6e706e',
        'deepCyan': '#6e706e',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        priPara: "1.6rem",
        secPara: '1.3rem',
        priHead: "5rem",
        secHead: "4rem",
        mediumHead: "2rem",
        '48': '48px',
        '28': '28px',
        '10': '10px',
      },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "850px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",        
    },
    backgroundColor: {
      'deepGreen': '#195746',
      'white': '#ffffff',
      'lightGreen': '#528276',
      'lightBrown': '#ab6f6f',
      'midGray': '#6e706e',
      'deepCyan': '#6e706e',
      'veryLightGreen': '#dbfff6'
    },
    backGroundImage: {
      'exploreBg': "url('../public/assets/images/exploreBg.svg')"
    },
      boxShadow: {
        'portfolio': '1px 4px 10px rgba(0, 0, 0, 0.25)'
      },
      backgroundSize: {
        '100%': '100% 100%'
      },
      width: {
        '300px': '300px',
        '60px': '60px',
      },
      height: {
        '60px': '60px'
      }
    },
  },
  plugins: [],
}
