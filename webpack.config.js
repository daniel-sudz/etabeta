const CompressionPlugin = require('compression-webpack-plugin')
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = { 
  //target: 'node', // in order to ignore built-in modules like path, fs, etc. 
  //externals: [nodeExternals()], // in order to ignore all modules in node_modules folder 
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      //load svg resource files
      {
        test: /\.svg$/,
        loader: 'file-loader'
      },
      // javascript = babel + uglify
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/, ///(node_modules|bower_components)/, //'/node_modules/core-js/',
        use: [{ loader: "babel-loader" }]
      },

      // css file: extract to css file with mini extract plugin
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
}, 


  // plugin
  plugins: [
    new CompressionPlugin(),
    //new HtmlWebpackPlugin(), // Generates default index.html
	new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'calendar.html',
      template: './src/calendar.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`,  { nodir: true }),
    }),
	//new BundleAnalyzerPlugin(),
  ]
};
