import { light } from "@fortawesome/fontawesome-svg-core/import.macro";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   "color1": "#006BFF",
    //   "color2": "#FEF9F2"
    // },
    extend: {
      spacing: {
        "5px": "5px",
        "15px": "15px",
        "25px": "25px",
        "10%": "10%",
        "30%": "30%",
        "50%": "50%",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color1: "#006BFF",
        color2: "#FCFAEE",
        color3: {
          satu: "#FFCC00",
          dua: "#FF0000",
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    theme: ["forest, emerald, bumblebee"],
  }
};
export default config;
