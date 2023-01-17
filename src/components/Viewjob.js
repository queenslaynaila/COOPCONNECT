import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
function Viewjob({jobs,seeker}) {
  const params= useParams()
  const jobselected = jobs.find((job) => job.id === Number(params.id));

  function handleApplication(e){
    fetch(`/jobapplications`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({job_id:jobselected.id, seeker_id:seeker.id})
    }).then(res => {
      if(res.ok){
          alert("Post was succesfull")
      }
    });
  }
  return (
    <div className="container mt-4 mb-4">
      <div class="card mt-3">
        <div class="card-body">
          <div className="d-flex flex-row" style={{ gap: "15px" }}>
            <div
              style={{
                backgroundColor: "darkblue",
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                textAlign: "center",
                color: "white",
                lineHeight: "70px",
                fontSize: "2rem",
              }}
              class="circle-singleline mr-auto "
            >
              {jobselected.employer.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p>{jobselected.jobtitle}</p>
              <p className="fw-bold" style={{ color: "darkblue" }}>
              {jobselected.employer.name}
              </p>
            </div>
          </div>
          <div>
            <div>
              <span className="fw-bold">Opennings:</span>&nbsp;&nbsp;  {jobselected.positionsavailable}
            </div>
            <div>
              <span className="fw-bold">Category:</span>&nbsp;&nbsp; {jobselected.category.name}
            </div>
            <div>
              <span className="fw-bold"> Salary Range</span>
              :&nbsp;&nbsp; {jobselected.minsalary}-{jobselected.maximumsalary}
            </div>
          </div>
        </div>
        <div
          class="card-body d-flex flex-row justify-content-between"
          style={{ backgroundColor: "#EEEEEE", height: "60px" }}
        >
          <div>
            <p>Posted on {jobselected.dateposted}</p>
          </div>
          <div>
            <button type="button" class="btn btn-primary" onClick={(e)=>handleApplication(e)}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <div class="card mt-3">
        <div class="card-body">
          <h5 style={{ color: "darkblue" }}>Job Description</h5>
          <p>{jobselected.overallsummarry}</p>
          <div>
            <span className="fw-bold">Positions available:</span>&nbsp;&nbsp;7
          </div>
          <div>
            <span className="fw-bold">Key Skills:</span>
            &nbsp;&nbsp;{jobselected.keyskills}
          </div>
        </div>
      </div>
      <div class="card mt-3">
        <div class="card-body">
          <h5 style={{ color: "darkblue" }}>About Company</h5>
          <p>{jobselected.employer.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Viewjob;
