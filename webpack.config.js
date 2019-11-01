const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

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
	new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'calendar.html',
      template: './src/calendar.html'
    }),
	new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'history.html',
      template: './src/history.html'
    }),
  new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'donations.html',
      template: './src/donations.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    //new PurgecssPlugin({ 
    //  paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`,  { nodir: true }), //Purgecss is great but it treeshakes some necessary items like bootbox alert boxes
    //}),
	
	new UglifyJsPlugin({
                sourceMap: true,
                uglifyOptions: {
                    dead_code: true
                }
            }),
	
	new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        // In case you imported plugins individually, you must also require them here:
        Util: "exports-loader?Util!bootstrap/js/dist/util",
        Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      }),
	
	//new BundleAnalyzerPlugin(),
  ]
};
