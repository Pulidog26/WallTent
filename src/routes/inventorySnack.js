const express = require("express");
const router = express.Router();
const inventorySnackSchema = require("../models/inventorySnack");
const snackSchema = require("../models/snack");

//New inventory snack
router.post("/inventory_Snacks", (req,res) => {
    const inventorySnack = inventorySnackSchema (req.body);
    inventorySnack
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//Search inventory snack
router.get("/inventory_Snacks", (req,res) => {
    inventorySnackSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Search inventory snack by id
router.get("/inventory_Snacks/:id", (req,res) => {
    const {id} = req.params;
    inventorySnackSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Modify inventory snack by id
router.put("/inventory_Snacks/:id", async (req,res) => {
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

    inventorySnackSchema.updateOne({_id:id}, {
        $addToSet: {snack_id: idSnack}
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Delete inventory snack by id
router.delete("/inventory_Snacks/:id", (req,res) => {
    const {id} = req.params;
    inventorySnackSchema.findOneAndDelete(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
module.exports = router;