import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://greatstack:992002@cluster0.3hbfuy2.mongodb.net/FOODSITE').then(()=>console.log("db connected"));
}