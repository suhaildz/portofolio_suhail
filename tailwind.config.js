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
        "primary" :"#FF2400",
        "secondary" : "#808080",
        "dark" : "#020617",
        "Instagram" : "#FF0069",
        "Facebook" : "#0866FF",
      }
    },
  },
  plugins: [],
}

