const mongoose = require('mongoose');

const bookTagSchema = {
  label: String
};

module.exports = mongoose.model('BookTag', bookTagSchema);
