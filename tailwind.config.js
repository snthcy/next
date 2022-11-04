const defaultConfig = require("tailwindcss/defaultConfig");
const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'insta': `linear-gradient(to right, rgb(217, 70, 239), rgb(220, 38, 38), rgb(251, 146, 60))`,
        'disc': `linear-gradient(to right, rgb(88, 101, 242), rgb(88, 101, 242), rgb(88, 101, 242))`,
        'twitter': `conic-gradient(at left center, rgb(56, 189, 248), rgb(30, 64, 175))`,
        'git': `linear-gradient(to right, rgb(229, 231, 235), rgb(156, 163, 175), rgb(75, 85, 99))`,
        'last': `linear-gradient(to right, rgb(239, 68, 68), rgb(153, 27, 27))`,
        'steam': `linear-gradient(to right, rgb(7, 189, 255), rgb(23, 157, 255), rgb(41, 119, 255))`,
        'trakt': `linear-gradient(to right, rgb(239, 68, 68), rgb(153, 27, 27))`,
        // 'rainbow': `linear-gradient(45deg, #0072ff, #00d2e8 17%, #04fd8f 34%, #70fd6c 51%, #dae11e 68%, #ff9346 85%, #ff62c6)`
      }),
      'animation': {
            'textglow': 'ease-in-out duration-300 infinite hover:brightness-200',
        },
        dropShadow: {
        'xl': '0 10px 10px rgba(255, 255, 255, 0.75)',
      },
        fontFamily: {
        sans: ["Relative-Book-Pro", ...defaultConfig.theme.fontFamily.sans],
        serif: ["Redaction-50", ...defaultConfig.theme.fontFamily.serif],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".bg-blur": {
          "": {},
        }
      })
    }),
  ],
}