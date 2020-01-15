import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';

const resolveConfig = resolve({
  mainFields: ['module', 'main']
});
const uglifyConfig = uglify();
export default [
  {
    input: './lib/index.js',
    output: {
      sourcemap: true,
      file: 'dist/umd/ldml-parser.js',
      format: 'umd',
      exports: 'named',
      name: 'LDMLParser'
    },
    plugins: [resolveConfig]
  },
  {
    input: './lib/index.js',
    output: {
      sourcemap: true,
      file: 'dist/umd/ldml-parser.min.js',
      format: 'umd',
      exports: 'named',
      name: 'LDMLParser'
    },
    plugins: [resolveConfig, uglifyConfig]
  }
];