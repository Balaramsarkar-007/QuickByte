const express = require("express");
const router = express.Router();
const Seller = require("../models/user.js");
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync.js");

const sellerControllers = require("../controllers/seller.js");

//signup get route
router.get("/signup/seller", (req, res) => {
    res.render("seller/signup.ejs");
});

//signup route
router.post("/signup/seller", wrapAsync(sellerControllers.signupRoute));

//login get route
router.get("/login/seller", (req, res) => {
    res.render("seller/login.ejs");
})

//login route
router.post("/login/seller", passport.authenticate("local", {failureFlash: true, failureRedirect: "/login/seller"}), wrapAsync(sellerControllers.loginRoute));

module.exports = router;