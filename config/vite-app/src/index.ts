import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default () => defineConfig({
  server: {
    proxy: {
      '/api': {
        // 代理地址
        target: 'http://110.41.161.81/',
        // 重写地址
        rewrite: path => path.replace(/^\/api\//, ''),
        // 开启代理在本地创建一个服务器
        changeOrigin: true,
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
