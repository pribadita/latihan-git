const express = require('express');
const cors = require('cors')
const movieRouter  = require('./src/routes/movieRouter');
const app = express();
const port = 5000;

var corsOptions = {
origin: 'http://localhost:3000',
optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', movieRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});