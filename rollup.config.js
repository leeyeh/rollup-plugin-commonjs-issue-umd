import commonjs from 'rollup-plugin-commonjs';

export default {
    entry: 'index.js',
    plugins: [commonjs({
        include: ['umd.js'],
    })],
    dest: 'bundle.js',
    format: 'cjs',
};