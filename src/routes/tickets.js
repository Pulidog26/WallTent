const express = require("express");
const router = express.Router();
const ticketSchema = require("../models/ticket");

//New ticket
router.post("/tickets", (req, res) => {
    const ticket = ticketSchema (req.body);
    ticket
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consult document of the Ticket collection
router.get("/tickets", (req, res)=>{
    ticketSchema.find()
    .then((data) => res.json(data))
    .catch((error)=>res.json({message: error}));
});
//Consult a ticket by ID
router.get("/tickets/:id", (req, res)=>{
    const{id} = req.params;
    ticketSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error)=>res.json({message: error}));
});
//Edit ticket by ID
router.put("/tickets/:id", (req, res)=>{
    const{id} = req.params;
    const{title, schedule, price} = req.body; 
    ticketSchema.updateOne({_id:id}, {
        $set: {title, schedule, price}
    })
    .then((data) => res.json(data))
    .catch((error)=>res.json({message: error}))
});
//Delete ticket by ID
router.delete("/tickets/:id", (req, res)=>{
    const{id} = req.params;
    ticketSchema
    .findOneAndDelete({_id:id})
    .then((data) => res.json(data))
    .catch((error)=>res.json({message: error}));
});
module.exports = router;