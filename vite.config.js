import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    minify: 'terser',      // 기본 minifier인 'esbuild' 대신 'terser' 사용
    terserOptions: {
      format: {
        comments: false,   // 모든 주석 제거
      },
    },
  },
})

