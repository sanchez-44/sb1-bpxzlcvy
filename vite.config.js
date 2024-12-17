import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  server: {
    port: 5173,
    open: true
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@styles': resolve(__dirname, './styles'),
      '@utils': resolve(__dirname, './js/utils'),
      '@modules': resolve(__dirname, './js/modules')
    }
  }
});