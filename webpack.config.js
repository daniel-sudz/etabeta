const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  resolve: {
    extensions: [ '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devtool: 'sourcemap',
  plugins: [
  new CompressionPlugin()
  ],
}
