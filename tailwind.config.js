/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      primary: "var(--color-primary)",
      "primary-gray1": "var(--primary-gray1)",
      "primary-gray2": "var(--primary-gray2)",
      "primary-gray3": "var(--primary-gray3)",
      "primary-black": "var(--primary-black)",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
