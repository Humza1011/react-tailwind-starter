/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Change them if you want, according you your application
        primary: "#1F2937",
        grayLighter: "#eeeeee",
        grayLight: "#dddddd",
        grayMedium: "#aaaaaa",
        grayDark: "#777777",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },

      screens: {
        "2xlCustom": { max: "1545px" },
        // => @media (max-width: 1535px) { ... }

        xlCustom: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lgCustom: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "2mdCustom": { max: "900px" },
        // => @media (max-width: 850px) { ... }

        mdCustom: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        smCustom: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        xsmCustom: { max: "480px" },
        // => @media (max-width: 480px) { ... }
      },
    },
  },
  plugins: [],
};
