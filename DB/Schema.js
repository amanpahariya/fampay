const db = require("mongoose");

const user = new db.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
})


const product = new db.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    quantity: {type: Number, required: true, min: 0},
})

const orderHistory = new db.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    quantity: {type: Number, required: true},
    user_id: {type: String, required: true},
    product_id: {type: String, required: true},
})

const User = db.model("User", user);
const Product = db.model("Product", product);
const OrderHistory = db.model("OrderHistory", orderHistory);

module.exports = {User, Product, OrderHistory};