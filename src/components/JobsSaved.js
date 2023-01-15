import React from "react";
import JobsTitle from "./reusablecards/JobsTitle";
import Parentcontainer from "./reusablecards/Parentcontainer";
import "../styles/JobsApplied.css";

function JobsSaved() {
  return (
    <Parentcontainer>
      <JobsTitle>
        <h2>Jobs Saved</h2>
      </JobsTitle>
      <div className="job-applications-details">
        <p>Company: Moringa School</p>
        <p>Role: Tech Software</p>
        <p>Posted Date: 25/12/2022</p>
        <p>Job Description: Tutor</p>
        <p>Salary: 200000-3000000</p>
        <button className="section-btn">View</button>
      </div>
    </Parentcontainer>
  );
}

export default JobsSaved;
