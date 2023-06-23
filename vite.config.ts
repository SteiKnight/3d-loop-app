import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // For all styled components:
    // create classnames from fileName and displayName in development
    react({
      babel: {
        base: "/3d-loop-app/"
      },
    }), WindiCSS()
  ]
})
