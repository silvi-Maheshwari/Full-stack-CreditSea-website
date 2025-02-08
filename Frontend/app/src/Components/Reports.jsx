import React, { useEffect, useState } from "react";
import axios from "axios";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


  useEffect(() => {
    axios.get(`${BACKEND_URL}/reports`)
      .then((res) => setReports(res.data))
      .catch((err) => console.error("Error fetching reports:", err));
  }, []);

  return (
    <div>
      <h2>Credit Reports</h2>
      {reports.length === 0 ? (
        <p>No reports found.</p>
      ) : (
        reports.map((report, index) => (
          <div key={index} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <h3>{report.name} - {report.creditScore}</h3>
            <p><b>Mobile:</b> {report.mobilePhone}</p>
            <p><b>PAN:</b> {report.pan}</p>
            <h4>Report Summary</h4>
            <p><b>Total Accounts:</b> {report.reportSummary.totalAccounts}</p>
            <p><b>Active Accounts:</b> {report.reportSummary.activeAccounts}</p>
            <p><b>Closed Accounts:</b> {report.reportSummary.closedAccounts}</p>
            <h4>Credit Accounts</h4>
            {report.creditAccounts.map((acc, idx) => (
              <div key={idx} >
                <p><b>Bank:</b> {acc.bank}</p>
                <p><b>Credit Card:</b> {acc.creditCard}</p>
                <p><b>Amount Overdue:</b> {acc.amountOverdue}</p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Reports;
