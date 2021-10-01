const ListController = require("../controller/ListController")

const router=require("express").Router()
router.post("/",ListController.create)
router.put("/:id",ListController.updateTitle)
router.delete("/:id",ListController.delete)
router.post("/updateOrderList",ListController.updateOrder)
module.exports=router