import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 8001;

app.get('/', (req, res) => {
  res.send('This is Express.js blog');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}: http://localhost:${port}`);
});
