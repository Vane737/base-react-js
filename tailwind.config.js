/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',  // Rutas para archivos de React
    './public/index.html',  // Para archivos HTML estáticos
    "./index.html", "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F39C12',
        secondary: '#DD4B39',
        dark: '#1E1E1E',
      },
    },
  },
  plugins: [],
}