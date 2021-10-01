const mongoose=require("mongoose")
const listSchema=mongoose.Schema({
    title:String,
    boardId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"board"
    },
    sort:{
        type:Number
    }
})
module.exports=mongoose.model("List",listSchema)