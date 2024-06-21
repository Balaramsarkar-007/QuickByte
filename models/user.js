const { required, ref } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const order = require("./order");

const userSchema = new Schema ({
    email : {
        type : String,
        unquie : true,
        required : true,
    },
    phoneNo : {
        type : Number,
        min : 10,
        unquie : true,
        required : true
    },
    shopeName :{
            type : String,
            unquie : true,
    },
    orders : [
        {
            type : Schema.Types.ObjectId,
            ref : "Order",
        }
    ],
    orderReqs : [
        {
            type : Schema.Types.ObjectId,
            ref : "Order",
        },
    ],
    newOrders : {
        type : Number,
        default : 0,
    }
});

userSchema.plugin(passportLocalMongoose,{usernameUnique :false});

module.exports = mongoose.model("User", userSchema);