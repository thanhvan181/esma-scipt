module.exports = {
  node: 'jit',
  content: ["*.html", "./src/**/*.{html,js}"],
  theme: {
    screen: {
      sm: "576px",
      md: "768x",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamilyz: {
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        primary: "#FD3D57",
        50: '#F9FAFB', 
        300: '#F1F1F1', 
        400: 'EOEOEO', 
        500: 'AEAEAE', 
        600: '#7E7E7E', 
        900: '#303030 '

      },
    },
    variants: {
      extend: {
        display: ["group-hover"],
        visibility: ["group-hover"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
