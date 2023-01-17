 import React from 'react'
 import Table from './Table'
 import JobpostedTable from './JobpostedTable'
 import SurveyTable from './SurveyTable'
import { useNavigate } from "react-router-dom";
import { SelectPicker } from 'rsuite';

 export default function DashBoardBody({employer}) {
  console.log(employer)
  let navigate = useNavigate();
   return (
     <div className='container mt-4 mb-4'>
       <h4 style={{color:"darkblue"}}>COMPANY DASHBOARD</h4>

        <div class="card shadow-sm">
            <div class="card-body">
                <div className='d-flex' style={{gap:"4px"}}>
                    <div
                        style={{backgroundColor:"darkblue",  width:   "100px",  height: "100px", borderRadius: "50%",textAlign:"center",color:"white",lineHeight:"100px",fontSize:"3rem"}} class="circle-singleline ">
                         {employer.name.charAt(0).toUpperCase()}
                    </div>
                     <div>
                    <p>{employer.name}</p>
                    <p>A {employer.companytype} Company</p>

                    <p><span className='fw-bold'>Member Since</span>&nbsp;&nbsp;{employer.created_at}</p>
                    </div>
                </div>

            </div>
            <div class="card-body" style=  {{backgroundColor:"#EEEEEE",height:"60px"}}>
                <div className="d-flex justify-content-end gap-2">
                     <button type="button" onClick={() => {navigate("/companyeditprofile")}} class="btn btn-primary">EDIT PROFILE</button>
                     <button type="button" class="btn btn-primary">POST SURVEYS</button>
                     <button onClick={() => {navigate("/postajob")}} type="button" class="btn btn-primary">POST JOBS</button>
                </div>
           </div>
        </div>
        <div class="card shadow-sm mt-4">
            <div class="card-header">
              <h4 style={{color:"darkblue"}}>SUMMARY OF POSTED JOBS</h4>
            </div>

            <div class="card-body ">
                <div class="row">
                     <div class="col-sm">
                       <div class="border border-dark d-flex justify-content-center w-50"  >
                          <div
                               style={{backgroundColor:"darkblue",borderRadius: "50%",textAlign:"center",color:"white",lineHeight:"100px",fontSize:"3rem"}} class="circle-singleline" className='w-50 mt-2 mb-2'>
                               {employer.totaljobsposted}
                          </div>
                          <p className='fw-bold text-center'>Jobs Posted</p>
                       </div>
                     </div>
                     <div class="col-sm">
                        <div class="border border-dark d-flex justify-content-center w-50 "  >
                          <div
                            style={{backgroundColor:"darkblue", borderRadius: "50%",textAlign:"center",color:"white",lineHeight:"100px",fontSize:"3rem"}} class="circle-singleline" className='w-50 mt-2 mb-2'>
                             {employer.totalinternshipsposted}
                         </div>
                         <p className='fw-bold text-center'>Internships posted</p>
                        </div>
                     </div>
                     <div class="col-sm">
                       <div class="border border-dark d-flex justify-content-center w-50 "  >
                         <div
                              style={{backgroundColor:"darkblue" , borderRadius: "50%",textAlign:"center",color:"white",lineHeight:"100px",fontSize:"3rem"}} class="circle-singleline"  className='w-50 mt-2 mb-2'>
                            {employer.totaljobapplications}
                         </div>
                         <p className='fw-bold text-center'>Applications Received</p>
                        </div>
                      </div>
                </div>
            </div>
        </div>
        <div class="card shadow-sm mt-4">
            <div class="card-header">
              <h4 style={{color:"darkblue"}}>RECENT APPLICANTS</h4>
            </div>
            <div class="card-body">
               <Table employer={employer}></Table>
            </div>
        </div>
        <div class="card shadow-sm mt-4">
            <div class="card-header">
              <h4 style={{color:"darkblue"}}>JOBS POSTED</h4>
            </div>
            <div class="card-body">
              <JobpostedTable  employer={employer}></JobpostedTable>
            </div>
        </div>
        <div class="card shadow-sm mt-4">
            <div class="card-header">
              <h4 style={{color:"darkblue"}}>SURVEYS POSTED</h4>
            </div>
            <div class="card-body">
              <SurveyTable></SurveyTable>
            </div>
        </div>
     </div>
   )
 }

