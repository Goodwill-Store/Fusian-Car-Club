import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        //google docker network, you should be able to communicate using container names instead of IP addresses
        target: 'http://135.148.46.157:3006/', // Backend server (Node.js)
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
