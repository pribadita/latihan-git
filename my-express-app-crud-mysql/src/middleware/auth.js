const jwt = require('jsonwebtoken')
const { authPlugins } = require('mysql2')
require('dotenv').config()

const authJWT = (req, res, next) => {
    const authHeader = req.header('Authorization')
    console.log(authHeader)
    if(!authHeader){
        res.setHeader('WWW-Authenticate','bearer')

        return res.status(401).json({
            Status : "Ditolak",
            Message : "Anda belum login nih"
        })
    }

    // console.log(authHeader)
    const token = authHeader.split(" ")[1]
    // console.log(token)
    if(!token){
        return res.status(401).json({
            Status : "Ditolak",
            Message : "Format token yang input salah 'Bearer <token>'"
        })
    }

    // console.log(process.env.JWT_SECRET)
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err){
            return res.status(401).json({
                Status : "Ditolak",
                Message : "Invalid Tokenn oi"
            })
        }else{
        req.user = user
        console.log(user)

        next()
        }
    })

}

module.exports = {authJWT}