const mongoose = require("mongoose");

const salesSnackSchema = mongoose.Schema({
    quantity:{
        type: Number,
        required: true
    },
    total_value:{
        type: Number,
        required: true
    },
    date_order:{
        type: String,
        required: true
    },
    //FK snack id
    snack_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Snack',
        required: false
    }],
    //Fk client id
    client_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }
});

module.exports = mongoose.model("Sales_Snack", salesSnackSchema)