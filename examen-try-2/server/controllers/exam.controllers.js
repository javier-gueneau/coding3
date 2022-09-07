const Autores = require('../models/exam.models');

module.exports.add = (req, res) => {
    const {nombre}=req.body
    Autores.create({
        nombre
    })
    .then((autores) =>res.json(autores))
    .catch(err=>res.json(err))
}

module.exports.list = (req, res) => {
        Autores.find({})
        .then((autores) =>res.json(autores))
        .catch(err=>res.json(err))
    }
    
//editar
module.exports.update = (req, res) => {
    Autores.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then((autores) =>res.json(autores))
    .catch(err=>res.json(err))
}

//eliminar
module.exports.delete=(request,response)=>{
    Autores.deleteOne({_id: request.params.id}  )
    .then(deleteConfirmation =>response.json(deleteConfirmation))
    .catch(err=>response.json(err))
}


//look up
module.exports.lookUp = (req, res) => {
    Autores.findById(req.params.id)
    .then(data =>res.json({data:data}))
    .catch(err=>res.json(err))
}