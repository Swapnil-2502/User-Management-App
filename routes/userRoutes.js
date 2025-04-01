const express = require("express")
const router = express.Router();

const {register,login,profile,users} = require("../controller/userController")

router.post('/register',register)

router.get('/login',login)

router.get('/profile',profile)

router.get('/getusers',users)

module.exports = [router]