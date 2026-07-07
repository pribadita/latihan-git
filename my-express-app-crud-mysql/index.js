const express = require('express');
const cors = require('cors')
const movieRouter  = require('./src/routes/movieRouter');
const userRouter = require('./src/routes/userRouter');
const app = express();
const port = 3000;

var corsOptions = {
origin: 'http://localhost:3000',
optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', movieRouter)
app.use('/', userRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});