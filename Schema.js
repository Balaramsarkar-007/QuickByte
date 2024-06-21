const joi = require("joi");

module.exports.listingSchema = joi.object({
    foodListing : joi.object({
        title : joi.string().required(),
        about : joi.string().required(),
        category : joi.string().required(),
        price : joi.number().required().min(0),
    }).required(),
});


module.exports.reviewSchema = joi.object({
    review : joi.object({
        rating : joi.number().required().min(1).max(5).required(),
        comment : joi.string().required(),
    }).required(),
});

module.exports.orderSchema = joi.object({
    orderDetails : joi.object({
        quintity : joi.number().required().default(1),
        price : joi.number().required(),
        customise : joi.string(),
        address : joi.string().required(),
        paymentMode : joi.string().required()
    }).required(),
});