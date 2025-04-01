const User = require('../model/user')


const register = async (req,res) => {
    try{
        const {name,email,password} = req.body;

        const email_exists = await User.findOne({email});
       
        if(email_exists){
            return res.status(400).json({message:"Email already exists, try using different email"})
        }

        const data = await User.create({name,email,password});

        res.status(201).json({message:"User registered successfully",data})
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

        const user_exist = await User.findOne({email:email, password:password})
        if(!user_exist){
            return res.status(401).json({message: "Email or password doesn't match"});
        }

        return res.status(200).json({message: "User logged in Successfully",user_exist})
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
    
}

const profile = async (req,res) => {

    try{
        const data = await User.findOne({email: req.body.email})
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
    users
}