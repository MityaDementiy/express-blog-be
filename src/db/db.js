/* eslint-disable no-console */
const mongoose = require('mongoose');

const BlogPost = require('../models/blogPost');

const connectionString = process.env.CONNECTION_STING;

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

// eslint-disable-next-line array-callback-return
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
    category: 'general',
  }).save();
});

const getBlogPosts = async (options = {}) => BlogPost.find(options);

module.exports = { getBlogPosts };
