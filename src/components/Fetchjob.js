import React from 'react'
import { useNavigate } from 'react-router'
export default function Fetchjob({j,employerselected}) {

  console.log(employerselected)
    let navigate = useNavigate()
  return (
    <div class="card mt-3"  >
    <div class="card-body">
        <div className='d-flex flex-row'
                    style=  {{gap:"15px"}}>
            <div
                    style={{backgroundColor:"darkblue",  width:   "70px",  height: "70px", borderRadius: "50%",textAlign:"center",color:"white",lineHeight:"70px",fontSize:"2rem"}} class="circle-singleline mr-auto ">
                 {employerselected.name.charAt(0).toUpperCase()}
            </div>
            <div>

            <p>{employerselected.name}</p>
                <p className='fw-bold companyname'     >    {employerselected.companytype}</p>
            </div>
      </div>
      <p><span className='fw-bold'>JobTitle: </span>&nbsp;{j.jobtitle}</p>
      <div className='d-flex flex-row' style={{gap:"10px"}}>
            <div><span className='fw-bold'>Opennings:</span>&nbsp;&nbsp;{j.positionsavailable}</div>
            <div><span className='fw-bold'>Category:</span>&nbsp;&nbsp;</div>
            <div><span className='fw-bold'> Salary Range</span>:&nbsp;&nbsp;{j.minsalary}-{j.maximumsalary}</div>
            <div><span className='fw-bold'>Location</span>:&nbsp;&nbsp;{j.location}</div>
            <div><span className='fw-bold'>Experience:</span>:&nbsp;&nbsp;{j.senioritylevel}</div>

      </div>
      <div  className='d-flex flex-row' style={{gap:"10px"}}>
      <p><span className='fw-bold'>Maximum Salary: </span>&nbsp;&nbsp;{j.maximumsalary}</p>
      <p><span className='fw-bold'>Minimum Salary: </span>&nbsp;&nbsp;{j.minsalary}</p>
      </div>

      <div className='mt-1'>
        <p>{j.overallsummarry}</p>
      </div>
    </div>
    <div class="card-body d-flex flex-row justify-content-between"
        style=  {{backgroundColor:"#EEEEEE",height:"60px"}}>
      <div>
        <p>Posted on {j.dateposted}</p>
      </div>
      <div>
        {/* <a href="#" class="card-link" onClick={() => {navigate("/viewjob")}} >View Job</a>
        <a href="#" class="card-link">Save Job</a> */}
        <button  className='btn btn-primary'  > View Job</button>&nbsp;&nbsp;
        <button className='btn btn-primary'   > Save Job</button>
      </div>
    </div>
</div>
  )
}

