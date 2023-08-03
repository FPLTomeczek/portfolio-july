/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-0": {
      transform: "rotateY(0deg)",
    },
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".rotate-y-minus-180deg": {
      transform: "rotateY(-180deg)",
    },
  });
});

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "primary-color-light": "var(--primary-color-light)",
        "primary-color-dark": "var(--primary-color-dark)",
        "secondary-color": "var(--secondary-color)",
        "secondary-color-light": "var(--secondary-color-light)",
        "secondary-color-dark": "var(--secondary-color-dark)",
        "accent-color": "var(--accent-color)",
        "accent-color-light": "var(--accent-color-light)",
        "accent-color-dark": "var(--accent-color-dark)",
        "grey-200": "var(--grey-200)",
        "grey-400": "var(--grey-400)",
        "gradient-hover-color-start": "var(--gradient-hover-color-start)",
        "gradient-hover-color-end": "var(--gradient-hover-color-end)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover"], // add here more properties if you need
    },
  },
  plugins: [rotateY],
};
