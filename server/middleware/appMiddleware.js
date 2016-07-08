var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var override = require('method-override');
// setup global middleware here

module.exports = function(app) {
  // app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(override());
  app.use((req, res, next) => {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    req.token = token;
    next();
  })
};
