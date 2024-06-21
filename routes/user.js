const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectURL} = require("../middleware.js");

const userController = require("../controllers/user.js");

//signup get rout
router.get("/signup", (req, res) => {
    res.render("user/signup.ejs");
});

//signup route
router.post("/signup", wrapAsync(userController.signupRoute));

//login get route
router.get("/login", (req, res) => {
    res.render("user/login.ejs");
})
  
//login route
router.post("/login", saveRedirectURL, passport.authenticate("local", {failureFlash : true, failureRedirect : "/login"}), wrapAsync(userController.loginRoute));


//logout route
router.get("/logout", (req, res, next) => {
  req.logOut((err) => {
    if(err) {
      return next(err);
    }
    req.flash("success", "You have successfully loged out");
    res.redirect("/");    
  });
})

module.exports = router;
