const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, '../../src/index.jsx'),
    ]
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
          test: /.js?$/,
          use: ['babel-loader'],
          exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            use: 'css-loader',
            fallback: "style-loader"
        }),
      }
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '../../src'),
    ],
    extensions: ['.js', '.jsx', '.json', '.css'],
    alias: {
      react: path.resolve(__dirname, '../../node_modules', 'react'),
    },
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
}