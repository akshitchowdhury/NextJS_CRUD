import mongoose from "mongoose"

import dotenv from 'dotenv'

dotenv.config()


const connectMongoDb = async ()=>{
    try {
        console.log(process.env.MONGO_URI)
       await mongoose.connect("mongodb+srv://akshitchowdhury:akshitchowdhury@cluster0.ywftldt.mongodb.net/next_crud_db",
       { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("connected to Mongo DB")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDb;