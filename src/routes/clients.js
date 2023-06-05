const express = require("express");
const router = express.Router();
const clientSchema = require("../models/client");

//New Client
router.post("/clients", (req, res) => {
    const client = clientSchema (req.body);
    client
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consult document of the Client collection
router.get("/clients", (req, res)=>{
    clientSchema.find()
    .then((data) => res.json(data))
    .catch((error)=>res.json({message: error}));
});
//Consult a client by ID
router.get("/clients/:id", (req, res)=>{
    const{id} = req.params;
    clientSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error)=>res.json({message: error}));
});
//Edit client by ID
router.put("/clients/:id", (req, res)=>{
    const{id} = req.params;
    const{name, id_card, birthday, member, student} = req.body; 
    clientSchema.updateOne({_id:id}, {
        $set: {name, id_card, birthday, member, student}
    })
    .then((data) => res.json(data))
    .catch((error)=>res.json({message: error}))
});
//Delete client by ID
router.delete("/clients/:id", (req, res)=>{
    const{id} = req.params;
    clientSchema
    .findOneAndDelete({_id:id})
    .then((data) => res.json(data))
    .catch((error)=>res.json({message: error}));
});
module.exports = router;