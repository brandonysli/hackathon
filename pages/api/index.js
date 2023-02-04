import express from 'express';

const app = express();

app.use('/api', (req, res) => {
  res.json('Hello World');
});

export default app;