 import express from "express"
 import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

 //app config
 const app=express()
 const port=4000
  
 //middleware req from frontend to backend pass through json
 app.use(express.json())
 app.use(cors())
//db connection
connectDB();
//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

 app.get("/",(req,res)=>
{
    res.send("API working")
})


//to run express server
app.listen(port,()=>
{
    console.log(`Server started on http://localhost:${port}`)
})
//mongodb+srv://greatstack:992002@cluster0.3hbfuy2.mongodb.net/?