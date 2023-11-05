const mongoose = require('mongoose');

// Creating schema
const studentSchema = new mongoose.Schema({
    name: String,
    fullname: String,
    place: String,
    date: {
        type: Date,
        default: Date.now  // this sets the default value to the current date/time
    },
    purchasedItem: String,
    imageURL: String 
});

// Creating model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;