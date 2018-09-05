import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from 'rollup-plugin-buble'; // Transpile/polyfill with reasonable browser support
import resolve from 'rollup-plugin-node-resolve';
import css from 'rollup-plugin-css-only';

export default {
    input: 'src/index.js', // Path relative to package.json
    output: {
        name: 'VueQqface',
        exports: 'named'
    },
    plugins: [
        vue({
            css: false,
        }),
        css({
            output: 'dist/vue-qqface.css'
        }),
        buble(), // Transpile to ES5
        resolve(),
    ],
};