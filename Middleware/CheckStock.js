const {Product} = require("../DB/Schema");
const CheckStock = (req, res, next) => {
    Product.find({_id: req.body.id}, (e, r) => {
        if (!e) {
            if (r[0].quantity > 0 && r[0].quantity >= req.body.quantity) {
                next();
            } else {
                res.status(303).json({message: "Out of Stock"});
            }
        } else {
            res.status(406).send();
        }
    })
}

module.exports = CheckStock;