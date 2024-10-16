import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,          // Enables Vitest's global API
    environment: 'jsdom',   // Simulate browser environment
    setupFiles: './src/setupTests.js',
    include: ['**/*.test.{js,jsx}'],
      // Run setup files before each test
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
