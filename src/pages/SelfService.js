import React from 'react';
import './SelfService.css'; // Import the CSS file

function SelfService() {
  return (
    <div className="self-service-container">
      <h2 className="self-service-heading">Employee Self-Service</h2>

      <div className="self-service-record">
        <h4>John Doe</h4>
        <p>Personal Info: Updated</p>
        <p>Leave Request: Approved</p>
      </div>

      <div className="self-service-record">
        <h4>Jane Smith</h4>
        <p>Personal Info: Not Updated</p>
        <p>Leave Request: Pending</p>
      </div>

      {/* Add more self-service records as needed */}
    </div>
  );
}

export default SelfService;
