const mongoose = require('mongoose');

const blogPostSchema = mongoose.Schema({
  id: Number,
  name: String,
  slug: String,
  content: String,
  category: String,
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);
module.exports = BlogPost;
