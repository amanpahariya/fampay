const {RegisterUser, Login} = require("../Views/User");
const {UpdateProduct, BuyProduct} = require("../Views/Product");
const {GetProduct, UserProduct, ProductByUser} = require("../Views/GetProduct");
const route = require("express").Router();


route.post("/add-product", require("../Middleware/VerifyUser"), require("../Views/AddProduct"));
route.put("/update-product", require("../Middleware/VerifyUser"), UpdateProduct);
route.post("/buy-product", require("../Middleware/VerifyUser"), require("../Middleware/CheckStock"), BuyProduct);
route.get("/get-product", require("../Middleware/VerifyUser"), GetProduct);
route.get("/my-orders", require("../Middleware/VerifyUser"), UserProduct);
route.get("/product-by", require("../Middleware/VerifyUser"), ProductByUser);
route.post("/register", RegisterUser);
route.post("/login", Login);


module.exports = route;

