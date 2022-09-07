const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    playerName:{
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

const Players = mongoose.model("Players", PlayerSchema);

module.exports = Players;