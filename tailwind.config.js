module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#000",
      pink: "#FF6FB5",
      yellow: "#FCF69C",
    },
    extend: {
      height: {
        "half-screen": "50vh",
      },
    },
  },
  plugins: [],
};
