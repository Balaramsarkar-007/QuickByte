const express = require("express");
const router = express.Router();
const foodListing = require("../models/foodListing.js");
const User = require("../models/user.js");
const Order = require("../models/order.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLogedIn, isOwner, validateOrder} = require("../middleware.js");

const orderControllers = require("../controllers/ordering.js");

//get order
router.get("/order/:id", isLogedIn, wrapAsync(orderControllers.getOrder));

//new order
router.post("/order/confrom/:id",isLogedIn,  wrapAsync(orderControllers.newOrder));

//my orders
router.get("/orders/:id",isLogedIn, wrapAsync(orderControllers.myOrder));

//orders request
router.get("/orders/orderrequest/:id", isLogedIn, wrapAsync(orderControllers.orderReq));

//accept order 
router.get("/order/:sellerId/accept/:orderId", isLogedIn, wrapAsync(orderControllers.acceptOrder));

//cancel order by seller
router.get("/order/:sellerId/cancel/:orderId", isLogedIn, wrapAsync(orderControllers.orderCancelBySeller));

//cancel order by user
router.get("/orders/:userId/cancel/:orderId", isLogedIn, wrapAsync(orderControllers.orderCancelByUser));

//order delivered
router.get("/order/:sellerId/delivered/:orderId", isLogedIn, wrapAsync(orderControllers.orderDelivered));

module.exports = router;