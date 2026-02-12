module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        card: "var(--card)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
};
