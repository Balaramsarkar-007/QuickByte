const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
    seller : {
        type : Schema.Types.ObjectId,
        ref : "User",
    },
    buyer : {   
        type : Schema.Types.ObjectId,
        ref : "User",
    },
    foodItem : {
        type : Schema.Types.ObjectId,
        ref : "FoodListing",
    },
    orderDetails : {
        quintity : {
            type : Number,
            default : 1,
            required : true,
        },
        price : {
            type : Number,
            required : true,
        },
        customise : String,
        address : String,
        paymentMode : String,
    },
    status : {
        type : String,
        default : "Pending",
    },
    createdAt : {
        type : Date,
        default : Date.now(),
    }, 
});

module.exports = mongoose.model("Order", orderSchema);