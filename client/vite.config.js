import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: process.env.SERVER_HOST
          ? `http://${process.env.SERVER_HOST}:3006`
          : 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
