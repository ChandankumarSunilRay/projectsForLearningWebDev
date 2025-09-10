// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["*"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        mullish:["Mulish","sans-serif"],
      },
      colors:{
        deepBlue:"#2042a",
        lightBlue:"#2b84ea",
        lightBlue300:"#4b94ed",
        lightBlue500:"#0b72e7",
        greenLight:"#61cea6",
        greyText:"#818597",
        lightGrey:"#e2e2e2",
        greyBlue:"#344a6c",
        deepBlueHead:"#162f56",
        grey2:"#525a76",


      }
},
  },
  plugins: [],
};
