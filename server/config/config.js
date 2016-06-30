var _ = require('lodash');

var config = {
  dev: 'development',
  port: process.env.PORT || 3334,

  db: {
    url: `mongodb://admin:cv_books_admin@ds019708.mlab.com:19708/corevalue-library`
  }
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

module.exports = config;
