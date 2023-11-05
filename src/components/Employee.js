import React from 'react';

const Employee = ({ employee }) => (
  <li key={employee._id}>
    {employee.name.first} {employee.name.last} - {employee.position} in {employee.department}
  </li>
);

export default Employee;