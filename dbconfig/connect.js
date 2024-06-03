const mongoose=require("mongoose")

require("dotenv").config()

async function Connect(){
    try {
        const db=process.env.MONGO_URL
        await mongoose.connect(db)
    } catch (error) {
        console.log("Cannot Connect",error)
    }
}

module.exports= Connect
