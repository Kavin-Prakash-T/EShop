const mongoose=require("mongoose")

const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    products:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,    
                ref:"products",
                required:true
            },
            quantity:{
                type:Number,
                required:true,
                min:1,
                default:1
            }
        }
    ],
    totalAmount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:["Pending","Processing","Cancelled"],
        default:"Pending"
    }
}, { timestamps: true });

module.exports = mongoose.model("orders", orderSchema);