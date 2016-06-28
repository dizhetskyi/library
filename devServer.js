var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

const app = express();
const port = 3000;

const compiler = webpack(config);

app.use(express.static(__dirname + '/public'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/app.html')
})

app.listen(port, () => {
  console.log('served on http://localhost:%s', port);
})