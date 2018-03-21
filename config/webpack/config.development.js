const webpack = require('webpack')
const config = require('./config')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

config.output = {
  path: path.resolve(__dirname, '../../public/bundles'),
  filename: '[name].bundle.js',
  chunkFilename: "[name].js",
  publicPath: '/bundles/',
}

config.plugins.push(
  new ExtractTextPlugin({
    filename: 'app.bundle.css',
    allChunks: true
  }),
  new HtmlWebpackPlugin({
    filename: '../../public/index.html',
    template: 'src/assets/index.template.html',
    alwaysWriteToDisk: true, // this option was added by html-webpack-harddisk-plugin
  }),
  new HtmlWebpackPlugin({
      filename: '../../public/version.js',
      template: 'src/assets/version.template.js',
      alwaysWriteToDisk: true, // this option was added by html-webpack-harddisk-plugin
  }),
  new HtmlWebpackHarddiskPlugin()
)
module.exports = config