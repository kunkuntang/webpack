var webpack = require('webpack')
var path=require('path');
var uglifyJsPlugin = require('uglifyjs-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

console.log(path.resolve(__dirname, 'dist'))

module.exports = {
  
  // 单文件配置
  // entry: './index.js',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './index.js'
  ],
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // publicPath: path.resolve(__dirname, 'dist'),
    filename: './dist/bundle.js'
  },
  // entry: [
  //   {
  //     bundle1: './src/js/home.js',
  //     bundle2: './src/js/about.js'
  //   },
  //   'webpack/hot/dev-server',
  //   'webpack-dev-server/client?http://localhost:8080'
  // ],
  // output: {
  //   path: __dirname + './dist',
  //   publicPath: __dirname + '/dist',
  //   filename: '[name].js'
  // },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015']
        }
      },
      { 
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        loader: 'style-loader!css-loader?root=../'
      }
    ]
  },
  plugins: [
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}