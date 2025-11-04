import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
=======
import taileindcss from "@tailwindcss/vite"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), taileindcss()],
>>>>>>> c7ac541 (commit all)
})
