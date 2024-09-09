import React from 'react';
import './Recruitment.css'; // Import the CSS file

function Recruitment() {
  return (
    <div className="recruitment-container">
      <h2 className="recruitment-heading">Recruitment & Onboarding</h2>

      <div className="recruitment-record">
        <h4>John Doe</h4>
        <p>Position: Developer</p>
        <p>Status: Interview Scheduled</p>
      </div>

      <div className="recruitment-record">
        <h4>Jane Smith</h4>
        <p>Position: HR Manager</p>
        <p>Status: Offer Extended</p>
      </div>

      {/* Add more recruitment records as needed */}
    </div>
  );
}

export default Recruitment;
