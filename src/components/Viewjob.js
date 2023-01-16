import React from 'react'
import { useState } from 'react';
function Viewjob({job}) {


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
              TS
            </div>
            <div>
              <p>job.jobtitle</p>
              <p className="fw-bold" style={{ color: "darkblue" }}>
                job.employer.name
              </p>
            </div>
          </div>
          <div>
            <div>
              <span className="fw-bold">Opennings:</span>&nbsp;&nbsp; job.positionsavailable
            </div>
            <div>
              <span className="fw-bold">Category:</span>&nbsp;&nbsp; job.category.name
            </div>
            <div>
              <span className="fw-bold"> Salary Range</span>
              :&nbsp;&nbsp; job.minsalary-job.maximumsalary
            </div>
          </div>
        </div>
        <div
          class="card-body d-flex flex-row justify-content-between"
          style={{ backgroundColor: "#EEEEEE", height: "60px" }}
        >
          <div>
            <p>Posted on job.dateposted</p>
          </div>
          <div>
            <button type="button" class="btn btn-primary">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <div class="card mt-3">
        <div class="card-body">
          <h5 style={{ color: "darkblue" }}>job Description</h5>
          <p> job.responsibilities </p>
          <div>
            <span className="fw-bold">Positions available:</span>&nbsp;&nbsp;7
          </div>
          <div>
            <span className="fw-bold">Key Skills:</span>
            &nbsp;&nbsp;Teamwork,Communication
          </div>
        </div>
      </div>
      <div class="card mt-3">
        <div class="card-body">
          <h5 style={{ color: "darkblue" }}>About Company</h5>
          <p> job.employer.description</p>
        </div>
      </div>
    </div>
  );
}

export default Viewjob;
