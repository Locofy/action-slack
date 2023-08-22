/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        mediumblue: "#1f39e0",
        crimson: "#e43a3a",
      },
    },
    fontSize: {
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
