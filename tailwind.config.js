// tailwind.config.js

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Warm-cool accent pair
        accent: {
          red: "#AA203F",
          blue: "#21659A",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-links": theme("colors.accent.blue"),
            "--tw-prose-bold": theme("colors.accent.red"),
            a: {
              color: theme("colors.accent.blue"),
              "&:hover": {
                color: theme("colors.accent.red"),
              },
            },
          },
        },
        invert: {
          css: {
            "--tw-prose-invert-links": "#5FA8D3", // lighter blue for dark bg
            "--tw-prose-invert-bold": "#E8546F", // lighter red for dark bg
            a: {
              color: "#5FA8D3",
              "&:hover": {
                color: "#E8546F",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};