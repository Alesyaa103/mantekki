const mongoose = require('mongoose');

const Head = mongoose.Schema;
const HeadSchema = new Head({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  purpose: {
    type: String,
    required: true
  }

}, {
  timestamps: true,
});

module.exports = mongoose.model('Head', HeadSchema);