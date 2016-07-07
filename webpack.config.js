var webpack = require('webpack');
var path = require('path');

var config = {
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname + '/app'),
    'webpack-hot-middleware/client'    
  ],
  output: {
    path: path.resolve(__dirname + '/public'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  resolve: {
    alias: {
      'shared': path.resolve(__dirname + '/app/shared'),
      'stores': path.resolve(__dirname + '/app/stores'),
      'config': path.resolve(__dirname + '/app/config'),
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

module.exports = config;