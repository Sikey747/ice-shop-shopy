/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      primary: "var(--color-primary)",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
