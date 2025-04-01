const express = require("express");
const dotenv = require("dotenv")
const {connectMongoDB} = require("./config/database.js")
dotenv.config()

const userRouter = require("./routes/userRoutes.js")

const app = express();

connectMongoDB(process.env.MONGODB_URL)

const PORT = process.env.PORT

//middleware to parse data to JSON
app.use(express.json())

app.use("/api/user",userRouter);

app.get("/",(req,res)=>{
    res.send("This is the Home Page")
})

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`)
})