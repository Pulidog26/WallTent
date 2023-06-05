const express = require("express");
const router = express.Router();
const salesSnackSchema = require("../models/salesSnack");
const snackSchema = require("../models/snack");

//New salesSnack
router.post("/sales_Snacks", (req,res) => {
    const salesSnack = salesSnackSchema (req.body);
    salesSnack
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//Search salesSnack
router.get("/sales_Snacks", (req,res) => {
    salesSnackSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});

//Search salesSnack by id
router.get("/sales_Snacks/:id", (req,res) => {
    const {id} = req.params;
    salesSnackSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Modify salesSnack by id
router.put("/sales_Snacks/:id", async (req,res) => {
    const {id} = req.params;
    const snack = snackSchema(req.body)
    var idSnack = null;

    const snackSearch = await snackSchema.findOne({name: req.body.name})
    if (!snackSearch) {
        await snack.save().then((dataSnack) => {
            idSnack = dataSnack._id;
        });        
    }
    else {
        idSnack = snackSearch._id;
    }

    salesSnackSchema.updateOne({_id:id}, {
        $addToSet: {snack_id: idSnack}
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Delete salesSnack by id
router.delete("/sales_Snacks/:id", (req,res) => {
    const {id} = req.params;
    salesSnackSchema.findOneAndDelete(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
module.exports = router;