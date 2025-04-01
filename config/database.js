const mongoose = require("mongoose");



async function connectMongoDB(url){
    return mongoose.connect(url)
        .then(()=>console.log("Connected to MongoDB Server"))
        .catch((err)=>console.log("Internal server error",err.message))
}

module.exports = {
    connectMongoDB
}

// async function connectMongoDB(url){
//     try {
//         await mongoose.connect(url);
//         console.log("Connected to MongoDB Server");
//     } catch (err) {
//         console.log("Internal server error", err.message);
//     }
// }