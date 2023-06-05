const mongoose = require("mongoose");

const providerSchema = mongoose.Schema({
    name_provider:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Provider", providerSchema)