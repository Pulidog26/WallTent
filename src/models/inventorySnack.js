const mongoose = require("mongoose");

const inventorySnackSchema = mongoose.Schema({
    snack_id:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Snack',
        required: false
    }],
    quantity:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    }    
});

module.exports = mongoose.model("Inventory_Snack", inventorySnackSchema)