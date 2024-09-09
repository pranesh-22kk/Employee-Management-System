import React, { useState } from 'react';
import { addPayrollRecord } from '../services/payrollService';

const PayrollForm = () => {
  const [payroll, setPayroll] = useState({
    employeeId: '',
    salary: '',
    deductions: '',
    netPay: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayroll({ ...payroll, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPayrollRecord(payroll);
    setPayroll({ employeeId: '', salary: '', deductions: '', netPay: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="employeeId"
        placeholder="Employee ID"
        value={payroll.employeeId}
        onChange={handleChange}
      />
      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={payroll.salary}
        onChange={handleChange}
      />
      <input
        type="number"
        name="deductions"
        placeholder="Deductions"
        value={payroll.deductions}
        onChange={handleChange}
      />
      <input
        type="number"
        name="netPay"
        placeholder="Net Pay"
        value={payroll.netPay}
        onChange={handleChange}
      />
      <button type="submit">Save Payroll</button>
    </form>
  );
};

export default PayrollForm;
