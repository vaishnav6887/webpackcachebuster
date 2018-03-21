const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VersionTemplatePlugin = require('../../src/assets/version.template.js')
const path = require('path')
const config = require('./config')

config.plugins.push(
  new CleanWebpackPlugin([path.resolve(__dirname, '../../public/bundles')]),
  new ExtractTextPlugin({
      filename: 'app.bundle.[contenthash].css',
      allChunks: true
  }),
  new HtmlWebpackPlugin({
      filename: '../../public/index.html',
      template: 'src/assets/index.template.html'
  }),
  new VersionTemplatePlugin({
      url: 'app.bundle.[chunkhash]',
      path: path.resolve(__dirname, '../../public')
  })
)

config.output = {
    path: path.resolve(__dirname, '../../public/bundles'),
    filename: '[name].bundle.[chunkhash].js',
    chunkFilename: "[name].[chunkhash].js",
    publicPath: '/bundles/',
}

module.exports = config