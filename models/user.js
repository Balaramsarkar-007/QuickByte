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
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    phoneNo : {
        type : Number,
        unquie : true,
        required : true,
        validate: {
            validator: function(v) {
                return /\d{10,12}/.test(v); 
            },
            message: props => `${props.value} is not a valid phone number!`
        },
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

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);