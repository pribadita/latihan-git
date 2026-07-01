const express = require('express');
const app = express();
const port = 3000;

let movies = [
    {id: 1, title: "Spider-Man", year: 2002},
    {id: 2, title: "John Wick", year: 2014},
    {id: 3, title: "The Avengers", year: 2012},
    {id: 4, title: "Logan", year: 2017},
]

const getMovie = (req, res) => {
    let {title} = req.query
    console.log(title)
    if(title == undefined){
        title = ""
    }
    let result = ""
    movies.forEach((item,index) => {
        if(item.title.toLowerCase().includes(title.toLowerCase())){
            result += `<H1> ${index+1}. ${item.title}. Tahun Rilis : ${item.year} </H1>`
        }
    })
    res.send(result)
}

const getMovieById = (req, res) => {
    let {id} = req.params
    let result = movies.find((item) => {
        return item.id === Number(id)
    })
    res.send(result.title)
}

const getMovieApi = (req, res) => {
    let {title} = req.query
    console.log(title)
    if(title == undefined){
        title = ""
    }
    let result = movies.filter((item, index) => {
        return item.title.toLowerCase().includes(title.toLowerCase())
    })
    res.json(result)
}

const getMovieByIdApi = (req, res) => {
    let {id} = req.params
    let result = movies.find((item) => {
        return item.id === Number(id)
    })
    res.json(result)
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/movies', getMovie)
app.get('/movies/:id', getMovieById)

app.get('/api/movies', getMovieApi)
app.get('/api/movies/:id', getMovieByIdApi)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});