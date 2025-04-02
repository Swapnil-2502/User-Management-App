const express = require("express")
const router = express.Router();
const verify_token = require('../middleware/verify')
const {register,login,profile,users, transactions, wishlist} = require("../controller/userController")

router.post('/register',register)
router.get('/login',login)

router.get('/profile',verify_token,profile)
router.get('/transactions', verify_token ,transactions)
router.get('/wishlist',verify_token,wishlist)
router.get('/getusers',users)

module.exports = [router]