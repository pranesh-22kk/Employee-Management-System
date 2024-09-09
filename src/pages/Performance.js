import React from 'react';
import './Performance.css'; // Import the CSS file

function Performance() {
  return (
    <div className="performance-container">
      <h2 className="performance-heading">Performance Evaluation</h2>

      <div className="performance-record">
        <h4>John Doe</h4>
        <p>Goals Achieved: 5</p>
        <p>Areas of Improvement: Communication</p>
        <p>Overall Rating: Excellent</p>
      </div>

      <div className="performance-record">
        <h4>Jane Smith</h4>
        <p>Goals Achieved: 4</p>
        <p>Areas of Improvement: Time Management</p>
        <p>Overall Rating: Good</p>
      </div>

      {/* Add more performance records as needed */}
    </div>
  );
}

export default Performance;
