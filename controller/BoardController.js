const Board = require("../models/Board")
class BoardController {
    async getBoards(req, res) {
        let boards=await Board.find({userID:req.user._id})
        res.json({boards})
    }
    async create(req, res) {
        let { title } = req.body
        const board = new Board({
            title,
            userID:req.user._id
        })
        await board.save()
        res.json({ board })
    }
}
module.exports = new BoardController()