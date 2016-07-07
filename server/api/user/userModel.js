var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  login: String,
  password: String
}, {
  collection: 'users'
});

module.exports = mongoose.model('User', userSchema);
