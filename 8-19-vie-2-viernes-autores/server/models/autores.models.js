const mongoose = require('mongoose');

const AutoresSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:[
            true,
            "nombre es Requerido"
        ], 
        minlength:[
            3,
            "Minimo 3 letras"
        ]
}, 
    })

const Autores = mongoose.model("Autores", AutoresSchema);

module.exports = Autores;