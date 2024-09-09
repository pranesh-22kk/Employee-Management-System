import React, { useState } from 'react';
import { updateEmployeeSelfService } from '../services/selfServiceService';

const SelfServiceForm = () => {
  const [selfService, setSelfService] = useState({
    employeeId: '',
    newInfo: '',
    leaveRequest: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelfService({ ...selfService, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployeeSelfService(selfService);
    setSelfService({ employeeId: '', newInfo: '', leaveRequest: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="employeeId"
        placeholder="Employee ID"
        value={selfService.employeeId}
        onChange={handleChange}
      />
      <input
        type="text"
        name="newInfo"
        placeholder="Update Info"
        value={selfService.newInfo}
        onChange={handleChange}
      />
      <input
        type="text"
        name="leaveRequest"
        placeholder="Leave Request"
        value={selfService.leaveRequest}
        onChange={handleChange}
      />
      <button type="submit">Update Info</button>
    </form>
  );
};

export default SelfServiceForm;
