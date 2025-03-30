const express = require("express")
const router = express.Router();

const {register,login,profile} = require("../controller/userController")

router.get('/register',register)

router.get('/login',login)

router.get('/profile',profile)

module.exports = [router]