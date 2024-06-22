const Seller = require("../models/user.js");

module.exports.signupRoute = async (req, res) => {
    try {
    let {username, phoneNo, email, shopeName, password} = req.body.seller;
    const newSeller = new Seller({username, phoneNo, email, shopeName});
    const registeredSeller = await Seller.register(newSeller, password);
    req.login(registeredSeller, (err) => {
        if (err) {
            req.flash("error", err.message);
            return res.redirect("/signup/seller");
        }
        req.flash("success", "Welcome to QuickByte");
        res.redirect("/");
    });
    }
    catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup/seller"); 
    }
}

module.exports.loginRoute = async (req, res) => {
    req.flash("success", "Welcome back");
    res.redirect("/");  
}