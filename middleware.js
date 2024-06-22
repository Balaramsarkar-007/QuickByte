const foodListing = require("./models/foodListing.js");
const ExpressError = require("./utils/ExpressError.js");
const Review = require("./models/review.js");
const {listingSchema, reviewSchema, orderSchema, userSchema, sellerSchema } = require("./Schema.js");

module.exports.isLogedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        //reditect original url
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "you must have loged in");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectURL = (req, res, next) => {
    if(req.session.redirectUrl) {
        res.locals.redirecturl = req.session.redirectUrl;
    }
    next();
}


module.exports.isOwner =  async (req, res, next) => {
    let {id} = req.params;
    const listing = await foodListing.findById(id);
    if(!listing.owner._id.equals(req.user._id)) {
        req.flash("error", "You are not the owner of this item");
        return res.redirect(`/show/${id}`);
    }
    next();
}


module.exports.validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
    if(error) {
        throw new ExpressError(400, error);
    }   
    else {
        next();
    }
}

module.exports.validateSeller = (req, res, next) => {
    let {error} = sellerSchema.validate(req.body);
    if(error) {
        throw new ExpressError(400, error);
    }   
    else {
        next();
    }
}

module.exports.validateUser = (req, res, next) => {
    let {error} = userSchema.validate(req.body);
    if(error) {
        throw new ExpressError(400, error);
    }   
    else {
        next();
    }
}

module.exports.validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error) {
        throw new ExpressError(400, error);
    }   
    else {
        next();
    }
}

module.exports.validateOrder = (req, res, next) => {
    let {error} = orderSchema.validate(req.body);
    if(error) {
        throw new ExpressError(400, error);
    }   
    else {
        next();
    }
}

module.exports.isReviewAuthor =  async (req, res, next) => {
    let {id, reviewId} = req.params;
    const review = await Review.findById(reviewId);
    if(!review.author._id.equals(req.user._id)) {
        req.flash("error", "You are not the owner of this item");
        return res.redirect(`/show/${id}`);
    }
    next();
}
