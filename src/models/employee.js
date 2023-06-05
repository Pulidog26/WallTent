const mongoose = require("mongoose");
const employeeSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    id_card:{
        type: Number,
        required: true
    },
    workstation:{
        type: String,
        required: true
    },
    birthday:{
        type: String,
        required: true
    },
    admission_date:{
        type: String,
        required: true
    },
    dismissal_date:{
        type: String,
        required: true
    },
});
module.exports = mongoose.model("Employee", employeeSchema)