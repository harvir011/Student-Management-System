const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose') 
require('dotenv').config()


const path = require("path")

//importing routes
const studentRoutes = require("./routes/studentRoutes")

const app = express()
const PORT = process.env.PORT || 4000;


//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
app.use("/api/students", studentRoutes)

app.get('/', (req, res)=>{
    res.send("Student Dashboard is running")
})

//Mongodb connection
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB is connected successfully")
}).catch((error)=>{
    console.log(error.message)
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})