import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router'
export default function Internshipappliedcard({internship}) {

    let navigate = useNavigate()
  return (
    <div class="card mt-3"  >
    <div class="card-body">
        <div className='d-flex flex-row'
                    style=  {{gap:"15px"}}>
            <div
                    style={{backgroundColor:"darkblue",  width:   "70px",  height: "70px", borderRadius: "50%",textAlign:"center",color:"white",lineHeight:"70px",fontSize:"2rem"}} class="circle-singleline mr-auto ">
              {internship.employer.name.charAt(0).toUpperCase()}
            </div>
            <div>

                <p className='fw-bold'>{internship.employer.name.toUpperCase()}</p>
                <p className='fw-bold companyname' onClick={() => {navigate("/viewcompany")}}>{internship.employer.companytype} Company</p>
            </div>
      </div>
      <p><span className='fw-bold'>JOBTITLE: </span>&nbsp;{internship.internship.positiontitle}</p>
      <div className='d-flex flex-row' style={{gap:"10px"}}>
            <div><span className='fw-bold'>OPENNINGS AVAILABLE:</span>&nbsp;&nbsp;{internship.internship.positionsvailable}</div>


            <div><span className='fw-bold'>LOCATION</span>:&nbsp;&nbsp;{internship.internship.location}</div>
            <div><span className='fw-bold'>EXPERIENCE:</span>&nbsp;&nbsp;INTERN</div>

      </div>
      <div  className='d-flex flex-row' style={{gap:"10px"}}>
      <p><span className='fw-bold'>Salary:{internship.internship.salary} </span>&nbsp;&nbsp;{}</p>

      </div>

      <div className='mt-1'>

        <p><span className='fw-bold'>KEYSKILLS</span>{internship.internship.keyskills}</p>
      </div>
    </div>
    <div class="card-body d-flex flex-row justify-content-between"
        style=  {{backgroundColor:"#EEEEEE",height:"60px"}}>
      <div>

      </div>
      <div>
        {/* <a href="#" class="card-link" onClick={() => {navigate("/viewjob")}} >View Job</a>
        <a href="#" class="card-link">Save Job</a> */}
        <button  className='btn btn-primary'  >MORE</button>&nbsp;&nbsp;
        <button className='btn btn-primary'  >DELETE APPLICATION</button>
      </div>
    </div>
</div>
  )
}

