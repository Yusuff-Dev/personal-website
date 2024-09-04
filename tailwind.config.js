/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
    extend: {
      colors: {
        'bg-black': '#232426',
        'grey': "#ccc",
        'dark-grey': "#343537",
        'dark-smoke': "#CCCCCC",
        'white-smoke': "#E1E1E1",
        'card-bg': '#404142',
        'alternate': '#6b6e6f',
      },

      fontFamily: {
        'humane': ['humane', 'sans-serif'],
        'geist': ['geist', 'sans-serif']
      },
    },
  },
  plugins: [],
};
