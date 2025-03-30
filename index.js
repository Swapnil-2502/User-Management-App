const express = require("express");
const dotenv = require("dotenv")
dotenv.config()

const userRouter = require("./routes/userRoutes.js")

const app = express();

const PORT = process.env.PORT

app.use("/api/user",userRouter);

app.get("/",(req,res)=>{
    res.send("This is the Home Page")
})

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`)
})