const express = require("express");
const router = express.Router();
const foodListing = require("../models/foodListing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLogedIn, isOwner, validateListing} = require("../middleware.js");
const listingsController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

// Search route
router.get('/search', wrapAsync(listingsController.searchRoute));

//sncaks route
router.get("/foodlistings/snacks", listingsController.snacksRoute);

//ice cream route
router.get("/foodlistings/ice-cream", listingsController.iceCreamRoute);

//juice route
router.get("/foodlistings/juice", listingsController.juiceRoute);

//update rout  
router.get("/update/:id", isLogedIn, isOwner, wrapAsync(listingsController.getUpdateRoute));

//update route
router.put("/update/:id", isLogedIn, isOwner,upload.single('foodListing[image]'), validateListing, wrapAsync (listingsController.updateRoute));


//destry rout
router.delete("/delete/:id", isLogedIn , isOwner, wrapAsync(listingsController.destroyRoute));

//show rout
router.get("/show/:id", wrapAsync (listingsController.showRoute));

// new item
router.post("/quickbyte/new",isLogedIn, upload.single('foodListing[image]') , validateListing, wrapAsync(listingsController.newListing));

//index rout
router.get('/listings', wrapAsync(listingsController.index));

router.get("/new", isLogedIn, (req, res) => {
    res.render("listings/new.ejs");
});

module.exports = router;