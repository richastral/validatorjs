import { uglify } from 'rollup-plugin-uglify';

export default {
  input: './src/validator.js',
  plugins: [uglify()],
  output: {
    file: './dist/validator.js',
    format: 'umd'
  }
};
