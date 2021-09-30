const mongoose=require("mongoose")
const boardSchema=mongoose.Schema({
    title:String,
    lists:Array,
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})
module.exports=mongoose.model("Board",boardSchema)