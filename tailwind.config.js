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


// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   content: ["*.html", "./src/**/*.{html,js}"],
//   theme: {
//     screens: {
//       sm: "576px",
//       md: "768px",
//       lg: "992px",
//       xl: "1200px",
//     },
//     container: {
//       center: true,
//       padding: "1rem",
//     },
//     extend: {
//       colors: {
//         primary: "#FD3D57",
//       },
//       fontFamily: {
//         poppins: "'Poppins', sans-serif",
//         roboto: "'Roboto', sans-serif",
//       },
//     },
//   },
//   variants: {
//     extend: {
//       visibility: ["group-hover"],
//       display: ["group-hover"],
//     },
//   },
//   plugins: [require("@tailwindcss/forms")],
// };
