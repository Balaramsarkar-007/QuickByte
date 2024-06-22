const User = require("../models/user.js");

module.exports.signupRoute = async (req, res) => {
  try {
   let {username, phoneNo, email, password} = req.body.user;
   let newUser = new User({username, phoneNo, email});
   let registerUser = await User.register(newUser, password);
   req.login(registerUser, (err) => {
     if(err) {
       return next(err);
     }
     req.flash("success", "Welcome to QuickByte");
     res.redirect("/");
   });
   
  }
  catch(e) {
   req.flash("error", e.message);
   res.redirect("/signup");
  }
}

module.exports.loginRoute = async (req, res) => {
    console.log(req.body)
    req.flash("success", "Welcome back");
    const redirectUrl = res.locals.redirecturl || "/";
    res.redirect(redirectUrl);;
} 
