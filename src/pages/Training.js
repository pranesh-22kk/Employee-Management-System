import React from 'react';
import './Training.css'; // Import the CSS file

function Training() {
  return (
    <div className="training-container">
      <h2 className="training-heading">Training & Development</h2>

      <div className="training-record">
        <h4>John Doe</h4>
        <p>Training Program: React Development</p>
        <p>Status: Completed</p>
      </div>

      <div className="training-record">
        <h4>Jane Smith</h4>
        <p>Training Program: Leadership Skills</p>
        <p>Status: In Progress</p>
      </div>

      {/* Add more training records as needed */}
    </div>
  );
}

export default Training;
