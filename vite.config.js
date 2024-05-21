import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/Amazon-Clone/"
  
// })

export default defineConfig({
  build: {
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      external: ["@stripe/react-stripe-js"],
    },
  },
});

// export const config = {
//   build: {
//     rollupOptions: {
//       external: ['@stripe/react-stripe-js']
//     }
//   }
// };