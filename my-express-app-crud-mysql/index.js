// require('dotenv').config()
const express = require('express');
const movieRouter  = require('./src/routes/movieRouter');
const app = express();
const port = 3000;

app.use(express.json())
app.use('/api', movieRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});