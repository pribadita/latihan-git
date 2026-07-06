const express = require("express")
const userRouter = express.Router()

userRouter.get('/login', login)
userRouter.get('/register', register)

module.exports = userRouter
