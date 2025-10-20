import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

// Vite configuration for the web‑abogado project.
// This config enables Vue support and adds PWA capabilities.
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'Estudio Jurídico Braian Geréz',
        short_name: 'Web Abogado',
        description: 'Sitio web para el Estudio Jurídico Braian Geréz especializado en accidentes laborales y enfermedades profesionales.',
        theme_color: '#0A3C6E',
        background_color: '#F5F5F5',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/assets/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/assets/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    port: 5173,
    open: true
  }
});