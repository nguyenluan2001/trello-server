const mongoose=require("mongoose")
const cardSchema=mongoose.Schema({
    title:String,
    description:String,
    boardId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"board"
    },
    listId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"list"
    },
    sort:{
        type:Number
    }
})
module.exports=mongoose.model("Card",cardSchema)