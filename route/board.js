const BoardController = require("../controller/BoardController")
const router=require("express").Router()
router.get("/",BoardController.getBoards)
router.post("/",BoardController.create)
module.exports=router