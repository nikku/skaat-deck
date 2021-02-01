import { string } from 'rollup-plugin-string';

import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'commonjs',
        file: pkg.main
      },
      {
        format: 'esm',
        file: pkg.module
      }
    ],
    plugins: [
      string({
        include: "**/*.svg"
      })
    ]
  }
];