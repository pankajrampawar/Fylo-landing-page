/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        VDB: 'hsl(243, 87%, 12%)',
        DB: 'hsl(238, 22%, 44%)',
        BB: 'hsl(224, 93%, 58%)',
        MC: 'hsl(170, 45%, 43%)',
        LGB: 'hsl(240, 75%, 98%)',
        LG: 'hsl(0, 0%, 75%)',
      }
    },
  },
  plugins: [],
}

