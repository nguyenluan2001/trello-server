const List=require("../models/List")
class ListController
{
    async create(req,res)
    {
        let {title,boardId}=req.body
        console.log(req.body)
        let lists=await List.find({boardId})
        let list=new List({title,boardId,sort:lists.length})
        await list.save()
        res.json({list})
    }
    async delete(req,res)
    {
        let {id}=req.params
        await List.deleteOne({_id:id})
        console.log(id)
        res.json("Delete list success")
    }
    async updateOrder(req,res)
    {
        let {lists}=req.body
        let boardId=lists[0].boardId
       for(let i=0;i<lists.length;i++)
       {
          await List.updateOne({_id:lists[i]._id},{
               sort:i
           })
       }
        
        lists=await List.find({boardId})
        res.json({lists})
    }
    async updateTitle(req,res)
    {
        let {id}=req.params
        let {title}=req.body
        await List.updateOne({_id:id},{title})
        let list=await List.findOne({_id:id})
        res.json({list})
    }
}
module.exports=new ListController()