import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://server:3000', // Backend server (Node.js)
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
