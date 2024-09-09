import React, { useState } from 'react';
import { addTrainingRecord } from '../services/trainingService';

const TrainingForm = () => {
  const [training, setTraining] = useState({
    employeeId: '',
    program: '',
    progress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTraining({ ...training, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTrainingRecord(training);
    setTraining({ employeeId: '', program: '', progress: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="employeeId"
        placeholder="Employee ID"
        value={training.employeeId}
        onChange={handleChange}
      />
      <input
        type="text"
        name="program"
        placeholder="Training Program"
        value={training.program}
        onChange={handleChange}
      />
      <input
        type="text"
        name="progress"
        placeholder="Progress"
        value={training.progress}
        onChange={handleChange}
      />
      <button type="submit">Save Training</button>
    </form>
  );
};

export default TrainingForm;
