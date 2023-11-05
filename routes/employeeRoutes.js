const express = require('express')
const router = express.Router()
const Employee = require ('../models/employee')


// POST route to add an employee
  router.post('/addEmployee', async (req,res)=>{
    //to post a new batch
    const data = req.body
    const employee = new Employee(data);
    await employee.save()
    res.status(201).json(employee)
})


  //to get all employess
router.get('/', async (req,res)=>{
    const employee= await Employee.find()
    res.status(200).json(employee)
})


// GET route to retrieve an employee by ID
router.get('/:id', async (req, res) => {
  try {
      const employee = await Employee.findById(req.params.id);
      if(!employee) return res.status(404).json({ message: 'Employee not found' });
      res.status(200).json(employee);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});



module.exports = router