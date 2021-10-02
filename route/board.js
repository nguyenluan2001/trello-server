const BoardController = require("../controller/BoardController")
const router=require("express").Router()
router.get("/",BoardController.getBoards)
router.post("/",BoardController.create)
router.put("/:id",BoardController.updateTitle)
router.delete("/:id",BoardController.delete)
module.exports=router