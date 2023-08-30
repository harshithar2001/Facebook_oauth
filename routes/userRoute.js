const passport = require("passport");
const express = require("express");
var router=express.Router();

router.get('/', function(req, res) {
    res.render('pages/index.ejs');
});
/*to view profile*/
router.get('/profile',LoggedIn,function(req, res) {
    res.render('pages/','profile.ejs');
    user: req.user
});

router.get('/error',isLoggedIn,function(req, res) {
    res.render('pages/error.ejs');
});

router.get('/oauth/Chips.social',passport.authenticate('facebook',{
  scope:['public_profile','email']

}));

router.get('/logout',function(req,res){
    req.logout();
    res.render('/');
});

 function isLoggedIn(req, res,next) {
    if(req.isAuthenticated())
    return next();
res.redirect('/');

module.exports = router

 }
