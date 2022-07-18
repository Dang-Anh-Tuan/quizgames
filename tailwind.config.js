/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
