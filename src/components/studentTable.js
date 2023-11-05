import React, { useState, useEffect } from 'react';


function StudentTable({ students, startEdit, handleDelete ,formatDate, daysSince }) {
    return (
        <table id="customers">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Place</th>
                    <th>Address</th>
                    <th>Date</th>
                    <th>Purchased Item</th>
                    <th>Number of Days Used</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student, index) => (
                    <tr key={index}>
                        <td>{student.name}</td>
                        <td>{student.fullname}</td>
                        <td>{student.place}</td>
                        <td>{formatDate(student.date)}</td>
                        <td>{student.purchasedItem}</td>
                        <td>{daysSince(student.date)} days ago</td>
                        <td><button onClick={() => startEdit(student)}>Edit</button></td>
                        <td><button onClick={() => handleDelete(student._id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default StudentTable