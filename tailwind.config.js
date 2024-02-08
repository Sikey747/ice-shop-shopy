/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      primary: "var(--color-primary)",
      "primary-gray1": "var(--primary-gray1)",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
