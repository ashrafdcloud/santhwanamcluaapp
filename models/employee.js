const mongoose = require('mongoose');

// Creating schema

const employeeSchema = new mongoose.Schema({
    name: {
      first: {
        type: String,
        required: true
      },
      last: {
        type: String,
        required: true
      }
    },
    employeeID: {
      type: Number,
      required: true,
      unique: true
    },
    position: {
      type: String,
      required: true
    },
    department: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    dateOfJoining: {
      type: Date,
      default: Date.now
    },
    salary: {
      type: Number,
      required: true
    }
  });


   //creating model
   const Employee = mongoose.model('Employee', employeeSchema);



module.exports = Employee;