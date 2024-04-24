import mongoose from "mongoose"

const connectMongoDb = async ()=>{
    try {
        console.log(process.env.MONGO_URI)
       await mongoose.connect(`${process.env.MONGO_URI}`,
       { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("connected to Mongo DB")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDb;