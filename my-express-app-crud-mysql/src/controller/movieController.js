// let movies = [
//     {id: 1, title: "Spider-Man", year: 2002},
//     {id: 2, title: "John Wick", year: 2014},
//     {id: 3, title: "The Avengers", year: 2012},
//     {id: 4, title: "Logan", year: 2017},
// ]

// const getMovie = (req, res) => {
//     let {title} = req.query
//     console.log(title)
//     if(title == undefined){
//         title = ""
//     }
//     let result = ""
//     movies.forEach((item,index) => {
//         if(item.title.toLowerCase().includes(title.toLowerCase())){
//             result += `<H1> ${index+1}. ${item.title}. Tahun Rilis : ${item.year} </H1>`
//         }
//     })
//     res.send(result)
// }

// const getMovieById = (req, res) => {
//     let {id} = req.params
//     let result = movies.find((item) => {
//         return item.id === Number(id)
//     })
//     res.send(result.title)
// }

// const getMovieApi = (req, res) => {
//     let {title} = req.query
//     if(title == undefined){
//         title = ""
//     }
//     let result = movies.filter((item, index) => {
//         return item.title.toLowerCase().includes(title.toLowerCase())
//     })
//     res.json(result)
// }

// const getMovieByIdApi = (req, res) => {
//     let {id} = req.params
//     let result = movies.find((item) => {
//         return item.id === Number(id)
//     })
//     res.json(result)
// }

// const loggerMiddleware = (req, res, next) => {
//     console.log("Ada Request Masuk")
//     console.log(`Method : ${req.method}`)
//     console.log(`URL : ${req.url}`)
//     next()
// }

// const tokenMiddleware = (req, res, next) =>{
//     let {token} = req.query

//     if (token == 1234) {
//         next()
//     }else{
//         res.status(401).json({
//             message: "Token Tidak Valid"
//         })
//     }
// }

// const checkMovieIdMiddleware = (req, res, next) => {
//     let {id} = req.params
//     let result = movies.find((item) => {
//         return item.id === Number(id)
//     })

//     if(result){
//         next()
//     }else{
//         res.status(404).json({
//             message : "Movie tidak ditemukan"
//         })
//     }
// }

// const timeMiddleware = (req, res, next) => {
//     let time = new Date();
//     console.log(`Waktu Akses : ${time}`)
//     next()
// }

// const yearMiddleware = (req, res, next) => {
    
// }

// module.exports = 
// { 
//     getMovie, 
//     getMovieById, 
//     getMovieApi, 
//     getMovieByIdApi, 
//     loggerMiddleware,
//     tokenMiddleware,
//     checkMovieIdMiddleware,
//     timeMiddleware
// }

const connectionPool = require("../config/db.js")

const readMovie = (req, res) => {
    let queryText = "SELECT * FROM tb_movie"

    connectionPool.query(queryText, (err, data) => {
        if(err){
            console.err(err)
            return
        }

        res.json(data)
    })
}

const readMovieById = (req, res) => {
    let {id} = req.params
    let queryText = `SELECT * FROM tb_movie WHERE id_tb_movie = ${id}`

    connectionPool.query(queryText, (err, data) => {
        if(err){
            console.err(err)
            return
        }

        res.json(data)
    })
}

const createMovie = (req, res) => {
    let {title, year} = req.body
    let queryText = `INSERT INTO tb_movie(title_tb_movie, year_tb_movie)
                    VALUES ("${title}", ${year})`

    connectionPool.query(queryText, (err, data) => {
        if(err){
            console.log(err)
            return
        }
        res.json({'Message' : "Berhasil"})
    })
    
}

const updateMovie = (req, res) => {
    let {title, year} = req.body
    let {id} = req.params
    let queryText = `UPDATE tb_movie
                    SET title_tb_movie = "${title}", year_tb_movie = ${year}
                    WHERE id_tb_movie = ${id} `

    connectionPool.query(queryText, (err) => {
        if(err){
            console.log(err)
            return
        }
        res.json({'Message' : "Berhasil"})
    })
}

const deleteMovie = (req, res) => {
    let {id} = req.params
    let queryText = `DELETE FROM tb_movie WHERE id_tb_movie = ${id}`    

    connectionPool.query(queryText, (err) => {
        if(err){
            console.log(err)
            return
        }
        res.json({'Message' : "Data Berhasil Dihapus"})
    })
}

module.exports = {readMovie, readMovieById, createMovie, updateMovie, deleteMovie}





