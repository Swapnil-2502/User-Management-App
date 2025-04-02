const User = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (req,res) => {
    try{
        const {name,email,password} = req.body;

        const email_exists = await User.findOne({email});
       
        if(email_exists){
            return res.status(400).json({message:"Email already exists, try using different email"})
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,salt)

        const data = await User.create({name,email,password:hash});

        let payload = {id: data.id}

        // Synchronous way to sign a token
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2m' });


        res.status(201).json({message:"User registered successfully",data,token})
    }
    catch(err){
        res.status(500).json({messageerr: err.message});
    }
    
}

//Get all users
const users = async (req,res)=>{
    try{
        const data = await User.find({});
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

const login = async(req,res) => {
    try{
        const {email, password} = req.body;

        const user_exist = await User.findOne({email:email})
        if(!user_exist){
            return res.status(401).json({message: "User not found"});
        }

        const isPasswordValid = await bcrypt.compare(password,user_exist.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        let payload = {id: user_exist.id}
        const token = jwt.sign(payload, process.env.JWT_SECRET,{expiresIn:'2m'})

        return res.status(200).json({message: "User logged in Successfully",token,user:user_exist})
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
    
}

const profile = async (req,res) => {
    try{
        //const data = await User.findOne({email: req.body.email})
        const data = req.user_data
        console.log(data)
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

const transactions = async (req,res) => {
    try{
        //const data = await User.findOne({email: req.body.email})
        const data = req.user_data
        console.log(data)
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

const wishlist = async (req,res) => {
    try{
        //const data = await User.findOne({email: req.body.email})
        const data = req.user_data
        console.log(data)
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    register,
    login,
    profile,
    users,
    transactions,
    wishlist
}