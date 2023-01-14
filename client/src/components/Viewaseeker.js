import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Viewaseeker({seeker,employer}) {
    let navigate = useNavigate();
  return (
    <div className='container'>
         <div class="row gutters mt-5 mb-5">
          {seeker ? <p  className="dash" onClick={() => {navigate("/talentdashboard")}} style={{cursor:"pointer"}}> <i class="bi bi-arrow-left"></i> Go to Dashboard</p>
          : <p  className="dash" onClick={() => {navigate("/searchtalents")}} style={{cursor:"pointer"}}> <i class="bi bi-arrow-left"></i> Go to Dashboard</p> }

            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="card ">
                <div class="card-body">
                <div class="account-settings">
                    <div class="user-profile">
                    <div
                        style={{
                        backgroundColor: "darkblue",
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        textAlign: "center",
                        color: "white",
                        lineHeight: "100px",
                        fontSize: "3rem",
                        }}
                        class="circle-singleline "
                    >
                        QJ
                    </div>
                    <h5 class="user-name">Queenslay Jema</h5>
                    <h6 class="user-email">queenslayjema@gmail</h6>
                    <p class="user-email">Location:Nairobi,Kenya</p>

                    </div>

                </div>
                </div>
            </div>
            </div>
             <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div className='card'>
                  <div className='card-body'>
                    <h5 style={{ color: "darkblue" }} className='fw-bold'>Profile Summary</h5>
                    <p>{seeker.about}</p>
                    <h5 style={{ color: "darkblue" }} className='fw-bold'>Key Skills</h5>
                    <ul class="list-inline">
                        <li class="list-inline-item"><i class="bi bi-check"></i>Python</li>
                        <li class="list-inline-item"><i class="bi bi-check"></i>CSS</li>
                        <li class="list-inline-item"><i class="bi bi-check"></i>React</li>
                   </ul>
                   <h5 style={{ color: "darkblue" }} className='fw-bold'>Education</h5>
                   <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <p>Cerificate name at Instituion Name</p>
                            <p>Start Year:</p>
                            <p>End Year:</p>
                        </li>
                        <li class="list-group-item">
                            <p>Cerificate name at Instituion Name</p>
                            <p>Start Year:</p>
                            <p>End Year:</p>
                        </li>
                  </ul>
                  <h5 style={{ color: "darkblue" }} className='fw-bold'>Work Experience</h5>
                  <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <h6 className='fw-bold'>Job Title</h6>
                            <p>Job title goes here</p>
                            <h6 className='fw-bold'>Job Description</h6>
                            <p>Job Description goes here</p>
                            <p className='fw-bold'>Start Year:</p>
                            <p className='fw-bold'>End Year:</p>
                        </li>
                  </ul>
                  <h5  style={{ color: "darkblue" }} className='fw-bold'>Personal Details</h5>
                    <p>First Name:</p>
                    <p>Last Name:</p>
                    <p>Gender:</p>
                    <p>Date of birth:</p>
                    <h5 style={{ color: "darkblue" }}>CV LINK</h5>
                      <p>Download CV PDF here</p>
                  </div>

                </div>
             </div>
         </div>

    </div>
  )
}
