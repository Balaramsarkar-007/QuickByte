if(process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const foodListing = require("./models/foodListing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flahs = require("connect-flash");
const User = require("./models/user.js");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const reviewRoute = require("./routes/review.js");
const listingsRoute = require("./routes/listings.js");
const userRoute = require("./routes/user.js");
const sellerRoute = require("./routes/seller.js");
const orderingRoute = require("./routes/ordering.js");


const dburl = process.env.ATLASBD_URL;
// const mongo_url = 'mongodb://127.0.0.1:27017/quickbyte'

const store = MongoStore.create({
    mongoUrl : dburl,
    crypto : {
        secret : process.env.SECRET,
    },
    touchAfter : 24 * 60 * 60,
})

store.on("error", (e) => {
    console.log("mongo session store error", e);
});

const sessionOps = {
    store,
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : true,
    cookie : {
        httpOnly : true,
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,
    }
}

app.use(session(sessionOps));
app.use(flahs());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy( User.authenticate()));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    res.locals.currOrderReq = User;
    next();
})


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded( {extended : true}));
app.use(methodOverride('_method'));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

app.use("/", listingsRoute);
app.use("/", reviewRoute);
app.use("/", userRoute);
app.use("/", sellerRoute);
app.use("/", orderingRoute);



main()
.then( () => {
    console.log("connection is sucessfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(dburl);
}


//index root
app.get('/', async (req, res) => {
    const foodListings = await foodListing.find().populate("review");
    res.render("listings/index.ejs", {foodListings});
})


//custom error
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "page not found"));
})
app.use((err, req, res, next) => {
    let {statusCode=400, message="Something went worng"} = err;
    res.status(statusCode).render("listings/error.ejs" ,{message});
})
// 

app.listen(8080, () => {
    console.log("app is listing at port 8080");
})