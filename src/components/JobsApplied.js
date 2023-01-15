import React  from "react";
import "../styles/JobsApplied.css";
import JobsTitle from "../components/reusablecards/JobsTitle"
import Parentcontainer from "./reusablecards/Parentcontainer";


function JobsApplied() {
  // function fetchJob()
  return (
    <Parentcontainer >
      <JobsTitle>
        <h2>My Applications</h2>
      </JobsTitle>
      <div className="job-applications-details">
        <p>Title: Software Developer</p>
        <p>Company: Tech Software</p>
        <p>Posted Date: 20/12/2022</p>
        <p>Category: IT</p>
        <p>Salary: 20-30000</p>
        <button className="section-btn">View</button>
      </div>
    </Parentcontainer>
  );
}

export default JobsApplied;
