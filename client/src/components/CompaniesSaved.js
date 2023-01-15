import React from "react";
import Parentcontainer from "./reusablecards/Parentcontainer";
import JobsTitle from "./reusablecards/JobsTitle";

function CompaniesSaved() {
  return (
    <Parentcontainer>
      <JobsTitle>
        <h2>Companies Applied</h2>
      </JobsTitle>
      <div className="job-applications-details">
        <p>Company: Moringa School</p>
        <p>Category: Tech Software</p>
        <p>Posted Date: 25/12/2022</p>
        <p>Job Description: Tutor</p>
        <p>Salary: 200000-3000000</p>
        <button className="section-btn">View</button>
      </div>
    </Parentcontainer>
  );
}

export default CompaniesSaved;
