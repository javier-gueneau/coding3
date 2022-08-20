const Product = require('../models/product.module');

module.exports.createProduct = (req, res) => {
    const {title,price,description}=req.body
    Product.create({
        title,
        price,
        description
    })
    .then((product) =>res.json(product))
    .catch(err=>res.json(err))
}

module.exports.listProduct = (req, res) => {
        const {title,price,description}=req.body
        Product.find({})
        .then((product) =>res.json(product))
        .catch(err=>res.json(err))
    }
    
module.exports.lookUp = (req, res) => {
    Product.findById(req.params.id)
    .then(data =>res.json({data:data}))
    .catch(err=>res.json(err))
}