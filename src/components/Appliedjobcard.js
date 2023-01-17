import React from 'react'
import { useNavigate } from 'react-router'
export default function Appliedjobcard({job}) {
    console.log(job)
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

                <p className='fw-bold'>{job.employer.name.toUpperCase()}</p>
                <p className='fw-bold companyname' onClick={() => {navigate("/viewcompany")}}>{job.employer.companytype}</p>
            </div>
      </div>
      <p><span className='fw-bold'>JOBTITLE: </span>&nbsp;{job.job.jobtitle}</p>
      <div className='d-flex flex-row' style={{gap:"10px"}}>
            <div><span className='fw-bold'>OPENNINGS AVAILABLE:</span>&nbsp;&nbsp;{job.job.positionsavailable}</div>


            <div><span className='fw-bold'>LOCATION</span>:&nbsp;&nbsp;{job.job.location}</div>
            <div><span className='fw-bold'>EXPERIENCE:</span>&nbsp;&nbsp;{job.job.senioritylevel}</div>

      </div>
      <div  className='d-flex flex-row' style={{gap:"10px"}}>
      <p><span className='fw-bold'>Maximum Salary: </span>&nbsp;&nbsp;{job.job.maximumsalary}</p>
      <p><span className='fw-bold'>Minimum Salary: </span>&nbsp;&nbsp;{job.job.minsalary}</p>
      </div>

      <div className='mt-1'>
      <p><span className='fw-bold'>APPLICATION STATUS:</span>&nbsp;&nbsp;{job.status}</p>
        <p>{job.job.overallsummarry}</p>
      </div>
    </div>
    <div class="card-body d-flex flex-row justify-content-between"
        style=  {{backgroundColor:"#EEEEEE",height:"60px"}}>
      <div>
        <p>Posted on {job.job.dateposted}</p>
      </div>
      <div>
        {/* <a href="#" class="card-link" onClick={() => {navigate("/viewjob")}} >View Job</a>
        <a href="#" class="card-link">Save Job</a> */}
        <button onClick={()=>{navigate(`/searchjob/${job.id}`)}} className='btn btn-primary'  >MORE</button>&nbsp;&nbsp;
        <button className='btn btn-primary'  >DELETE</button>
      </div>
    </div>
</div>
  )
}

