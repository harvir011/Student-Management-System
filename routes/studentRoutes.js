const express = require('express')
const router = express.Router()

const Student = require("../models/Student")

router.get('/', async (req, res)=>{
    try{
        const students =  await Student.find();
        res.json(students)
    }catch(error){
        res.status(500).json({
            message: error.mnessage
        })
    }
})


//Add Student information (POST Route)
router.post("/", async (req, res) => {
    try {
        console.log("Request Body:", req.body);

        const student = new Student(req.body);
        const savedStudent = await student.save();

        console.log("Saved Student:", savedStudent);

        res.status(201).json(savedStudent);
    } catch (error) {
        console.error("ERROR:", error);
        res.status(500).json({
            message: error.message
        });
    }
});



//Delete Student
router.delete("/:id", async(req, res)=>{
    try{
        const deletedStudent = await Student.findByIdAndDelete(req.params.id)
         
        if(!deletedStudent){
            return res.status(404).json({
                message: "Student not found"
            })
        }
        res.json({
            message: "Student deleted successfully"
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})


//update student
router.put("/:id", async(req, res)=>{
    try{
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body,{
            new: true
        })
        if (!updatedStudent){
            return res.status(404).json({
                message: "Student not found"
            })
        }
        res.json(updatedStudent)
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router
