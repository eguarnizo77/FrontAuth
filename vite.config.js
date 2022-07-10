import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { viteStaticCopy } from 'vite-plugin-static-copy'


export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*{js,css,html,ico,png,svg}']
      },  
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'assets/iconx512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }    
    }),    
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/img/iconx512.png',
          dest: 'assets'
        },
        {
          src: 'src/assets/img/iconx128.png',
          dest: 'assets'
        },
        {
          src:  'manifest.json',
          dest: ''
        }
      ]
    })
  ]
})