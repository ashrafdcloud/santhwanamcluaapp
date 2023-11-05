import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudentForm({ onAddStudent, editingStudent }) {

    const [student, setStudent] = useState({
        name: '',
        fullname: '',
        place: '',
        date: '' ,
        purchasedItem :''
    });

    useEffect(() => {
        if (editingStudent) {
            setStudent(editingStudent);
        }
    }, [editingStudent]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (editingStudent) {
            try {
                const response = await axios.put(`http://localhost:4000/student/students/${editingStudent._id}`, student);
                console.log('Student updated:', response.data);
                onAddStudent(response.data); // Inform parent about the update
                setStudent({ name: '', fullname: '', place: '' }); // reset the form fields
            } catch (error) {
                console.error('There was an error updating the student:', error);
            }
        } else {
            try {
                const response = await axios.post('http://localhost:4000/student/addStudent', student);
                console.log('Student added:', response.data);
                onAddStudent(response.data); // Inform parent about the new student
                setStudent({ name: '', fullname: '', place: '' }); // reset the form fields
            } catch (error) {
                console.error('There was an error adding the student:', error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className='form-class-main'>
            <div>
                <label>Name: </label>
                <input type="text" name="name" value={student.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Full Name: </label>
                <input type="text" name="fullname" value={student.fullname} onChange={handleChange} required />
            </div>
            <div>
                <label>Place: </label>
                <input type="text" name="place" value={student.place} onChange={handleChange} required />
            </div>
            <div>
            <label>Date: </label>
            <input type="date" name="date" value={student.date} onChange={handleChange} required />
        </div>
        <div>
           
            <div>
            <label>Purchase Item: </label>
            <select name="purchasedItem" value={student.purchasedItem} onChange={handleChange} required>
                <option value="wheelchair">Wheel Chair</option>
                <option value="waterbed">Water Bed</option>
                <option value="walkingstick">Walking Stick</option>
                <option value="airbed">Air Bed</option>
                <option value="ivstand">IV Stand</option>
                <option value="oxygencylinder">Oxygen Cylinder</option>
                <option value="wheelchair">Chair</option>
            </select>
        </div>
        </div>
            <button className='btn-submit-style' type="submit">{editingStudent ? "Update Patinet" : "Add Patinet"}</button>
        </form>
    );
}

export default StudentForm;



