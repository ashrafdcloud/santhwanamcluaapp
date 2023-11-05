import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EmployeeDetail() {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        // Assuming you have an API endpoint that fetches an employee by ID
        fetch(`http://localhost:4000/employee/${id}`)
            .then(response => response.json())
            .then(data => setEmployee(data))
            .catch(error => console.error("Error fetching employee details:", error));
    }, [id]);

    if (!employee) return <p>Loading...</p>;

    return (
        <div>
            <h2>Employee Details</h2>
            <p><strong>ID:</strong> {employee._id}</p>
            <p><strong>First Name:</strong> {employee.name.first}</p>
            <p><strong>Last Name:</strong> {employee.name.last}</p>
            <p><strong>Position:</strong> {employee.position}</p>
            <p><strong>Salary:</strong> {employee.salary}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Date of Joining:</strong> {employee.dateOfJoining}</p>
            {/* Add other attributes as required */}
        </div>
    );
}

export default EmployeeDetail;