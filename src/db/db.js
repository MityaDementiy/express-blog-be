const mongoose = require('mongoose');

const { credentials } = require('../../config');
const BlogPost = require('../models/blogPost');

const { connectionString } = credentials.mongo;

if (!connectionString) {
  console.error('Check your Mongoose configuration!');
  process.exit(1);
}

mongoose.connect(connectionString);
const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`MongoDB error: ${err}`);
  process.exit(1);
});

db.once('open', () => console.log('Connected to Mongo'));

BlogPost.find((err, blogPosts) => {
  if (err) {
    console.error(err);
    return;
  }

  if (blogPosts.length) {
    return;
  }

  new BlogPost({
    id: 1,
    name: 'Hello, World!',
    slug: 'hello-world',
    content: 'This is first test post.',
    category: 'general'
  }).save();
});

const getBlogPosts = async (options = {}) => BlogPost.find(options);

module.exports = { getBlogPosts };
