/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8c59ea",

          secondary: "#a269db",

          accent: "#e874d6",

          neutral: "#282031",

          info: "#1968F0",

          success: "#1CE3A7",

          warning: "#EBC428",

          error: "#EA7361",
        },
      },
    ],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./src/assets/images/banner.jpg')",
      },
    },
  },

  //...
  plugins: [require("daisyui")],
};
