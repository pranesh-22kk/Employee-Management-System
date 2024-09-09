import React, { useState } from 'react';
import UserForm from '../components/UserForm';
import './EmployeeData.css'; // Import the CSS file

function EmployeeData() {
  const [userData, setUserData] = useState([]);

  const handleFormSubmit = (data) => {
    setUserData([...userData, data]);
    // You can also send this data to a backend or save it in local storage
  };

  return (
    <div className="employee-data-container">
      <h2 className="employee-data-heading">Employee Data Management</h2>
      <UserForm onSubmit={handleFormSubmit} />

      <div className="user-data-list">
        <h3>Submitted Data:</h3>
        {userData.length === 0 ? (
          <p>No data submitted yet.</p>
        ) : (
          <ul>
            {userData.map((data, index) => (
              <li key={index}>
                <p>Name: {data.name}</p>
                <p>Email: {data.email}</p>
                <p>Position: {data.position}</p>
                <p>Status: {data.status}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default EmployeeData;
