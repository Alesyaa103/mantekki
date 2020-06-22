const mongoose = require('mongoose');

const Post = mongoose.Schema;
const PostSchema = new Post({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  collect: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);