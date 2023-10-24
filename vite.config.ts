import {defineConfig} from "vite";
import checker from "vite-plugin-checker";
import WindiCSS from "vite-plugin-windicss";
import {createHtmlPlugin} from "vite-plugin-html";
import htmlPlugin from "vite-plugin-html-config";
import {resolve} from "path";
import terser from "@rollup/plugin-terser";

const metaOptions = {
  metas: [
    {
      name: "author",
      content: "페이지 작성자",
    },
    {
      name: "title",
      content: "페이지 제목",
    },
    {
      name: "keywords",
      content: "test keywords",
    },
    {
      name: "description",
      content: "페이지에 대한 요약 설명",
    },
    {
      name: "generator",
      content: "페이지 작성시 사용한 편집기",
    },
    {
      name: "subject",
      content: "사이트 주제",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
  // links: [
  //   {
  //     rel: "stylesheet",
  //     href: "./style.css",
  //   },
  //   {
  //     rel: "modulepreload",
  //     href: "https://cn.vitejs.dev/assets/guide_api-plugin.md.6884005a.lean.js",
  //   },
  // ],
};

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/vite-ts/" : "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        login: resolve(__dirname, "./src/views/login/login.html"),
        detail: resolve(__dirname, "./src/views/detail/detail.html"),
      },
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
    createHtmlPlugin({minify: true}),
    htmlPlugin(metaOptions),
  ],
  server: {
    open: true,
  },
});
