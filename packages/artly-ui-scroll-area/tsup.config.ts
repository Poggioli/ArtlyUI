import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    entry: ["index.ts"],
    format: ["cjs", "esm"],
    dts: true,
    external: ["react"],
    minify: !options.watch,
  };
});
