// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ssgPlugin } from 'vite-ssg';

export default defineConfig({
  plugins: [
    react(),
    ssgPlugin()
  ],
  build: {
    outDir: 'dist'
  }
});