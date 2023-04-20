const express = require('express');

const initMongo = require('./MongoDb')
const userRouter = require("./Routes/HitChikerUserRoutes")
require('dotenv').config()



initMongo(process.env.MONGOURI)


const app = express()
const PORT = process.env.PORT 

// use middleware
app.use(express.json());

// register course routes
app.use("/users", userRouter);


// welcome route
app.get("/", (req, res) => {
    res.status(200).json({
        success : true,
        message: "Welcome To HitChikker Backend",
        data : {}
    })
})


app.listen(PORT, () => {
    console.log(`APP is running at ${PORT}`)
})