const connectionPool = require("../config/db")
const bcrypt = require('bcrypt')

const login = (req, res) => {
    res.send("Ini Halaman Login")
}

const register = (req, res) => {
    let {email, nama, pass} = req.body
     let queryText = `SELECT * FROM tb_user WHERE email_tb_user = '${email}'`

    connectionPool.query(queryText, (err, result) => {
        if(err){
            console.error(err)
            return res.status(500).json({
                status:"Failed",
                message : err.message
            })
        }

        bcrypt.hash(pass, 10, (err, hashedPassword) => {
        if(err){
            console.error(err)
                return res.status(500).json({
                    status:"Failed",
                    message : err.message
                })
            }

        let insertQuery = `INSERT INTO tb_user(email_tb_user, name_tb_user, pass_tb_user)
                            VALUES("${email}", "${nama}", "${hashedPassword}")`
        
        connectionPool.query(insertQuery, (err, result) => {
            if(err){
                console.error(err)
                return res.status(500).json({
                status:"Failed",
                message : err.message
            })
            }
            res.status(200)
            res.json({message : "User berhasil dibuat",
                    status: "Success",
                    result : result
            })
        })
        })
    })
    
}

module.exports = {login, register}