const mongoose = require('mongoose');

const PurchasesSchema = new mongoose.Schema({
    name:{type:String},  
    amount:{type:Number},
    price:{type:Number},
    purchaseDate:{type:Date}

    })

const Purchases = mongoose.model("Purchases", PurchasesSchema);

module.exports = Purchases;