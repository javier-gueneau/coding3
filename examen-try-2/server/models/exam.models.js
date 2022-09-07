const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    pirateName:{
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

const Autores = mongoose.model("Pirates", PirateSchema);

module.exports = Autores;