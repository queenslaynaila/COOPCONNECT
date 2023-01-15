import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function JobPostPreview() {
  let navigate = useNavigate();
  const [jobPost, setJobPost] = useState({});

useEffect(() => {
axios
.get("/jobPost/:id")
.then((response) => setJobPost(response.data))
.catch((error) => console.log(error));
}, []);

const handleCancel = () => {
setJobPost({});
};

const handleSave = () => {
axios
.post("/api/jobPost", jobPost)
.then((response) => {
console.log(response);
navigate("/employerdash");
})
.catch((error) => console.log(error));
};
  return (
      <div className='container mt-4 mb-4'>
         <h5 style={{ color: "darkblue" }}>Job Post Preview</h5>
         <div class="card mt-3"  >
            <div class="card-body">
              <div>
                    <div>
                    <h6 style={{ color: "darkblue" }} className='fw-bold'>{jobPost.jobtitle}</h6>
                      <p>Salary Range:{jobPost.minsalary}-{jobPost.maxsalary}</p>
                      <p>Positions Available:{jobPost.positionavailable}</p>
                      <p>Location: {jobPost.location}</p>
                    </div>
                    <div>
                    <h6 style={{ color: "darkblue" }} className='fw-bold'>Responsibilities</h6>
                      <p>Experience in Years: {jobPost.experience}</p>
                      <p>{jobPost.jobresponsibilities}</p>
                    </div>
                    <div><span style={{ color: "darkblue" }} className='fw-bold'>Key Skills:</span>&nbsp;&nbsp;{jobPost.keyskills}</div>
                    <div><span style={{ color: "darkblue" }} className='fw-bold'>Experience in Years:</span>&nbsp;&nbsp;{jobPost.experience}</div>
                    <div><span  style={{ color: "darkblue" }}className='fw-bold'>Seniority Level</span>:&nbsp;&nbsp;{jobPost.senioritylevel}</div>
                    <div><span style={{ color: "darkblue" }} className='fw-bold'>Minimum Educational Qualifications</span>:&nbsp;&nbsp;{jobPost.education}</div>
              </div>
            </div>
            <div class="card-body   "
                style=  {{backgroundColor:"#EEEEEE",height:"60px"}}>
                <div className="d-flex justify-content-end gap-2">
                    <button type="button " class="btn btn-primary" onClick={() => {navigate("/postajob")}}>EDIT POST</button>
                  <button type="button" class="btn btn-primary" onClick={handleSave}>SAVE POST</button>
                  <button type="button" class="btn btn-primary"onClick={handleCancel}>CANCEL</button>
                </div>
            </div>
         </div>
    </div>
  )
}
