import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        sdgs: {
          1: "#c5192d",
          2: "#dda63a",
          3: "#4c9f39",
          4: "#c5182d",
          5: "#fe3a22",
          6: "#26bde2",
          7: "#fcc30b",
          8: "#a21942",
          9: "#fd6925",
          10: "#dd1367",
          11: "#fd9d25",
          12: "#bf8b2e",
          13: "#3f7e44",
          14: "#0a97d9",
          15: "#56c02b",
          16: "#00689d",
          17: "#19486a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
