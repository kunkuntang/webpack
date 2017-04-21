require('shelljs/global')
var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.config.js')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var assetsPath = path.join('/', 'dist')

rm('-rf', assetsPath)
mkdir('-p', assetsPath)

var webpackConfig = merge(baseWebpackConfig, {
     plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        new HtmlWebpackPlugin({
            filename: 'src/home/home.html',
            template: 'src/home/home.html',
            inject: true,
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        new HtmlWebpackPlugin({
            filename: 'src/about/about.html',
            template: 'src/about/about.html',
            inject: true,
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        })
     ]
})

webpack(webpackConfig, function(err, stats) {
    if(err) throw err
})