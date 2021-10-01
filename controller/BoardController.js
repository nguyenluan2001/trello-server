const Board = require("../models/Board")
class BoardController {
    async getBoards(req, res) {
        // let boards=await Board.find({userID:req.user._id}).populate("")
        // let boards=await Board.aggregate([
        //     {
        //         $match:{userID:req.user._id}
        //     },
        //     {
        //         $lookup:{
        //             from:"lists",
        //             // localField:"_id",
        //             // foreignField:"boardId",
        //             let:{'id':'$_id'},
        //             pipeline:[
        //                { $match : { '$expr': { '$eq': [ '$boardId', '$$id' ] } }},
        //                 {
        //                     $sort:{"sort":1}
        //                 }
        //             ],
        //             as:"lists"
        //         }
        //     }
        // ])
        let boards = await Board.aggregate([
            {
                $match: { userID: req.user._id }
            },
            {
                $lookup: {
                    from: "lists",
                    // localField:"_id",
                    // foreignField:"boardId",
                    let: { 'id': '$_id' },
                    pipeline: [
                        { $match: { '$expr': { '$eq': ['$boardId', '$$id'] } } },
                        {
                            $sort: { "sort": 1 }
                        },
                        {
                            $lookup: {
                                from: 'cards',
                                let: { listId: '$_id' },
                                pipeline: [{ $match: { $expr: { $eq: ['$listId', '$$listId'] } } }],
                                as: 'cards',
                            },
                        },
                    ],
                    as: "lists"
                }
            }
           
        ])
        res.json({ boards })
    }
    async create(req, res) {
        let { title } = req.body
        const board = new Board({
            title,
            userID: req.user._id
        })
        await board.save()
        res.json({ board })
    }
}
module.exports = new BoardController()