const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT ?? 8001;

const handlers = require('./src/lib/handlers/handlers');

app.use(express.static(path.join(__dirname, '..', '/public')));
app.get('/', handlers.listBlogPosts);

app.listen(port, () => {
  const destination = process.env.NODE_ENV !== 'production' ? 'http://localhost:5001' : 'https://express-blog-be.onrender.com/';
  // eslint-disable-next-line no-console
  console.log(`Server listening on ${destination}`);
});
