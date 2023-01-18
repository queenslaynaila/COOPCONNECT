import React, { useState } from "react";
import "../styles/CompanyEditProfile.css"
import { useNavigate } from "react-router-dom";
function CompanyEditProfile({employer,onEmployeredit}) {
  let navigate = useNavigate();
  const [name,Setname] =useState(employer.name)
  const [companytype,Setcompanytype] = useState("")
  const [websiteurl,Setwebsiteurl] = useState('')
  const [description,Setdescription] = useState('')
  const [firstname, SetFirstName] = useState(employer.firstname);
  const [secondname, SetSecondName] = useState(employer.secondname);
  const [designation,Setdesignation] = useState('')

  if (name === null || firstname===null || secondname===null )  {
    SetFirstName(employer.firstname)
     Setname(employer.name)
     SetSecondName(employer.secondname)
  }
  function handleUpdate(e){
    e.preventDefault()
    fetch(`/employers/${employer.id}`, {
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({firstname,secondname,name,companytype,websiteurl,description,designation})
    }).then(res => {
      if(res.ok){
        res.json().then((user)=>{
          onEmployeredit(user)
        })

      }
    });
  }


  return (
    <div className="container mt-4 mb-4">
       <h4 style={{color:"darkblue"}}>Profile Edit Mode</h4>
       <p  className="dash" onClick={() => {navigate("/employerdash")}} style={{cursor:"pointer"}}> <i class="bi bi-arrow-left"></i> Go to Dashboard
            </p>
        <div class="card">
          <div class="card-header">
          <h4> Organizational Information</h4>
          </div>
          <div class="card-body">
             <form id="bookingForm" action="#" method="" class="needs-validation" novalidate autocomplete="off">
                <div class="form-group">
                    <input type="text" class="form-control" id="inputName" name="name" placeholder="Organization Name" value={name}  onChange={(e)=>{
                      Setname(e.target.value)
                    }}/>
                </div>
                <div class="row">

                    <div class="col">
                        <div class="form-group">
                                      <input type="text" class="form-control" id="companytype" name="companytype" placeholder="companytype" onChange={(e)=>{
                                        Setcompanytype(e.target.value)
                                      }} value={companytype}  />
                        </div>
                    </div>
               </div>
              <div class="form-group">
                <input type="string" class="form-control form-control-lg mb-2" id="iurl" name="iurl" placeholder="Website url" value={websiteurl} onChange={(e)=>{
                  Setwebsiteurl(e.target.value)
                }}/>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="remark" id="textAreaRemark" rows="2" placeholder="Describe your company..." value={description} onChange={(e)=>{
                  Setdescription(e.target.value)
                }}></textarea>
             </div>
            </form>
          </div>
          <div class="card-header">
              <h4>Personal Information</h4>
          </div>
          <div class="card-body">
             <form id="bookingForm" action="#" method="" class="needs-validation" novalidate autocomplete="off">
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                                  <input type="text" class="form-control" id="inputEmail" name="email" placeholder="First Name" value={firstname} onChange={(e)=>{
                                    SetFirstName(e.target.value)
                                  }} />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                                      <input type="text" class="form-control" id="sname" name="sname" placeholder="Last Name" value={secondname} onChange={(e)=>{
                                        SetSecondName(e.target.value)
                                      }} />
                        </div>
                    </div>
               </div>
               <div class="row">
                    <div class="col">
                        <div class="form-group">
                                  <input type="text" class="form-control" id="des" name="des" placeholder="Designation"  value={designation} onChange={(e)=>{
                                    Setdesignation(e.target.value)
                                  }} />
                        </div>
                    </div>

               </div>
               <div className="d-flex justify-content-end">
               <button onClick={(e)=>handleUpdate(e)} type="button" class="btn btn-primary" >UPDATE</button>
               </div>

            </form>
          </div>
       </div>
    </div>

  );
}

export default CompanyEditProfile;
