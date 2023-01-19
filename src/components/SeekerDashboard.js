import React from 'react'
import { useNavigate } from "react-router-dom";
import Jobapplications from './seekerstable/Jobapplications';
import Internshipapplications from './seekerstable/Internshipapplications';
export default function SeekerDashboard({seeker}) {
console.log(seeker)
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
                          {seeker.firstname.charAt(0)}{seeker.secondname.charAt(0)}
                    </div>
               </div>
                <div class="p-2 ml-auto p-2">
                <p>{seeker.firstname} {seeker.secondname}</p>
                   <p>{seeker.email}</p>
                   <p>{seeker.created_at}</p>
                  </div>
                </div>
             </div>
          <ul class="list-group list-group-flush ">
                <li style={{backgroundColor:"#f8f9fa"}} class="list-group-item right ">
                <div className='col-md-12 bg-light text-right'>
                <button type="button" onClick={() => {
                          navigate("/seekerprofile");
                        }} class="btn btn-primary float-right me-1">Edit Profile</button>
                <button type="button " class="btn btn-primary float-right me-1" onClick={() => {navigate("/viewaseeker")}}>View Public Profile</button>
                </div>

                </li>
          </ul>
       </div>

         <div class="row">
         <div class="col-lg-3 mt-4">
            <div style={{maxWidth: "18rem"}} class="card card-block card-outline-primary">
                <p class="card-text">{seeker.totaljobsapplied}&nbsp;
                    <a href="#" class=" float-right" onClick={()=>{
                    navigate("/jobsapplied");
                  }}>Jobs applied</a>
                </p>
                <p class="card-text">{seeker.totalsavedjobs}&nbsp;
                    <a  onClick={()=>{
                    navigate("/jobssaved");
                  }} href="#" class=" float-right">Jobs Saved </a>
                </p>
            </div>
         </div>
         <div class="col-lg-3 mt-4">
            <div style={{maxWidth: "18rem"}} class="card card-block card-outline-primary">
                <p class="card-text">{seeker.totalinternshipsapplied}&nbsp;
                    <a onClick={()=>{
                    navigate("/myappliedinternships");
                  }} href="#" class=" float-right">Internships applied</a>
                </p>
                <p class="card-text">{seeker.totalsavedinternships}&nbsp;
                    <a href="#" onClick={()=>{
                    navigate("/mysavedinternships");
                  }}  class=" float-right">Internships Saved </a>
                </p>
            </div>
         </div>
         <div class="col-lg-3 mt-4">
            <div style={{maxWidth: "18rem"}} class="card card-block card-outline-primary">
                <p class="card-text">{seeker.totalcompaniesapplied}&nbsp;
                    <a href="#" onClick={()=>{
                    navigate("/myappliedcompanies");
                  }} class=" float-right">Companies applied</a>
                </p>
                <p class="card-text">{seeker.totalsavedcompanies}&nbsp;
                    <a  onClick={()=>{
                    navigate("/companiessaved");
                  }} href="#" class=" float-right">Companies Saved </a>
                </p>
            </div>
         </div>
         <div class="col-lg-3 mt-4">
            <div style={{maxWidth: "18rem"}} class="card card-block card-outline-primary">
                <p class="card-text">0&nbsp;
                    <a href="#" class=" float-right">Offers received</a>
                </p>
                <p class="card-text">0&nbsp;
                    <a href="#" class=" float-right">Surevys Saved </a>
                </p>
            </div>
         </div>
        </div>

         <div class="card shadow-sm mt-4">
            <div class="card-header">
              <h4 style={{color:"darkblue"}}>RECENT JOB APPLICATIONS</h4>
            </div>
            <div class="card-body">
                <Jobapplications seeker={seeker}></Jobapplications>
            </div>
        </div>
        <div class="card shadow-sm mt-4">
            <div class="card-header">
              <h4 style={{color:"darkblue"}}>RECENT INTERNSHIP APPLICATIONS</h4>
            </div>
            <div class="card-body">
              <Internshipapplications seeker={seeker}></Internshipapplications>
            </div>
        </div> 
    </div>
  )
}

