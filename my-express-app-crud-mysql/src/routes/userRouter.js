const express = require("express")
const { login, register } = require("../controller/userController")
const userRouter = express.Router()


userRouter.get('/login', login)
userRouter.post('/register', register)

module.exports = userRouter