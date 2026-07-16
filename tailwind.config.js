/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0D12",
        panel: "#10141B",
        line: "#1E2530",
        cyan: "#4FD1C5",
        amber: "#E8A94C",
        paper: "#E7E9EC",
        mute: "#7C8798",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
