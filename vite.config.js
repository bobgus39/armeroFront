import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Raíz: es lo correcto para el dev server y para Vercel.
  // GitHub Pages sirve bajo /armeroFront/, así que ese caso lo cubre
  // `npm run build:pages`, que pasa --base y sobrescribe esto.
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
