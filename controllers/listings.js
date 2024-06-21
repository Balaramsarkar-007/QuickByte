const foodListing = require("../models/foodListing");
    
module.exports.index = async (req, res) => {
        const foodListings = await foodListing.find().populate("review");
        res.render("listings/listings.ejs", {foodListings});
    }

module.exports.newListing =  async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;
    console.log(url, filename);
    let foodItem = new foodListing(req.body.foodListing);
    foodItem.owner = req.user._id;
    foodItem.image.url = url;
    foodItem.image.filename = filename;
    await foodItem.save();
    req.flash("success", "new item added sucessfully");
    res.redirect("/");
}

module.exports.showRoute = async (req, res) => {
    let {id} = req.params;
    let foodDetail = await foodListing.findById(id)
    .populate({path : "review",
        populate : {
            path : "author",  
        },
    })
    .populate("owner");
    if(!foodDetail) {
        req.flash("error", "The Item you requested doesn't found");
        res.redirect("/");
    }
    res.render("listings/show.ejs", {foodDetail});
}

module.exports.destroyRoute = async (req, res) => {
    let {id} = req.params;
    await foodListing.findByIdAndDelete(id);
    req.flash("success", "Item deleted sucessfully");
    res.redirect("/");
}

module.exports.updateRoute = async (req, res) => {
    let {id} = req.params;
    let updateDetails = req.body.foodListing;
    let saveDeatilsUpdate = await foodListing.findByIdAndUpdate(id, updateDetails);
    if(typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    saveDeatilsUpdate.image = {url, filename};
    await saveDeatilsUpdate.save(); 
    }
    req.flash("success", " Item update sucessfully");
    res.redirect(`/show/${id}`);
}

module.exports.getUpdateRoute = async (req, res) => {
    let {id} = req.params;
    let foodDetail = await foodListing.findById(id);
    if(!foodDetail) {
        req.flash("error", "The Item you requested doesn't found");
        res.redirect("/");
    }
    let originalImageUrl = foodDetail.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_250/w_200")
    res.render("listings/update.ejs", {foodDetail, originalImageUrl});
}

module.exports.searchRoute =  async (req, res) => {
    const query = req.query.search;
    const foodListings = await foodListing.find({ $text: { $search: query } }).populate("review");
    res.render("listings/listings.ejs", { foodListings });
}

module.exports.snacksRoute = async (req, res) => {
    let foodListings = await foodListing.find({category : "snacks"}).populate("review");
    res.render("listings/listings.ejs", {foodListings});
}

module.exports.iceCreamRoute = async (req, res) => {
    let foodListings = await foodListing.find({category : "ice cream"}).populate("review");
    res.render("listings/listings.ejs", {foodListings});
}

module.exports.juiceRoute = async (req, res) => {
    let foodListings = await foodListing.find({category : "juice/coldDrinks"}).populate("review");
    res.render("listings/listings.ejs", {foodListings});
}
