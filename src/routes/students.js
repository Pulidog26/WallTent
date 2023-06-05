const express = require("express");
const router = express.Router();
const studentSchema = require("../models/student");

//New Student
router.post("/students", (req, res) => {
    const student = studentSchema (req.body);
    student
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consult document of the Student collection
router.get("/students", (req, res)=>{
    studentSchema.find()
    .then((data) => res.json(data))
    .catch((error)=>res.json({message: error}));
});
//Consult a student by ID
router.get("/students/:id", (req, res)=>{
    const{id} = req.params;
    studentSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error)=>res.json({message: error}));
});
//Edit student by ID
router.put("/students/:id", (req, res)=>{
    const{id} = req.params;
    const{university} = req.body; 
    studentSchema.updateOne({_id:id}, {
        $set: {university}
    })
    .then((data) => res.json(data))
    .catch((error)=>res.json({message: error}))
});
//Delete student by ID
router.delete("/students/:id", (req, res)=>{
    const{id} = req.params;
    studentSchema
    .findOneAndDelete({_id:id})
    .then((data) => res.json(data))
    .catch((error)=>res.json({message: error}));
});
module.exports = router;