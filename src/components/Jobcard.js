import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
export default function Jobcard({job,seeker}) {
    

   function handleApplication(e){
    e.preventDefault()
     fetch("/jobapplications", {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({job_id:job.id, seeker_id:seeker.id})
  }).then(res => {
     if (res.ok){
      alert('job applied')
     }
  });
   }

function handleSave(e){
  e.preventDefault()
  fetch("/savedjobs", {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({job_id:job.id, seeker_id:seeker.id})
  }).then(res => {
     if (res.ok){
      alert('saved')
     }
  });
}
  let navigate = useNavigate();

  return (
    <div class="card mt-3"  >
        <div class="card-body">
            <div className='d-flex flex-row'
                        style=  {{gap:"15px"}}>
                <div
                        style={{backgroundColor:"darkblue",  width:   "70px",  height: "70px", borderRadius: "50%",textAlign:"center",color:"white",lineHeight:"70px",fontSize:"2rem"}} class="circle-singleline mr-auto ">
                  {job.employer.name.charAt(0).toUpperCase()}
                </div>
                <div>

                    <p>{job.employer.name}</p>
                    <p className='fw-bold companyname' onClick={() => {navigate("/viewcompany")}}    >{job.employer.companytype}</p>
                </div>
          </div>
          <p><span className='fw-bold'>JobTitle: </span>&nbsp;{job.jobtitle}</p>
          <div className='d-flex flex-row' style={{gap:"10px"}}>
                <div><span className='fw-bold'>Opennings:</span>&nbsp;&nbsp;{job.positionsavailable}</div>
                <div><span className='fw-bold'>Category:</span>&nbsp;&nbsp;{job.category.name}</div>
                <div><span className='fw-bold'> Salary Range</span>:&nbsp;&nbsp;{job.minsalary}-{job.maximumsalary}</div>
                <div><span className='fw-bold'>Location</span>:&nbsp;&nbsp;{job.location}</div>
                <div><span className='fw-bold'>Experience:</span>:&nbsp;&nbsp;{job.senioritylevel}</div>

          </div>
          <div  className='d-flex flex-row' style={{gap:"10px"}}>
          <p><span className='fw-bold'>Maximum Salary: </span>&nbsp;&nbsp;{job.maximumsalary}</p>
          <p><span className='fw-bold'>Minimum Salary: </span>&nbsp;&nbsp;{job.minsalary}</p>
          </div>

          <div className='mt-1'>
            <p>{job.overallsummarry}</p>
          </div>
        </div>
        <div class="card-body d-flex flex-row justify-content-between"
            style=  {{backgroundColor:"#EEEEEE",height:"60px"}}>
          <div>
            <p>Posted on {job.dateposted}</p>
          </div>
          <div>
            {/* <a href="#" class="card-link" onClick={() => {navigate("/viewjob")}} >View Job</a>
            <a href="#" class="card-link">Save Job</a> */}
            <button onClick={()=>{navigate(`/searchjob/${job.id}`)}} className='btn btn-primary'  > View Job</button>&nbsp;&nbsp;
            <button className='btn btn-primary' onClick={(e)=>handleApplication(e)}>Apply</button>&nbsp;&nbsp;
            <button className='btn btn-primary' onClick={(e)=>handleSave(e)} > Save Job</button>
          </div>
        </div>
    </div>

  )
}

