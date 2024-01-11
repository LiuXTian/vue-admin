import { URL, fileURLToPath } from 'node:url'

import { mergeConfig } from 'vite'

import a from '@ml-admin/config-vite-app'

// https://vitejs.dev/config/
export default mergeConfig(a(), {
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
