const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20")
const User=require("../models/User")
require("dotenv").config()
passport.serializeUser((user,done)=>{
    console.log("serialize")
    done(null,user._id)
})
passport.deserializeUser(async (id,done)=>{
    let user=await User.findById({_id:id})
    console.log("deserialize")
    done(null,user)
})
passport.use(new GoogleStrategy({
    //options for google stratagy
    callbackURL: "/auth/google/redirect",
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
}, async (accessToken,refreshToken,profile,done) => {
    console.log(profile)
    // passport callback function
    console.log("profile",profile)
    let user=await User.findOne({googleId:profile.id})
    if(user)
    {
        done(null,user)
    }
    else
    {
        let newUser=new User({
            username:profile.displayName,
            googleId:profile.id,
            avatar:profile.photos[0].value
        })
        newUser.save()
        console.log(newUser)
        done(null,newUser)

    }
})
)