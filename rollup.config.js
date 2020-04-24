import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'js/main.js',
  output: {
    file: 'dist/bundle.js',
    name: 'LOL2D',
    format: 'iife',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
};
