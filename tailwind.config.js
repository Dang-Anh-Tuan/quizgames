/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
  purge: ["./*.html", "./*.{js,jsx,ts,tsx,vue}", "./template/**/*.{html,js}"],
  content: ["./*.{html,js}", "./template/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-login": "url('/static/images/bgLogin.jpg')",
      },
      colors: {
        primary: "#2e9ce9",
        primary_light: "#2e9ce9",
        dark_primary: "#ff7200",
        dark_primary_light: "#f49548",
        dark_bg: "#212332",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
