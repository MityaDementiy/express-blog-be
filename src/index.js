const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT ?? 8001;

const handlers = require('./lib/handlers/handlers');

app.get('/', handlers.listBlogPosts);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}: http://localhost:${port}`);
});
