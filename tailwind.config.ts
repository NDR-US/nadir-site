import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05070a", // True Industrial Black
        nadir: {
          orange: "#EA580C", // Precision Orange
          slate: "#1e293b",
          border: "rgba(255, 255, 255, 0.08)",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"], // Technical Data
        display: ["var(--font-inter)", "sans-serif"], // Clean Authority
      },
      letterSpacing: {
        institutional: '0.5em',
        data: '0.15em',
      },
    },
  },
  plugins: [],
};
export default config;
