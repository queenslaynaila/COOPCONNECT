import React, { useState } from "react";
import "../styles/CompanyEditProfile.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function CompanyEditProfile() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    companytype: "",
    // companySize: "",
    websiteurl: "",
    description: "",
    firstname: "",
    secondname: "",
    designation: "",
    // email: ""
    });
    
    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
    ...prevState,
    [name]: value,
    }));
    };
    
    const handleSubmit = (event) => {
    event.preventDefault();
    axios.patch('/employers/:id', formData)
    .then(response => {
    console.log(response);
    navigate("/employerdash");
    })
    .catch(error => {
    console.log(error);
    });
    };
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
                    <input type="text" class="form-control" id="inputName" name="name" placeholder="Organization Name"  onChange={handleChange} value={formData.name}  />
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                                  <input type="text" class="form-control" id="inputEmail" name="companytype" placeholder="Organization Type" onChange={handleChange} value={formData.companytype}  />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                                      <input type="text" class="form-control" id="inputEmail" name="companySize" placeholder="Organization Size" onChange={handleChange} value={formData.companySize}  />
                        </div>
                    </div>
               </div>
              <div class="form-group">
                <input type="text" class="form-control" id="inputPhone" name="websiteurl" placeholder="websiteurl url" onChange={handleChange} value={formData.websiteurl} />
              </div>
              <div class="form-group">
              <textarea class="form-control" name="description" id="textAreaRemark" rows="2" placeholder="Describe your company..." onChange={handleChange} value={formData.description}></textarea>
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
                        <input type="text" class="form-control" id="inputEmail" name="firstname" placeholder="First Name" onChange={handleChange} value={formData.firstname}/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                        <input type="text" class="form-control" id="inputEmail" name="secondname" placeholder="Last Name" onChange={handleChange} value={formData.secondname}/>
                        </div>
                    </div>
               </div>
               <div class="row">
                    <div class="col">
                        <div class="form-group">
                        <input type="text" class="form-control" id="inputEmail" name="designation" placeholder="Designation" onChange={handleChange} value={formData.designation}/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                        <input type="email" class="form-control" id="inputEmail" name="email" placeholder="Email" onChange={handleChange} value={formData.email}/>
                        </div>
                    </div>
               </div>
               <div className="d-flex justify-content-end">
               <button type="button" class="btn btn-primary"onClick={handleSubmit}>UPDATE</button>
               </div>

            </form>
          </div>
       </div>
    </div>

  );
}

export default CompanyEditProfile;
