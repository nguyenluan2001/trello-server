const CardController = require("../controller/CardController")
const router=require("express").Router()
router.post("/",CardController.create)
router.delete("/:id",CardController.delete)
router.put("/:id",CardController.updateTitle)
router.post("/updateOrderCard",CardController.updateOrder)
module.exports=router