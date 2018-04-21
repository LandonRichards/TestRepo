var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  origin: String,
  name: String,
  difficulty: String,
  guide: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', BookSchema);
