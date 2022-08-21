const Autores = require('../models/autores.models');

module.exports.agregar = (req, res) => {
    const {nombre}=req.body
    Autores.create({
        nombre
    })
    .then((autores) =>res.json(autores))
    .catch(err=>res.json(err))
}

module.exports.listar = (req, res) => {
        Autores.find({})
        .then((autores) =>res.json(autores))
        .catch(err=>res.json(err))
    }
    
//editar
module.exports.editar = (req, res) => {
    Autores.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    .then((autores) =>res.json(autores))
    .catch(err=>res.json(err))
}

//eliminar



/* module.exports.lookUp = (req, res) => {
    Product.findById(req.params.id)
    .then(data =>res.json({data:data}))
    .catch(err=>res.json(err))
} */