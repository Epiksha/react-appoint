import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import scss from "rollup-plugin-scss";
import svgr from "@svgr/rollup";
import typescript from "@rollup/plugin-typescript";
import url from "@rollup/plugin-url";

const packageJson = require("./package.json");

export default {
    input: "src/index.ts",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        svgr(),
        url(),
        resolve(),
        commonjs(),
        scss({
            fileName: "bundle.css",
            outputStyle: "compressed",
        }),
        typescript({
            tsconfig: "./tsconfig.json",
        }),
    ],
};