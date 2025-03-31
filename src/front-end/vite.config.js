import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 30003,
    host: true,
    strictPort: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:30002',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    hmr: {
      overlay: true
    },
    // Add server startup logging
    onBeforeMiddleware(server) {
      console.log('🚀 Starting development server...')
      console.log(`📁 Project root: ${server.config.root}`)
    },
    onAfterMiddleware(server) {
      console.log('🔌 Middleware setup complete')
    }
  },
  logLevel: 'info'
})
