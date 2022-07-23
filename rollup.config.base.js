import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: "src/index.ts",
    output: [
        {
            dir: "dist",
            format: "esm",
            entryFileNames: "[name].esm.js",
        },
        {
            dir: "dist",
            format: "umd",
            entryFileNames: "[name].umd.js",
            name: "index.umd.js",
        },
        {
            dir: "dist",
            format: "cjs",
            entryFileNames: "[name].cjs.js",
        },
    ],
    plugins: [resolve(), commonjs(), typescript()],
};
