/** @type {import('tailwindcss').Config} */
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
      },
    },
  },
  plugins: [],
};
