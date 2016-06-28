var webpack = require('webpack');
var path = require('path');

var config = {
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
      }
    ]
  },
  resolve: {
    alias: {
      'shared': path.resolve(__dirname + '/app/shared'),
      'stores': path.resolve(__dirname + '/app/stores')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

module.exports = config;