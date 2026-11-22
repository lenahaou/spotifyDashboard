import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    // On évite le port 3000 : spotipy l'utilise comme redirect_uri pour l'authentification
    port: 5173,
  },
})
