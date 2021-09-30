const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    username:String,
    googleId:String,
    avatar:String
})
module.exports=mongoose.model("User",userSchema)