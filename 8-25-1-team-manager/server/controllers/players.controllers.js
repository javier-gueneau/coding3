const Players = require('../models/players.models');

module.exports.create = (req, res) => {
    const {playerName}=req.body
    Players.create({
        playerName
    })
    .then((players) =>res.json(players))
    .catch(err=>res.json(err))
}

/* 
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
} */