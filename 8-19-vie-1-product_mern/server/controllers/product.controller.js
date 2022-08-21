const Product = require('../models/product.module');

// (Products) - Crear.
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

// (products) - Listar.
module.exports.listProduct = (req, res) => {
        const {title,price,description}=req.body
        Product.find({})
        .then((product) =>res.json(product))
        .catch(err=>res.json(err))
    }
    
//(products)- lookup - Buscar.
module.exports.lookUp = (req, res) => {
    Product.findById(req.params.id)
    .then(data =>res.json({data:data}))
    .catch(err=>res.json(err))
}

// (Products) - Delete - Eliminar.
module.exports.delete=(request,response)=>{
    Product.deleteOne({_id: request.params.id}  )
    .then(deleteConfirmation =>response.json(deleteConfirmation))
    .catch(err=>response.json(err))
}

//Update - Actualizar - :)  
module.exports.update=(request,response)=>{
    Product.findOneAndUpdate({_id: request.params.id},request.body,{new:true})
    .then(update =>response.json(update))
    .catch(err=>response.json(err))
}