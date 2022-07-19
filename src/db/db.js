const mongoose = require('mongoose');

const { credentials } = require('../../config');

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

const getBlogPosts = async (options = {}) => {
  const blogPosts = [
    {
      id: 1,
      name: 'Hello, World',
      slug: 'hello-world',
      content: 'This is first test post.',
      category: 'general'
    }
  ];

  return blogPosts;
};

module.exports = { getBlogPosts };
