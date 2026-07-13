const express = require("express")
const movieRouter = express.Router()

const {readMovie, readMovieById, createMovie, updateMovie, deleteMovie} = require('../controller/movieController.js')
const { authJWT } = require("../middleware/auth.js")

movieRouter.get('/movie', readMovie)
movieRouter.get('/movie/:id', readMovieById)

movieRouter.post('/movie', createMovie)
movieRouter.put('/movie/:id', updateMovie)

movieRouter.delete('/movie/:id', deleteMovie)

module.exports = movieRouter