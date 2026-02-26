import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#020617", // Obsidian
        foreground: "#f8fafc", // Bone White
        accent: "#06b6d4",     // Electric Cyan
        border: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
