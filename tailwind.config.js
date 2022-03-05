import { defineConfig } from "windicss/helpers";
import defaultTheme from "windicss/defaultTheme";

export default defineConfig({
  darkMode: "class",
  extract: {
    include: ["**/*.{jsx,tsx,css}"],
    exclude: ["node_modules", ".git", ".next"],
  },
  theme: {
    fontFamily: {
      sans: ["Overpass", ...defaultTheme.fontFamily.sans],
      serif: ['"Old Standard TT"', ...defaultTheme.fontFamily.serif],
      mono: ['"Overpass Mono"', ...defaultTheme.fontFamily.mono],
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '2880px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '5120px',
      // => @media (min-width: 1280px) { ... }
    },
  },
});
