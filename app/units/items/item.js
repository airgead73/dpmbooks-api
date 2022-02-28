const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please, add a title value.']
  },
  description: {
    type: String,
    required: [true, 'Please, add a description value.']
  }  
}, {
  timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);