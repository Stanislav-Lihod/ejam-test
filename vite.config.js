import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: './src/assets/images/*',
    //       dest: 'src/assets/images'
    //     }
    //   ]
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    assetsDir: "./src/assets/"
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "@/assets/media.less";
          @import "@/assets/colors.less";
        `,
      },
    },
  },
})
