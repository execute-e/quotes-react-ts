/*eslint-disable*/ 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// @ts-ignore
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/todo-react-ts/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // @ts-ignore
      '@': path.resolve(__dirname, './src')
    }
  }
})