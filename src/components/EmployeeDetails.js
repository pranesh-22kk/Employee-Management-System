import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEmployeeById } from '../services/employeeService';

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      const data = await getEmployeeById(id);
      setEmployee(data);
    };
    fetchEmployee();
  }, [id]);

  if (!employee) return <div>Loading...</div>;

  return (
    <div>
      <h2>{employee.name}</h2>
      <p>Role: {employee.role}</p>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      <p>Address: {employee.address}</p>
    </div>
  );
};

export default EmployeeDetails;
