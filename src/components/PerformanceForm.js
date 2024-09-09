import React, { useState } from 'react';
import { addPerformanceRecord } from '../services/performanceService';

const PerformanceForm = () => {
  const [performance, setPerformance] = useState({
    employeeId: '',
    goal: '',
    progress: '',
    evaluation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerformance({ ...performance, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPerformanceRecord(performance);
    setPerformance({ employeeId: '', goal: '', progress: '', evaluation: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="employeeId"
        placeholder="Employee ID"
        value={performance.employeeId}
        onChange={handleChange}
      />
      <input
        type="text"
        name="goal"
        placeholder="Goal"
        value={performance.goal}
        onChange={handleChange}
      />
      <input
        type="text"
        name="progress"
        placeholder="Progress"
        value={performance.progress}
        onChange={handleChange}
      />
      <textarea
        name="evaluation"
        placeholder="Evaluation"
        value={performance.evaluation}
        onChange={handleChange}
      />
      <button type="submit">Save Performance</button>
    </form>
  );
};

export default PerformanceForm;
