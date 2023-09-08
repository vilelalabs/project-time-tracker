/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        highlight: "#F57C00",
        highlighthover: "#E46B00",
        primary: "#FFFFFF",
        secondary: "#000000",
        background: "#121212",
        bgsecondary: "#1E1E1E",
        bgmenu: "#363636"
      }
    },
  },
  plugins: [],
}
