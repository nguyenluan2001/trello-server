const authRouter = require("./auth")
const boardRouter=require("./board")
const passport=require("passport")
const route = (app) => {
    app.use("/auth",authRouter)
    app.use("/api/board",boardRouter)
    // app.get("/auth/google", passport.authenticate("google", {
    //     scope: ["profile"]
    // }))
    // app.get("/auth/google/redirect", passport.authenticate("google"), (req, res) => {
    //     console.log("123")
    //     res.send("hello")
    // })
}
module.exports = route