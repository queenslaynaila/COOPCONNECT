import React from 'react'
import { useNavigate } from "react-router-dom";
export default function SeekerDashboard() {
  let navigate = useNavigate();

  return (
    <div className='container p-4 pb-0 mb-4'>
      <h4>Dashboard</h4>
       <div class="card"  >
          <div class="card-body">
             <div class="d-flex ">
               <div class="p-2">
                   <div
                        style={{backgroundColor:"darkblue",  width:   "100px",  height: "100px", borderRadius: "50%",textAlign:"center",color:"white",lineHeight:"100px",fontSize:"3rem"}} class="circle-singleline ">
                         QJ
                    </div>
               </div>
                <div class="p-2 ml-auto p-2">
                   <p>queenslay jema</p>
                   <p>queenslayjema@gmail.com</p>
                   <p>Since:09-11-2022</p></div>
                </div>
             </div>
          <ul class="list-group list-group-flush ">
                <li style={{backgroundColor:"#f8f9fa"}} class="list-group-item right ">
                <div className='col-md-12 bg-light text-right'>
                <button type="button" onClick={() => {
                          navigate("/seekerprofile");
                        }} class="btn btn-primary float-right me-1">Edit Profile</button>
                <button type="button " class="btn btn-primary float-right me-1">Upload Resume</button>
                </div>

                </li>
          </ul>
       </div>

        <div class="row">
         <div class="col-lg-3 mt-4">
            <div style={{maxWidth: "18rem"}} class="card card-block card-outline-primary">
                <p class="card-text">0&nbsp;
                    <a href="#" class=" float-right">Jobs applied</a>
                </p>
                <p class="card-text">0&nbsp;
                    <a href="#" class=" float-right">Jobs Saved </a>
                </p>
            </div>
         </div>
         <div class="col-lg-3 mt-4">
            <div style={{maxWidth: "18rem"}} class="card card-block card-outline-primary">
                <p class="card-text">0&nbsp;
                    <a href="#" class=" float-right">Internships applied</a>
                </p>
                <p class="card-text">0&nbsp;
                    <a href="#" class=" float-right">Internships Saved </a>
                </p>
            </div>
         </div>
         <div class="col-lg-3 mt-4">
            <div style={{maxWidth: "18rem"}} class="card card-block card-outline-primary">
                <p class="card-text">0&nbsp;
                    <a href="#" class=" float-right">Companies applied</a>
                </p>
                <p class="card-text">0&nbsp;
                    <a href="#" class=" float-right">Companies Saved </a>
                </p>
            </div>
         </div>
         <div class="col-lg-3 mt-4">
            <div style={{maxWidth: "18rem"}} class="card card-block card-outline-primary">
                <p class="card-text">0&nbsp;
                    <a href="#" class=" float-right">Surveys done</a>
                </p>
                <p class="card-text">0&nbsp;
                    <a href="#" class=" float-right">Surevys Saved </a>
                </p>
            </div>
         </div>
        </div>
        <div class="row">
         <div class="col-lg-3 mt-4">
            <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Recomended Jobs</h5>
                    <p class="card-text">Here are some companies matching your skillset and insterests</p>
                    <a href="#" class="btn btn-primary">View Recomeded</a>
                  </div>
            </div>
         </div>
         <div class="col-lg-3 mt-4">
            <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Recomended Internships</h5>
                    <p class="card-text">Here are some internnships matching your  interests</p>
                    <a href="#" class="btn btn-primary">View Recomeded</a>
                  </div>
            </div>
         </div>
         <div class="col-lg-3 mt-4">
            <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Recomended Companies</h5>
                    <p class="card-text">Here are some companies matching your  interests</p>
                    <a href="#" class="btn btn-primary">View Recomeded</a>
                  </div>
            </div>
         </div>
         <div class="col-lg-3 mt-4">
            <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Reccommended Surveys</h5>
                    <p class="card-text">Check out these surveys by companies you saved</p>
                    <a href="#" class="btn btn-primary">View Recomeded</a>
                  </div>
            </div>
         </div>
        </div>
    </div>
  )
}

