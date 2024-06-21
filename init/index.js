const mongoose = require("mongoose");
const Listing = require("../models/foodListing.js");
const initData = require("./data.js");



main()
.then( () => {
    console.log("connection is sucessfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/quickbyte');
}

let initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map( (obj) => ({ ...obj, owner : "665bcea21d808c24a3b94d96"}));
    await Listing.insertMany(initData.data);
    console.log("inser data in DB is sucessfull");
}

initDB();