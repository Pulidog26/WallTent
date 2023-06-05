const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
    university:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Student", studentSchema);