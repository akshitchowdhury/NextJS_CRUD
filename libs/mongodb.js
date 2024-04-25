import mongoose from "mongoose"

import dotenv from 'dotenv'

dotenv.config()


const connectMongoDb = async ()=>{
    try {
        console.log(process.env.NEXT_PUBLIC_MONGO_URI)
       await mongoose.connect(`${process.env.MONGODB_URI}`,
       { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("connected to Mongo DB")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDb;