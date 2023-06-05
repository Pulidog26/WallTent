const mongoose = require("mongoose");
const playSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    director:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    schedule:{
        type: String,
        required: true
    },
    summary:{
        type: String,
        required: true
    },
    play_ticket:[{type: mongoose.Schema.Types.ObjectId,
    ref: 'Ticket'}]
});
module.exports = mongoose.model("Play", playSchema);