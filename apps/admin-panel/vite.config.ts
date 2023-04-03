import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias:
    {
      '@uiKits': path.resolve(__dirname, './src/uiKits'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@icons': path.resolve(__dirname, './src/assets/icons'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@services': path.resolve(__dirname, './src/services'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@models': path.resolve(__dirname, './src/models'),
      '@store': path.resolve(__dirname, './src/store'),
      '@config': path.resolve(__dirname, './src/config'),
      '@api': path.resolve(__dirname, './src/api'),
      '@slices': path.resolve(__dirname, './src/slices'),
      '@formValidations': path.resolve(__dirname, './src/formValidations'),
    }
  },

});
