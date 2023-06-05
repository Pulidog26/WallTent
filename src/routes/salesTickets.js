const express = require("express");
const router = express.Router();
const salesTicketSchema = require("../models/salesTicket");
const ticketSchema = require("../models/ticket");

//New salesTicket
router.post("/sales_Tickets", (req,res) => {
    const salesTickets = salesTicketSchema (req.body);
    salesTickets
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//Search salesTicket
router.get("/sales_Tickets", (req,res) => {
    salesTicketSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Search salesTicket by id
router.get("/sales_Tickets/:id", (req,res) => {
    const {id} = req.params;
    salesTicketSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Modify salesTicket by id
router.put("/sales_Tickets/:id", async (req,res) => {
    const {id} = req.params;
    const ticket = ticketSchema(req.body);
    var idTicket = null;

    const ticketSearch = await ticketSchema.findOne({title: req.body.title});
    if (!ticketSearch) {
        await ticket.save().then((dataTicket) => {
            idTicket = dataTicket._id;
        });        
    }
    else {
        idTicket = ticketSearch._id;
    }

    salesTicketSchema.updateOne({_id:id}, {
        $addToSet: {ticket_id: idTicket}
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Delete salesTicket by id
router.delete("/sales_Tickets/:id", (req,res) => {
    const {id} = req.params;
    salesTicketSchema.findOneAndDelete(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
module.exports = router;