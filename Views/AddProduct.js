const {Product} = require("../DB/Schema");

const AddProduct = (req, res) => {
    Product.insertMany({
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        user: []
    }, (e, _) => {
        if (!e) {
            res.status(201).json({message: "Added Successfully"})
        }else{
            res.status(500).send();
        }
    })
}

module.exports = AddProduct;