import React, { useState } from 'react';

const EmployeeForm = ({ onSave }) => {
  const [employee, setEmployee] = useState({
    name: '',
    role: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(employee);
    setEmployee({ name: '', role: '', email: '', phone: '', address: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={employee.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={employee.role}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={employee.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={employee.phone}
        onChange={handleChange}
      />
      <textarea
        name="address"
        placeholder="Address"
        value={employee.address}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EmployeeForm;
