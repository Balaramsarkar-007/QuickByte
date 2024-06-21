const { ref } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingScheme = new Schema({
    title: {
        type: String,
        require : true,
    },
    about : {
        type : String,
    },
    category : {
        type: String,
        require : true,
    },
    price : {
        type: Number,
        require : true,
    },
    image : {
        url : String,
        filename : String,},
    review : [
        {
            type : Schema.Types.ObjectId,
            ref : "Review",
        },
    ],
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User",
    }
});

listingScheme.index({ title: 'text', about: 'text' });

module.exports = mongoose.model("FoodListing", listingScheme);
