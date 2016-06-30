var express = require('express');

var api = require('./api/api');
var config = require('./config/config');

var app = express();

require('mongoose').connect(config.db.url);

require('./middleware/appMiddleware')(app);

app.use('/api', api);

app.use(function(err, req, res, next) {
  
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token');
    return;
  }

  console.log('oops err', err);
  res.status(500).send('Oops');
});

module.exports = app;