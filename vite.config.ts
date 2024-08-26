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

function mergeObjectsWithLists(obj1, obj2) {
  // Iterate over keys in obj2
  for (const key in obj2) {
      if (obj2.hasOwnProperty(key)) {
          if (obj1.hasOwnProperty(key)) {
              // If the key exists in both, merge the arrays
              obj1[key] = Array.from(new Set([...obj1[key], ...obj2[key]]));
          } else {
              // If the key is missing in obj1, add it
              obj1[key] = obj2[key];
          }
      }
  }
  return obj1;
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

const usedPaths =  mergeObjectsWithLists(appPaths, currentPaths);

export default defineConfig({
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@libs": path.resolve(__dirname, "./src/libs"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@providers": path.resolve(__dirname, "./src/contexts/providers/index"),
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
    },
  },
  build: {
    target: 'esnext'
  },
  plugins: [react(), svgr()],
});