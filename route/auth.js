const router=require("express").Router()
const passport=require("passport")
require("dotenv").config()
router.get("/checkAuth",(req,res)=>{
    res.json({user:req.user})
})
router.get("/google",passport.authenticate("google",{
    scope:["profile"]
}))
router.get("/google/redirect",passport.authenticate("google"),(req,res)=>{
    // console.log("123")
    // res.send("hello")
    res.redirect(process.env.CLIENT_URL)
})
router.get("/logout",(req,res)=>{
    req.logout()
    res.json({message:"Logout successfully"})
})
module.exports=router