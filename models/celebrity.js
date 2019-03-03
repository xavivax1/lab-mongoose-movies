'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    default: 'Unknown',
    required: false
  },
  catchPhrase: {
    type: String,
    required: true
  }

});

const Celebrity = mongoose.model('Movie', celebritySchema);

module.exports = Celebrity;
