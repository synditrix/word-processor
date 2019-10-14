const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Input = new Schema({
  input_text: {
    type: String,
  },
  input_output: {
    type: Object,
  },
});

module.exports = mongoose.model('Input', Input);
