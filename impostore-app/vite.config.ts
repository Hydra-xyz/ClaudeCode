import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

// Deployed as a GitHub Pages project site at /ClaudeCode/.
// Override with VITE_BASE for other hosts (e.g. Vercel/Netlify serve at "/").
const base = process.env.VITE_BASE ?? '/ClaudeCode/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Impostore',
        short_name: 'Impostore',
        description:
          'Party game: 1 giocatore contro 7 bot. 6 standard conoscono la parola, 2 impostori devono bluffare. Gioca offline, senza account.',
        lang: 'it',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#0a0a12',
        theme_color: '#0a0a12',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          {
            src: 'icons/icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      },
    }),
  ],
})
