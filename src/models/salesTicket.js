const mongoose = require("mongoose");

const salesTicketSchema = mongoose.Schema({    
    quantity:{
        type: Number,
        required: true
    },
    total_value:{
        type: Number,
        required: true
    },
    ticket_id:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket'
    }],
    client_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }
});

module.exports = mongoose.model("Sales_Ticket", salesTicketSchema)