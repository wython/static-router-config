import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'umd',
      file: pkg.browser,
      name: pkg.browser
    },
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript()
  ],
  external: ['react', 'react-router-dom'],
}
