/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center : true,
      padding : "16px",
    },
    extend: {
      colors : {
        "primary" :"#ec4899",
        "secondary" : "#94a3b8",
        "dark" : "#020617",
      }
    },
  },
  plugins: [],
}

