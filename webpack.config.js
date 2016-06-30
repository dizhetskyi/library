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
        test: /\.s?css$/,
        loader: 'style|css|sass'        
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