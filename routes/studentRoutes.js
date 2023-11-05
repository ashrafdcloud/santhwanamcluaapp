// Importing important packages
const express = require('express');
const router = express.Router()

// Student module which is required and imported
const Student = require('../models/student');

// // To Get List Of Students
// studentRoute.route('/').get(function (req, res) {
//     studentModel.find(function (err, employee) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             res.json(employee);
//         }
//     });
// });

// To Add New Student
router.post('/addStudent', async (req,res)=>{
    const data = req.body
    const studentdata = new Student(data);
    await studentdata.save()
    res.status(201).json(studentdata)
});

  
    //to delete a student base on ID

  router.delete('/students/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const student = await Student.findByIdAndDelete(id);
        if (!student) {
            return res.status(404).send({ message: 'Student not found' });
        }
        res.status(200).send({ message: 'Student deleted successfully', data: student });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting student' });
    }
});

// PUT endpoint to update a student by ID
router.put('/students/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!student) {
            return res.status(404).send();
        }
        res.send(student);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.get('/students', async (req,res)=>{
    //to get all students
    const studentdata= await Student.find()
    res.status(200).json(studentdata)
})



// // To Get Student Details By Student ID
// studentRoute.route('/editStudent/:id').get(function (req, res) {
//     let id = req.params.id;
//     studentModel.findById(id, function (err, student) {
//         res.json(employee);
//     });
// });

// // To Update The Student Details
// studentRoute.route('/updateStudent/:id').post(function (req, res) {
//     studentModel.findById(req.params.id, function (err, student) {
//         if (!student)
//             return next(new Error('Unable To Find Student With This Id'));
//         else {
//             student.firstName = req.body.firstName;
//             student.lastName = req.body.lastName;
//             student.email = req.body.email;
//             student.phone = req.body.phone;

//             student.save().then(emp => {
//                 res.json('Student Updated Successfully');
//             })
//                 .catch(err => {
//                     res.status(400).send("Unable To Update Student");
//                 });
//         }
//     });
// });

// To Delete The Student
// studentRoute.route('/deleteStudent/:id').get(function (req, res) {
//     studentModel.findByIdAndRemove({ _id: req.params.id }, function (err, student) {
//         if (err) res.json(err);
//         else res.json('Student Deleted Successfully');
//     });
// });

module.exports = router