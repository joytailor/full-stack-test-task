const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const timestamp = require('../middlewares/timestamp');

const postSchema = new Schema({
  author: String,
  title: String,
  description: String,
});

postSchema.plugin(timestamp);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
