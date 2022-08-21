/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./container/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deepGreen': '#195746',
        'white': '#ffffff',
        'lightGreen': '#528276',
        'verydeepGreen': '#004333',
        'lightBrown': '#ab6f6f',
        'midGray': '#6e706e',
        'deepCyan': '#6e706e'
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
      fontSize: {
        '48': '48px',
        '28': '28px',
        '10': '10px',
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
