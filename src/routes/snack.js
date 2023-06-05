const express = require("express");
const router = express.Router();
const snackSchema = require("../models/snack");

//New Snack
router.post("/snacks", (req, res) => {
    const snack = snackSchema(req.body);
    snack
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//Search snack
router.get("/snacks", (req, res) => {
    snackSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Search snack by id
router.get("/snacks/:id", (req, res) => {
    const {id} = req.params;    
    snackSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Modify snack by id
router.put("/snacks/:id", (req, res) => {
    const {id} = req.params;
    const {name, price, type} = req.body;
    snackSchema.updateOne({_id:id},{
        $set: {name, price, type}
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Delete snack by id
router.delete("/snacks/:id", (req, res) => {
    const {id} = req.params;
    snackSchema.findOneAndDelete(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
module.exports = router;