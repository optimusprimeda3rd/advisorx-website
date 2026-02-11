/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // This is the 20% blue-black (Midnight)
          black: "#050810",      
          navy: "#0A1120",       // Slightly lighter blue-black for cards
          blue: "#0066FF",       // Your Logo Blue
          gray: "#94A3B8",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}   