const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, validateReview, isReviewAuthor } = require("../middleware.js");

const reviewControllers = require("../controllers/review.js");

//review rout
router.post("/:id/review", validateReview, wrapAsync(reviewControllers.reviewRoute));

//review delete rout
router.delete("/:id/review/:reviewId", isReviewAuthor, wrapAsync(reviewControllers.destroyRoute));

module.exports = router;    