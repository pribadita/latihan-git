const mysql = require("mysql2")
require('dotenv').config()

const connectionPool = mysql.createPool({
    host : process.env.DB_HOST ,
    user : process.env.DB_USER ,
    password : process.env.DB_PASS,
    database : process.env.DB_DATABASE,
    port : process.env.DB_PORT
});

connectionPool.getConnection((err) => {
    if(err){
        throw err
    }
})

module.exports =  connectionPool