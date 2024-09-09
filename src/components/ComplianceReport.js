import React, { useEffect, useState } from 'react';
import { getComplianceReport } from '../services/complianceService';

const ComplianceReport = () => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      const data = await getComplianceReport();
      setReport(data);
    };
    fetchReport();
  }, []);

  if (!report) return <div>Loading...</div>;

  return (
    <div>
      <h3>Compliance Report</h3>
      <pre>{JSON.stringify(report, null, 2)}</pre>
    </div>
  );
};

export default ComplianceReport;
