const mongoose=require("mongoose")

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected✅")
    }
    catch(err){
        console.log("Mongodb commection error❌")
        process.exit(1);
    }
}

module.exports=connectDB