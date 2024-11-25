// tailwind.config.js
module.exports = {
  content: [
    "./index.html",  // Añade aquí las rutas a todos los archivos HTML que contienen las clases de Tailwind
    "./src/**/*.{html,js}",  // Asegúrate de incluir todos los archivos que usan Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
