var Book = require('./bookModel');
var _ = require('lodash');

exports.get = function(req, res, next) {
  Book.find({})
    .exec()
    .then(function(books){
      res.json(books);
    }, function(err){
      next(err);
    });
};