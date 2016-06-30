var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  title: String,
  description: String,
  cover: String,
  // authors: [{type: Schema.ObjectId, ref: 'BookAuthor', default: []}],
  // tags: [{type: Schema.ObjectId, ref: 'BookTag', default: []}],
  category: Number,
  date: String,
  current_reader: String
}, {
  collection: 'books'
});

module.exports = mongoose.model('Book', bookSchema);
