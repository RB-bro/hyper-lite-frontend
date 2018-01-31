import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'

export default {
  input: 'app/index.jsy',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    json(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
}

