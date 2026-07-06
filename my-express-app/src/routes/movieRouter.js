const express = require("express")
const movieRouter = express.Router()

const 
{
    getMovie, 
    getMovieById, 
    getMovieApi, 
    getMovieByIdApi, 
    loggerMiddleware,
    tokenMiddleware,
    checkMovieIdMiddleware,
    timeMiddleware
} = require("../controller/movieController.js")

movieRouter.get('/movies',getMovieApi)
movieRouter.get('/movies/:id',getMovieByIdApi)



module.exports = { movieRouter }
