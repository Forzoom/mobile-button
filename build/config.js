// config.js
const commonjs = require('rollup-plugin-commonjs');
// const resolve = require('rollup-plugin-node-resolve');
const { babel, getBabelOutputPlugin } = require('@rollup/plugin-babel');
// const alias = require('rollup-plugin-alias');
// const vue = require('rollup-plugin-vue');
const path = require('path');

const extensions = [ '.ts', '.js', '.vue' ];

module.exports = exports = [
    {
        input: './src/mobile-button.js',
        output: {
            file: './dist/mobile-button.esm.js',
            format: 'esm',
        },
        // 将部分依赖作为外置内容
        external: [ 'core-js', 'vue' ],
        plugins: [
            // alias({
            //     entries: [
            //         { find: '@', replacement: path.join(__dirname, '../src') }
            //     ],
            // }),
            // resolve({
            //     extensions,
            // }),
            // vue(),
            commonjs(),
            babel({
                // exclude: 'node_modules/**',
                extensions,
            }),
            getBabelOutputPlugin({
                filename: './dist/**',
                // configFile: './babel.config.js',
                presets: [
                    "@babel/preset-env"
                ],
                plugins: [
                    [ "@babel/plugin-proposal-decorators", { legacy: true } ],
                    [ "@babel/plugin-proposal-class-properties" ]
                ]
            }),
        ],
    },
    {
        input: './src/mobile-button.js',
        output: {
            file: './dist/mobile-button.cjs.js',
            format: 'cjs',
        },
        external: [ 'core-js', 'vue' ],
        plugins: [
            // resolve({
            //     extensions,
            // }),
            // alias({
            //     entries: [
            //         { find: '@', replacement: path.join(__dirname, '../src') }
            //     ],
            // }),
            // vue(),
            commonjs(),
            babel({
                // exclude: 'node_modules/**',
                extensions,
            }),
            getBabelOutputPlugin({
                filename: './dist/**',
                // configFile: './babel.config.js',
                presets: [
                    "@babel/preset-env"
                ],
                plugins: [
                    [ "@babel/plugin-proposal-decorators", { legacy: true } ],
                    [ "@babel/plugin-proposal-class-properties" ]
                ]
            }),
        ],
    },
    // @rollup/plugin-babel的支持存在问题
    // Error: Using Babel on the generated chunks is strongly discouraged for formats other than "esm" or "cjs" as it can easily break wrapper code and lead to accidentally created global variables. Instead, you should set "output.format" to "esm" and use Babel to transform to another format, e.g. by adding "presets: [['@babel/env', { modules: 'umd' }]]" to your Babel options. If you still want to proceed, add "allowAllFormats: true" to your plugin options.
    // 暂时不确定怎么做会比较好
    // {
    //     input: './src/index.js',
    //     output: {
    //         file: './dist/mobile-button.umd.js',
    //         name: 'FormRenderer',
    //         format: 'umd',
    //     },
    //     external: [ 'core-js', 'vue' ],
    //     plugins: [
    //         resolve({
    //             extensions,
    //         }),
    //         alias({
    //             entries: [
    //                 { find: '@', replacement: path.join(__dirname, '../src') }
    //             ],
    //         }),
    //         vue(),
    //         commonjs(),
    //         babel({
    //             // exclude: 'node_modules/**',
    //             extensions,
    //         }),
    //         getBabelOutputPlugin({
    //             filename: './dist/**',
    //             // configFile: './babel.config.js',
    //             presets: [
    //                 "@babel/preset-env"
    //             ],
    //             plugins: [
    //                 [ "@babel/plugin-proposal-decorators", { legacy: true } ],
    //                 [ "@babel/plugin-proposal-class-properties" ]
    //             ]
    //         }),
    //     ],
    // },
];