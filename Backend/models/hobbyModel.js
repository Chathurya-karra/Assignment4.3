const mongoose = require('mongoose');

const hobbySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Hobby = mongoose.model('Hobby', hobbySchema);

module.exports = Hobby;
