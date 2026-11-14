import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#123C2D",
        leaf: "#1F6B4A",
        mint: "#EAF5EE",
        canvas: "#F5F8F5",
        ink: "#1D2B24",
      },
    },
  },
  plugins: [],
};
export default config;
