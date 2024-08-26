import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import * as node_fs from "fs";

type Obj = {
  [key: string]: any
}

function get_paths_from_tsconfig() {
  const tsconfig_s = node_fs
    .readFileSync('./tsconfig.json', 'utf-8')
    .replace(/\/\/.*$/gm, '')

  const tsconfig = JSON.parse(tsconfig_s);
  const aliases: Obj = {};

  for (const [key, value] of Object.entries(tsconfig.compilerOptions.paths as Obj[])) {
    aliases[key] = path.resolve(__dirname, value[0])
  }

  return aliases
}

const currentPaths = get_paths_from_tsconfig();

const appPaths = {
  "@pages": path.resolve(__dirname, "./src/pages"),
  "@libs": path.resolve(__dirname, "./src/libs"),
  "@styles": path.resolve(__dirname, "./src/styles"),
  "@contexts": path.resolve(__dirname, "./src/contexts"),
  "@providers": path.resolve(__dirname, "./src/contexts/providers"),
  "@services": path.resolve(__dirname, "./src/services"),
  "@controllers": path.resolve(__dirname, "./src/controllers"),
  "@store": path.resolve(__dirname, "./src/store"),
  "@helpers": path.resolve(__dirname, "./src/helpers"),
  "@views": path.resolve(__dirname, "./src/views"),
  "@hooks": path.resolve(__dirname, "./src/hooks"),
  "@assets": path.resolve(__dirname, "./src/assets"),
  "@types": path.resolve(__dirname, "./src/types"),
  "@config": path.resolve(__dirname, "./src/config"),
  "@features": path.resolve(__dirname, "./src/features"),
  "@components": path.resolve(__dirname, "./src/components"),
}

const usedPaths = { ...currentPaths, ...appPaths };

export default defineConfig({
  resolve: {
    alias: usedPaths,
  },
  build: {
    target: 'esnext'
  },
  plugins: [react(), svgr()],
});