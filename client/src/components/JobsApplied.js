import React from "react";
import '../styles/JobsApplied.css';

function JobsApplied() {
  return (
    <div className="main-card">
      <div className="main-card-title">
        <h2>My Applications</h2>
        
      </div>
      <div className="job-applications-details">
        <p>Title: Software Developer</p>
        <p>Company: Tech Software</p>
        <p>Posted Date: 20/12/2022</p>
        <p>Category: IT</p>
        <p>Salary: 20-30000</p>
        <button>View</button>
      </div>
     
      {/* <div className="lower-section">huhef</div> */}
    </div>
  );
}

export default JobsApplied;
