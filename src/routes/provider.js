const express = require("express");
const router = express.Router();
const providerSchema = require("../models/provider");

//New provider
router.post("/providers", (req,res) => {
    const provider = providerSchema (req.body);
    provider
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//Search provider
router.get("/providers", (req,res) => {
    providerSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Search provider by id
router.get("/providers/:id", (req,res) => {
    const {id} = req.params;
    providerSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Modify provider by id
router.put("/providers/:id", (req,res) => {
    const {id} = req.params;
    const {name_provider, link} = req.body;
    providerSchema.updateOne({_id:id}, {
        $set: {name_provider, link}
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));    
});

//Delete provider by id
router.delete("/providers/:id", (req,re) => {
    const {id} = req.params;
    providerSchema.findOneAndDelete(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
module.exports = router;