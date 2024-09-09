import React from 'react';
import './Compliance.css'; // Import the CSS file

function Compliance() {
  return (
    <div className="compliance-container">
      <h2 className="compliance-heading">Compliance & Reporting</h2>

      <div className="compliance-record">
        <h4>John Doe</h4>
        <p>Compliance Status: Compliant</p>
        <p>Report Generated: Quarterly</p>
      </div>

      <div className="compliance-record">
        <h4>Jane Smith</h4>
        <p>Compliance Status: Non-Compliant</p>
        <p>Report Generated: Monthly</p>
      </div>

      {/* Add more compliance records as needed */}
    </div>
  );
}

export default Compliance;
