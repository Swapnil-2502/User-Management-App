const jwt = require('jsonwebtoken')
const User = require('../model/user')

//Create a middleware which can very the user if he is logged in
// So that he can access /prfile, /transactions, /wishlist pages,

const verify_token = async (req,res,next) => {

    const token = req.header('Authorization')

    if(!token){
        return res.status(401).json({ message: "No Authorization token provided" });
    }

    try{
        let payload = jwt.verify(token, process.env.JWT_SECRET)
        console.log(payload.id)

        const user_data = await User.findById(payload.id)
        req.user_data = user_data
        console.log(user_data);
        next()
    }
    catch(err){
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}

module.exports = [
    verify_token
]