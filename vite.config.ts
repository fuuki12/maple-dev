import solid from "solid-start/vite";
import { defineConfig } from "vite";
import solidStyled from "vite-plugin-solid-styled";

export default defineConfig({
  base: "/docs/",
  plugins: [
    solid({
      adapter: "solid-start-static", // アダプターの名前
    }),
    solidStyled({
      filter: {
        include: "src/**/*.tsx",
        exclude: "node_modules/**/*.{ts,js}",
      },
    }),
  ],
  build: {
    minify: true, // 本番ビルドでのコード圧縮を有効にする
    assetsInlineLimit: 4096,
  },
});
