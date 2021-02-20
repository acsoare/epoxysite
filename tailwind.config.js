module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      custom: ["Abril Fatface"],
      dancing: ["Dancing Script"],
      garamon: ["Cormorant Garamond"],
      fira: ["Fira Sans Condensed"],
    },
    extend: {
      height: {
        300: "300px",
        600: "600px",
        900: "900px",
        1500: "1500px",
        3000: "3000px",
      },
      width: {
        300: "300px",
        600: "600px",
        900: "900px",
        1500: "1500px",
      },
      margintop: {
        1000: "1000px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
