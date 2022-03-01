const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
  lname: {
    type: String,
    required: [true, 'Please, add a last name value.']
  },
  fname: {
    type: String,
    required: [true, 'Please, add a first name value.']
  },
  living: {
    type: Boolean,
    default: true
  }  
}, {
  timestamps: true
});

module.exports = mongoose.model('Author', authorSchema);