const mongoose = require('mongoose');

const bookAuthorSchema = {
  name: String
};

module.exports = mongoose.model('BookAuthor', bookAuthorSchema);
