const express = require("express");
const router = express.Router();
const employeeSchema = require("../models/employee");

//New Employee
router.post("/employees", (req, res) => {
    const employee = employeeSchema (req.body);
    employee
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consult document of the Employee collection
router.get("/employees", (req, res)=>{
    employeeSchema.find()
    .then((data) => res.json(data))
    .catch((error)=>res.json({message: error}));
});
//Consult a employee by ID
router.get("/employees/:id", (req, res)=>{
    const{id} = req.params;
    employeeSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error)=>res.json({message: error}));
});
//Edit employee by ID
router.put("/employees/:id", (req, res)=>{
    const{id} = req.params;
    const{name, id_card, birthday, member, student} = req.body; 
    employeeSchema.updateOne({_id:id}, {
        $set: {name, id_card, birthday, member, student}
    })
    .then((data) => res.json(data))
    .catch((error)=>res.json({message: error}))
});
//Delete employee by ID
router.delete("/employees/:id", (req, res)=>{
    const{id} = req.params;
    employeeSchema
    .findOneAndDelete({_id:id})
    .then((data) => res.json(data))
    .catch((error)=>res.json({message: error}));
});
module.exports = router;