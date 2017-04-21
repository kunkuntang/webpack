var webpack = require('webpack')
var path=require('path');
var uglifyJsPlugin = require('uglifyjs-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

console.log(path.resolve(__dirname, 'dist'))

module.exports = {
    entry: 
    {
      index: './index.js',
      home: './src/home/js/home.js',
      about: './src/about/js/about.js'
    }
  ,
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',   //在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015']
        }
      },
      { 
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
      }
    ]
  },
  plugins: [
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
    // new OpenBrowserPlugin({
    //   url: 'http://localhost:8080'
    // })
  ]
}