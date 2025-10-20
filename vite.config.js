import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // IMPORTANT: set base to '/REPO_NAME/' in GitHub Pages. The workflow sets it automatically via env if needed.
  base: process.env.GITHUB_REPOSITORY ? '/' + process.env.GITHUB_REPOSITORY.split('/')[1] + '/' : '/'
})
