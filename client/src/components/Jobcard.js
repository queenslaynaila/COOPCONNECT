import React from 'react'
import { useNavigate} from "react-router-dom";
import Viewjob from './Viewjob';

export default function Jobcard({job}) {
  const navigate = useNavigate();

  const handleClick = id => {
    fetch(`/jobs/${id}`).then(r => r.json()).then(job1=> <Viewjob job={job1} />)
    navigate('/viewjob')
  }

  return (
    <div class="card mt-3"  >
        <div class="card-body">
            <div className='d-flex flex-row'
                        style=  {{gap:"15px"}}>
                <div
                        style={{backgroundColor:"darkblue",  width:   "70px",  height: "70px", borderRadius: "50%",textAlign:"center",color:"white",lineHeight:"70px",fontSize:"2rem"}} class="circle-singleline mr-auto ">
                  TS
                </div>
                <div>
                    <p>{job.jobtitle}</p>
                    <p className='fw-bold companyname' onClick={() => {navigate("/viewcompany")}}    >
                    {job.employer.name}
                    </p>
                </div>
          </div>
          <div className='d-flex flex-row' style={{gap:"25px"}}>
                <div><span className='fw-bold'>Opennings:</span>&nbsp;&nbsp; {job.positionsavailable}</div>
                <div><span className='fw-bold'>Category:</span>&nbsp;&nbsp; {job.category.name}</div>
                <div><span className='fw-bold'> Salary Range</span>:&nbsp;&nbsp; {job.minsalary}-{job.maximumsalary}</div>
          </div>

          <div className='mt-1'>
            <p>{job.responsibilities}</p>
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
            <button onClick={e => handleClick(job.id)} > View Job</button>
            <button> Save Job</button>
          </div>
        </div>
    </div>
  )
}

