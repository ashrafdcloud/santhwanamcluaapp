import React, { useState, useEffect } from 'react';
import Employee from './Employee';
import EmployeeDetail from './EmployeeDetail';
import { fetchEmployees } from '.././api';
import { Link } from 'react-router-dom';

function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(() => {
        fetchEmployees()
            .then(data => setEmployees(data))
            .catch(error => console.error("Error fetching employees:", error));
    }, [employees]);

    return (
        <div className='employeelist'>
            <h1>Employee List</h1>
            <ul>
            {employees.map(employee => (
                <li key={employee._id}>
                    <Link to={`/employee/${employee._id}`}>
                        <Employee employee={employee} />
                    </Link>
                </li>
            ))}
        </ul>

            {selectedEmployee && <EmployeeDetail employee={selectedEmployee} />}
        </div>
    );
}

export default EmployeeList;