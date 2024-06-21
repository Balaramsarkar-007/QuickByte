const foodListing = require("../models/foodListing");
const Review = require("../models/review");

module.exports.reviewRoute = async(req, res) => {
    let {id} = req.params;
    let foodItem = await foodListing.findById(id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    foodItem.review.push(newReview);
    await newReview.save();
    await foodItem.save();
    req.flash("success", "new review added sucessfully");
    res.redirect(`/show/${id}`);
}

module.exports.destroyRoute = async (req, res) => {
    let {id, reviewId} = req.params;
    await foodListing.findByIdAndUpdate(id, {$pull: {review: reviewId}});
    await Review.findByIdAndDelete(reviewId);  
    console.log("review deleted"); 
    req.flash("success", "Review deleted sucessfully");
    res.redirect(`/show/${id}`);    
}