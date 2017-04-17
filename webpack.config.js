var path=require('path');

console.log(path)
module.exports = {
  /*
  // 单文件配置
  entry: './index.js',
  output: {
    filename: './dist/js/bundle.js'
  }
  */
  entry: {
    bundle1: './src/js/home.js',
    bundle2: './src/js/about.js'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}