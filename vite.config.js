// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import reactJsx from 'vite-plugin-react-jsx';

export default {
  // other config options
  build: {
    rollupOptions: {
      external: ['@stripe/react-stripe-js']
    }
  }
}