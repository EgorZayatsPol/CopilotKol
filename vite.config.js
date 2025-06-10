import { defineConfig } from 'vite'

export default defineConfig({
  base: './',  css: {
    preprocessorOptions: {
      scss: {
        charset: false
      }
    }
  }
})
