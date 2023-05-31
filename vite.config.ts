// vite.config.js

import { defineConfig, loadEnv } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };
  return defineConfig({
    mode: process.env.NODE_ENV,
    base: process.env.BASE_URL,
    plugins: [
      vue(),
      eslintPlugin(),
      VueI18nPlugin({
        runtimeOnly: true,
        escapeHtml: false,
        strictMessage: true,
        include: [path.resolve(__dirname, './src/vue-i18n/locales/**')],
      }),
    ],
    build: {
      target: "es2018",
      sourcemap: process.env.NODE_ENV === "development",
      emptyOutDir: true,
      assetsInlineLimit: 0,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        css_context_logo: path.resolve(
          __dirname,
          "src",
          "assets",
          process.env.VITE_APPLICATION_LOGO_URL + ".css"
        ),
      },
    },
  });
};