/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#037c6a",

          secondary: "#eac19f",

          accent: "#5aa014",

          neutral: "#2A2438",

          "base-100": "#EEECF3",

          info: "#AFBBE4",

          success: "#18BF9D",

          warning: "#DDA808",

          error: "#F06A60",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
