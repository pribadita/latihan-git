const express = require('express');
const { movieRouter } = require('./src/routes/movieRouter');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', movieRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});