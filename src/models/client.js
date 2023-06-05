const mongoose = require("mongoose");
const clientSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    id_card:{
        type: Number,
        required: true
    },
    birthday:{
        type: String,
        required: true
    },
    member:{
        type: Boolean,
        required: true
    },
    student:{
        type: Boolean,
        required: true
    },
    client_student: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref:'student', 
        required: false 
    }
});
module.exports = mongoose.model("Client", clientSchema);