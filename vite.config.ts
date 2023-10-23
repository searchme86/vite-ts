import {defineConfig} from "vite";
import checker from "vite-plugin-checker";
import {resolve} from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@script": resolve(__dirname, "src/scripts/"),
      "@assets": resolve(__dirname, "src/assets/"),
      "@images": resolve(__dirname, "src/assets/images/"),
    },
  },
  plugins: [
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.ts"',
      },
    }),
  ],
});
