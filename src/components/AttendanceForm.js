import React, { useState } from 'react';
import { addAttendanceRecord } from '../services/attendanceService';

const AttendanceForm = () => {
  const [attendance, setAttendance] = useState({
    employeeId: '',
    date: '',
    hoursWorked: '',
    leaveRequest: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAttendance({ ...attendance, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAttendanceRecord(attendance);
    setAttendance({ employeeId: '', date: '', hoursWorked: '', leaveRequest: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="employeeId"
        placeholder="Employee ID"
        value={attendance.employeeId}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={attendance.date}
        onChange={handleChange}
      />
      <input
        type="number"
        name="hoursWorked"
        placeholder="Hours Worked"
        value={attendance.hoursWorked}
        onChange={handleChange}
      />
      <input
        type="text"
        name="leaveRequest"
        placeholder="Leave Request"
        value={attendance.leaveRequest}
        onChange={handleChange}
      />
      <button type="submit">Save Attendance</button>
    </form>
  );
};

export default AttendanceForm;
