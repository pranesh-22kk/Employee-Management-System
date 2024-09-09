import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component
import EmployeeData from './pages/EmployeeData'; // Import the EmployeeData page
import Attendance from './pages/Attendance'; // Import the Attendance page
import Payroll from './pages/Payroll'; // Import the Payroll page
import Performance from './pages/Performance'; // Import the Performance page
import Recruitment from './pages/Recruitment'; // Import the Recruitment page
import Training from './pages/Training'; // Import the Training page
import SelfService from './pages/SelfService'; // Import the SelfService page
import Compliance from './pages/Compliance'; // Import the Compliance page

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/employee-data" element={<EmployeeData />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/training" element={<Training />} />
            <Route path="/self-service" element={<SelfService />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/" element={<EmployeeData />} /> {/* Default route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
