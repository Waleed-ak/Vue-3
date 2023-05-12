import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import compression from "vite-plugin-compression";

const plugins = [vue(), compression()];

function MyDefineConfig() {
  return defineConfig({
    plugins,
  });
}
// https://vitejs.dev/config/
export { MyDefineConfig };
