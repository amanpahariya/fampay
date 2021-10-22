// update product details

const {Product, User, OrderHistory} = require("../DB/Schema");
const UpdateProduct = (req, res) => {
    Product.updateOne({_id: req.body.id},
        {
            name: req.body.name,
            description: req.body.description,
            quantity: req.body.quantity
        },
        (e, _) => {
            if (!e) {
                res.status(202).json({message: "update successfully"});
            } else {
                res.status(304).send();
            }
        })
}
// buy product
const BuyProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.body.id},
        {
            $inc: {quantity: -1 * req.body.quantity},
        },
        {new: true}, (e, result) => {
            if (!e) {
                OrderHistory.insertMany({
                        name: result.name,
                        description: result.description,
                        quantity: req.body.quantity,
                        user_id: req.user.id,
                        product_id: result._id
                    }, (err, re) => {
                        if (!err) {
                            res.status(202).send();
                        } else {
                            res.status(406).send();
                        }
                    }
                )
            } else {
                res.status(406).send();
            }
        }
    )
}


module.exports = {UpdateProduct, BuyProduct};