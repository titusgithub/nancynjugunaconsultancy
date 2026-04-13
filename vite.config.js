import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/nancynjugunaconsultancy/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        videos: resolve(__dirname, 'videos.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
