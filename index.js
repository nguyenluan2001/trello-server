const express=require("express")
const app=express()
const passport=require("passport")
const cookieSession=require("cookie-session")
const cors=require("cors")
const bodyParser=require("body-parser")
const database=require("./config/database")
const route = require("./route")
require("./config/passport-setup")
database.connect()
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use(bodyParser.json())
app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:["ntluan2001"]
}))
app.use(passport.initialize())
app.use(passport.session())
route(app)
const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log("server start at port 5000")
})