const express = require("express")
const mongoose = require("mongoose")
const route = require('./src/route/route')

const app = express()

app.use(express.json())


mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://viHaAn:vihaan@cluster0.tznueha.mongodb.net/Post_Comment",
{useNewUrlParser: true}  )


.then(()=>console.log("MongoDB is Connected"))
.catch((error)=>console.log(error))

app.use("/",route)


app.listen(3000 , ()=>{console.log("Express App is running on PORT "+ 3000 )})