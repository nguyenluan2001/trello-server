const Card=require("../models/Card")
class CardController
{
    async create(req,res)
    {
        let {title,listId,boardId}=req.body
        let cards=await Card.find({listId,boardId})
        let newCard=new Card({title,listId,boardId,sort:cards.length})
        await newCard.save()
        res.json({card:newCard})
        console.log(req.body)
    }
    async delete(req,res)
    {
        let {id}=req.params
        await Card.deleteOne({_id:id})
        res.json("Delete card ok")
    }
    async updateTitle(req,res)
    {
        let {id}=req.params
        let {title}=req.body
        await Card.updateOne({_id:id},{title})
        let card=await Card.findOne({_id:id})
        res.json({card})
    }
}
module.exports=new CardController()