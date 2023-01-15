import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function JobPostPreview({formData}) {
  let navigate = useNavigate();
  
const handleCancel = () => {
  navigate("/postajob");
};

const handleSave = () => {
  axios
  .post("/api/formData", formData)
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
                    <h6 style={{ color: "darkblue" }} className='fw-bold'>{formData.jobtitle}</h6>
                    <p>Salary Range:{formData.minsalary}-{formData.maximumsalary}</p>
                    <p>Positions Available:{formData.positionavailable}</p>
                    <p>Location: {formData.location}</p>
                    </div>
                    <div>
                    <h6 style={{ color: "darkblue" }} className='fw-bold'>Responsibilities</h6>
                      <p>Experience in Years: {formData.experienceinyears}</p>
                      <p>{formData.responsibilities}</p>
                    </div>
                    <div><span style={{ color: "darkblue" }} className='fw-bold'>Key Skills:</span>&nbsp;&nbsp;{formData.keyskills}</div>
                    <div><span style={{ color: "darkblue" }} className='fw-bold'>Experience in Years:</span>&nbsp;&nbsp;{formData.experienceinyears}</div>
                    <div><span  style={{ color: "darkblue" }}className='fw-bold'>Seniority Level</span>:&nbsp;&nbsp;{formData.senioritylevel}</div>
                    <div><span style={{ color: "darkblue" }} className='fw-bold'>Minimum Educational Qualifications</span>:&nbsp;&nbsp;{formData.minimumeducationallevel}</div>
              </div>
            </div>
            <div class="card-body   "
                style=  {{backgroundColor:"#EEEEEE",height:"60px"}}>
                <div className="d-flex justify-content-end gap-2">
                    <button type="button " class="btn btn-primary" onClick={() => {navigate("/postajob")}}>EDIT POST</button>
                  <button type="button" class="btn btn-primary" onClick={handleSave}> POST</button>
                  <button type="button" class="btn btn-primary"onClick={handleCancel}>CANCEL</button>
                </div>
            </div>
         </div>
    </div>
  )
}
