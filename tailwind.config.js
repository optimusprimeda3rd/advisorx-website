/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#050810",      
          navy: "#0A1120",       
          blue: "#0066FF",       
          gray: "#94A3B8",       
          lightBg: "#F8FAFC",    
        }
      },
      borderRadius: {
        'premium': '16px',       
      }
    },
  },
  plugins: [],
}