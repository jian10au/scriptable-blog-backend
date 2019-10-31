const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({
  title: String,
  content: String
}, {timestamps: true});

const Post = mongoose.model('Post', postsSchema);

module.exports = Post;