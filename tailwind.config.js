/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-overlay': 'linear-gradient(360deg, #000080 10.16%, rgba(65, 105, 225, 0) 94.07%)',
        // You can add more gradients if needed
      }
    }
  },
  plugins: [],
}
