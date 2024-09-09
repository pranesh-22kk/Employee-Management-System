import React, { useState } from 'react';
import { addRecruitmentRecord } from '../services/recruitmentService';

const RecruitmentForm = () => {
  const [recruitment, setRecruitment] = useState({
    jobId: '',
    candidateName: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecruitment({ ...recruitment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecruitmentRecord(recruitment);
    setRecruitment({ jobId: '', candidateName: '', status: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="jobId"
        placeholder="Job ID"
        value={recruitment.jobId}
        onChange={handleChange}
      />
      <input
        type="text"
        name="candidateName"
        placeholder="Candidate Name"
        value={recruitment.candidateName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="status"
        placeholder="Status"
        value={recruitment.status}
        onChange={handleChange}
      />
      <button type="submit">Save Recruitment</button>
    </form>
  );
};

export default RecruitmentForm;
