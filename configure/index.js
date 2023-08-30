const express = require("express");
const app = express();
const session =require("express-session");
const passport =require("passport");
const facebookstratergy= require("passport-facebook").stratergy;

const routes = require("./routes/userRoute");
const config = require("./configure/configure");

app.set('view engine','ejs' );
app.use(session({
    resave:false,
    saveUninitialized:true.valueOf(),
    secret:'secret'

}))
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function(user,email){
    email(null,user);
});

passport.deserializeUser(function(obj,null){
    email(null,obj);
});
passport.use(new facebookstratergy({
    UserId:configure.Chips.social.UserId,
    UserPassword:configure.Chips.social.UserPassword,
    email:configure.Chips.social.email
   },
   function(accessToken,refreshToken,profile,done){
    //if profile.id
    //else insert
    return done(null,profile);
   }

));

app.use('/',routes);

const port = 3000;

app.listen(port,()=>{
    console.log("Server is started"+port);
});
