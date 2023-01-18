import React from 'react'
import { useNavigate } from 'react-router'
export default function Settings({employer,seeker}) {
  let navigate = useNavigate()

  function handleDelete(){
    // fetch(`Your link here/${id}`, {
    //   //requires an id to patch
    //   method: `POST`,
    //   body: JSON.stringify({
    //     //your data here
    //   }),
    //   headers: { 'Content-type': `application/json; charset=UTF-8` },
    // }).then((response) => response.json())


}
    return (
       <div className='container mt-4 mb-4'>
         <div class="container">
            <div class="row align-items-start">
              <div class="col-md-4">
                  <div class="card"  >
                    <div class="card-body">
                      <h5 class="card-title mt-2">ACCOUNT INFO</h5>
                      <div className='d-flex justify-content-center'
                        style={{backgroundColor:"darkblue",  width:   "100px",  height: "100px", borderRadius: "50%",textAlign:"center",color:"white",lineHeight:"100px",fontSize:"3rem"}} class="circle-singleline ">
                          Q
                      </div>
                      <div className='fw-bold d-flex justify-content-center'>{
                        seeker ? `${seeker.firstname}${seeker.secondname}`:  `${employer.name}`} </div>
                      <div className='d-flex justify-content-center' >{
                        seeker ? `${seeker.email}`:  `${employer.account.email}`}</div>
                    </div>
                  </div>
                  <button onClick={()=>handleDelete} className='btn btn-danger mt-2'>DELETE ACCOUNT</button>&nbsp;&nbsp;


               </div>
               <div class="col-md-4">
                  <div class="card text-center">
                    <div class="card-header">
                     ACCOUNT SETTINGS
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">CHANGE PASSWORD</h5>
                      <p class="card-text">Change your password</p>

                    </div>

                  </div>
                  <button className='btn btn-warning mt-2'>CHANGE PASSWORD</button>
               </div>
               <div class="col-md-4">
                  <div class="card text-center">
                    <div class="card-header">
                     ACCOUNT SETTINGS
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">CHANGE  EMAIL</h5>
                      <p class="card-text">Change Your Email</p>

                    </div>

                  </div>
                  <button className='btn btn-warning mt-2'>CHANGE PASSWORD</button>
               </div>
            </div>

          </div>
       </div>
  )
}

