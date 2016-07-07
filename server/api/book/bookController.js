var _ = require('lodash');

var Book = require('mongoose').model('Book');

exports.get = function(req, res, next) {
  Book.find({})
    .exec()
    .then(function(books){
      res.json(books);
    }, function(err){
      next(err);
    });
};

exports.getOne = function(req, res, next) {
  Book.findById(req.params.id)
    .populate('authors')
    .populate('tags')
    .exec()
    .then(function(book){
      res.json(book);
    }, function(err) {
      next(err);
    })
};