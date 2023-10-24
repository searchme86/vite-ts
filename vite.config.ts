import {defineConfig} from "vite";
import checker from "vite-plugin-checker";
import terser from "@rollup/plugin-terser";
import {resolve} from "path";
import WindiCSS from "vite-plugin-windicss";
import cssnano from "cssnano";

export default defineConfig({
  base: process.env.NODE_ENV === "development" ? "/" : "./",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo && assetInfo.name) {
            let extType = assetInfo.name.split(".").at(1);
            if (extType) {
              if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                extType = "images";
                return `assets/${extType}/[name]-[hash][extname]`;
              }
            }
          }
          return "assets/css/[name]-[hash][extname]";
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
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
    terser({
      compress: {
        drop_console: true,
      },
      mangle: {
        toplevel: true,
      },
      output: {
        beautify: false,
      },
      keep_classnames: false,
      keep_fnames: false,
    }),
    WindiCSS(),
  ],
  css: {
    postcss: {
      plugins: [cssnano()],
    },
  },
});
