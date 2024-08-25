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

export default defineConfig({
  resolve: {
    alias: get_paths_from_tsconfig(),
  },
  plugins: [react(), svgr()],
});