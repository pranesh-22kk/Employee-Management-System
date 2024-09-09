import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">Employee Data</Link>
      <Link to="/attendance" className="navbar-link">Attendance</Link>
      <Link to="/payroll" className="navbar-link">Payroll</Link>
      <Link to="/performance" className="navbar-link">Performance</Link>
      <Link to="/recruitment" className="navbar-link">Recruitment</Link>
      <Link to="/training" className="navbar-link">Training</Link>
      <Link to="/selfservice" className="navbar-link">Self-Service</Link>
      <Link to="/compliance" className="navbar-link">Compliance</Link>
    </div>
  );
}

export default Navbar;
