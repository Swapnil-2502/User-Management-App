const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true //removes extra space
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true, //converts to lowercase if any
        trim: true
    },
    password:{
        type:String,
        required: true,
        minlength:3
    }
},{timestamps:true}); // Adds createdAt & updatedAt fields

module.exports = mongoose.model('User', UserSchema)

