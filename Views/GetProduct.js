const {Product, OrderHistory} = require("../DB/Schema");

// fetch all product
const GetProduct = (req, res) => {
    Product.find({}, {_id: 1, name: 1, description: 1, quantity: 1}, (e, result) => {
        if (!e) {
            res.send(result);
        } else {
            res.status(405).send();
        }
    })
}

// fetch all product who are purchase by user
const UserProduct = (req, res) => {
    OrderHistory.find({user_id: req.user.id}, (e, result) => {
        if (!e) {
            res.send(result);
        } else {
            res.status(405).send();
        }
    })
}
// get all the user who purchase the product
const ProductByUser = (req, res) => {
    OrderHistory.find({product_id: req.body.id}, (e, result) => {
        if (!e) {
            res.send(result);
        } else {
            res.status(405).send();
        }
    })
}


module.exports = {GetProduct, UserProduct, ProductByUser};