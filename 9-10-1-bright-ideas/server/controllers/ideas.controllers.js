const Purchases = require('../models/ideas.models');

module.exports.agregar = (req, res) => {
    const {name,amount,price,purchaseDate}=req.body
    Purchases.create({
        name,
        amount,
        price,
        purchaseDate
    })
    .then((purchases) =>res.json(purchases))
    .catch(err=>res.json(err))
}

module.exports.listar = (req, res) => {
    Purchases.find({})
        .then((purchases) =>res.json(purchases))
        .catch(err=>res.json(err))
    }
    
//editar
module.exports.editar = (req, res) => {
    Autores.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then((autores) =>res.json(autores))
    .catch(err=>res.json(err))
}

//eliminar
module.exports.eliminar=(request,response)=>{
    Purchases.deleteOne({_id: request.params.id}  )
    .then(deleteConfirmation =>response.json(deleteConfirmation))
    .catch(err=>response.json(err))
}


//look up
module.exports.buscar = (req, res) => {
    Autores.findById(req.params.id)
    .then(data =>res.json({data:data}))
    .catch(err=>res.json(err))
}