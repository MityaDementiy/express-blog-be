const express = require('express');
const dotenv = require('dotenv');

const { getBlogPosts } = require('./db/db');

dotenv.config();

const app = express();
const port = process.env.PORT ?? 8001;

app.get('/', async (req, res) => {
  const currentBlogPosts = await getBlogPosts();
  res.send(currentBlogPosts);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}: http://localhost:${port}`);
});
