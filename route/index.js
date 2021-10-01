const authRouter = require("./auth")
const boardRouter=require("./board")
const listRouter=require("./list")
const cardRouter=require("./card")
const passport=require("passport")
const route = (app) => {
    app.use("/auth",authRouter)
    app.use("/api/board",boardRouter)
    app.use("/api/list",listRouter)
    app.use("/api/card",cardRouter)
    // app.get("/auth/google", passport.authenticate("google", {
    //     scope: ["profile"]
    // }))
    // app.get("/auth/google/redirect", passport.authenticate("google"), (req, res) => {
    //     console.log("123")
    //     res.send("hello")
    // })
}
module.exports = route