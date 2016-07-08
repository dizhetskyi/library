var express = require('express');

var api = require('./api/api');
var auth = require('./api/auth/authRoutes');
var config = require('./config/config');

var app = express();

app.set('secret', 'ololotrololo');

var mongoose = require('mongoose')
mongoose.Promise = Promise;
mongoose.connect(config.db.url);


require('./middleware/appMiddleware')(app);

app.use('/api', api);
app.use('/auth', auth);

app.use(function(err, req, res, next) {

  console.log(err);
  
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token');
    return;
  }

  res.status(500).send();
});

module.exports = app;