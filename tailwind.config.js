const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["var(--font-merriweather)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          0: "#1C3988",
        },
        secondary: {
          0: "#F3F3FA",
        },
        borderColor: {
          0: "#F3F3FA",
        },
      },
      boxShadow: {
        "custom-shadow": " 4px 7px 8px 0px #dad7d7",
      },
    },
  },
  plugins: [],
};
