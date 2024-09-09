import React from 'react';
import './Attendance.css'; // Import the CSS file

function Attendance() {
  return (
    <div className="attendance-container">
      <h2 className="attendance-heading">Attendance Management</h2>

      <div className="attendance-record">
        <h4>John Doe</h4>
        <p>Present Days: 22</p>
        <p>Absent Days: 2</p>
        <p>Leave Requests: 1</p>
      </div>

      <div className="attendance-record">
        <h4>Jane Smith</h4>
        <p>Present Days: 20</p>
        <p>Absent Days: 4</p>
        <p>Leave Requests: 2</p>
      </div>

      {/* Add more attendance records as needed */}
    </div>
  );
}

export default Attendance;
