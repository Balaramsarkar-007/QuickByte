const foodListing = require("../models/foodListing");
const Order = require("../models/order.js");
const User = require("../models/user");

module.exports.getOrder = async (req, res) => {
    let {id} = req.params;
    const foodDetail = await foodListing.findById(id).populate("owner");
    res.render("../views/ordering/show.ejs", {foodDetail});
}

module.exports.newOrder = async (req, res) => {
    let {id} = req.params;
    const foodDetail = await foodListing.findById(id).populate("owner");
    const seller = await User.findById(foodDetail.owner._id);
    const currUser = await User.findById(req.user._id);
    let order = new Order();
    order.seller = foodDetail.owner._id;
    order.buyer = req.user._id;
    order.foodItem = id;
    order.orderDetails = req.body.orderDetails;
    const savedOrder = await order.save();
    currUser.orders.push(savedOrder._id);
    await currUser.save();
    seller.orderReqs.push(savedOrder._id);
    seller.newOrders++;
    const sel =  await seller.save();
    res.render("../views/ordering/confromMsg.ejs", {savedOrder});
}

module.exports.myOrder = async (req, res) => {
    let {id} = req.params;
    const user = await User.findById(id)
    .populate({
        path : "orders",
        populate : {
            path : "orderDetails",
        },
    })
    .populate({
        path : "orders",
        populate : {
            path : "buyer",
        },
    })
    .populate({
        path : "orders",
        populate : {
            path : "seller",
        },
    })
    .populate({
        path : "orders",
        populate : {
            path : "foodItem",
        },
    });
    res.render("../views/ordering/myOrder.ejs", {user});
}

module.exports.orderReq = async (req, res) => {
    let {id} = req.params;
    const seller = await User.findById(id)
    .populate({
        path : "orderReqs",
        populate : {
            path : "foodItem",
        },
    })
    .populate({
        path : "orderReqs",
        populate : {
            path : "orderDetails",
        },
    });
    seller.newOrders=0;
    await seller.save();
    res.render("../views/ordering/orderRequest.ejs", {seller});
}

module.exports.acceptOrder = async (req, res) => {
    let {sellerId, orderId} = req.params;
    const order = await Order.findById(orderId);
    order.status = "Accepted";
    const savedOrder = await order.save();
    req.flash("success", "Order accepted Successfully");
    res.redirect(`/orders/orderrequest/${sellerId}`);
}

module.exports.orderCancelBySeller = async (req, res) => {
    let {sellerId, orderId} = req.params;
    const order = await Order.findById(orderId);
    order.status = "order Cancel By Seller";
    const savedOrder = await order.save();
    req.flash("success", "Order Cancel Successfully");
    res.redirect(`/orders/orderrequest/${sellerId}`);
}

module.exports.orderCancelByUser = async (req, res) => {
    let {userId, orderId} = req.params;
    const order = await Order.findById(orderId);
    order.status = "Order Cancel By Customer";
    const savedOrder = await order.save();
    req.flash("success", "Order Cancel Successfully");
    res.redirect(`/orders/${userId}`);
}

module.exports.orderDelivered = async (req, res) => {
    let {sellerId, orderId} = req.params;
    const order = await Order.findById(orderId);
    order.status = "Order Delivered";
    const savedOrder = await order.save();
    req.flash("success", "Order Delivered Successfully");
    res.redirect(`/orders/orderrequest/${sellerId}`);
}