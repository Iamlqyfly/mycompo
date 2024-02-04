const postcss = require('rollup-plugin-postcss')
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

const fs = require('fs');
const pkJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

module.exports = {
  input: 'lib/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'umd',
      name: pkJson._globalName
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      name: pkJson._globalName
    }
  ],
  plugins: [
    nodeResolve(),
    postcss(),
    commonjs(),
  ]
}