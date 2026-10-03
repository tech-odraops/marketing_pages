import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  envDir: fileURLToPath(new URL('.', import.meta.url)),
  plugins: [react(), VitePWA({ registerType: 'autoUpdate' })],
});
