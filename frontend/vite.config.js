import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:5000',
                changeOrigin: true,
            },
        },
    },
    define: {
        // Production API URL will be set via environment variable
        __API_URL__: JSON.stringify(process.env.VITE_API_URL || '/api')
    }
})
