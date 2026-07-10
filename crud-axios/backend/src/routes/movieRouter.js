const express = require("express")
const movieRouter = express.Router()

// const 
// {
//     getMovie, 
//     getMovieById, 
//     getMovieApi, 
//     getMovieByIdApi, 
//     loggerMiddleware,
//     tokenMiddleware,
//     checkMovieIdMiddleware,
//     timeMiddleware
// } = require("../controller/movieController.js")

// movieRouter.get('/movies',getMovieApi)
// movieRouter.get('/movies/:id',getMovieByIdApi)

const {readMovie, readMovieById, createMovie, updateMovie, deleteMovie} = require('../controller/movieController.js')
const { authJWT } = require("../middleware/auth.js")

movieRouter.get('/movie', authJWT, readMovie)
movieRouter.get('/movie/:id', readMovieById)

movieRouter.post('/movie', createMovie)
movieRouter.put('/movie/:id', updateMovie)

movieRouter.delete('/movie/:id', deleteMovie)




module.exports = movieRouter
