import React from 'react';
import './Payroll.css'; // Import the CSS file

function Payroll() {
  return (
    <div className="payroll-container">
      <h2 className="payroll-heading">Payroll Management</h2>

      <div className="payroll-record">
        <h4>John Doe</h4>
        <p>Base Salary: $5000</p>
        <p>Bonuses: $500</p>
        <p>Deductions: $200</p>
        <p>Total Salary: $5300</p>
      </div>

      <div className="payroll-record">
        <h4>Jane Smith</h4>
        <p>Base Salary: $4500</p>
        <p>Bonuses: $300</p>
        <p>Deductions: $150</p>
        <p>Total Salary: $4650</p>
      </div>

      {/* Add more payroll records as needed */}
    </div>
  );
}

export default Payroll;
