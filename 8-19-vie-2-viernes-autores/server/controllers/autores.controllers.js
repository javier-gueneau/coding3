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
    Autores.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then((autores) =>res.json(autores))
    .catch(err=>res.json(err))
}

//eliminar
module.exports.eliminar=(request,response)=>{
    Autores.deleteOne({_id: request.params.id}  )
    .then(deleteConfirmation =>response.json(deleteConfirmation))
    .catch(err=>response.json(err))
}


//look up
module.exports.buscar = (req, res) => {
    Autores.findById(req.params.id)
    .then(data =>res.json({data:data}))
    .catch(err=>res.json(err))
}