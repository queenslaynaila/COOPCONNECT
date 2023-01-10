import React, { useState } from "react";
import "../styles/CompanyEditProfile.css"
function CompanyEditProfile() {

 

  return (
    <div className="container mt-4 mb-4">
       <h4 style={{color:"darkblue"}}>Profile Edit Mode</h4>
        <div class="card">
          <div class="card-header">
          <h4> Organizational Information</h4>
          </div>
          <div class="card-body">
             <form id="bookingForm" action="#" method="" class="needs-validation" novalidate autocomplete="off">
                <div class="form-group">
                    <input type="text" class="form-control" id="inputName" name="name" placeholder="Organization Name"  />
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                                  <input type="text" class="form-control" id="inputEmail" name="email" placeholder="Organization Type"  />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                                      <input type="text" class="form-control" id="inputEmail" name="email" placeholder="Organization Type"  />
                        </div>
                    </div>
               </div>
              <div class="form-group">
                <input type="text" class="form-control" id="inputPhone" name="phone" placeholder="Website url" />
              </div>
              <div class="form-group">
                <textarea class="form-control" name="remark" id="textAreaRemark" rows="2" placeholder="Describe your company..."></textarea>
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
                                  <input type="text" class="form-control" id="inputEmail" name="email" placeholder="First Name"  />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                                      <input type="text" class="form-control" id="inputEmail" name="email" placeholder="Last Name"  />
                        </div>
                    </div>
               </div>
               <div class="row">
                    <div class="col">
                        <div class="form-group">
                                  <input type="text" class="form-control" id="inputEmail" name="email" placeholder="Designation"  />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                                      <input type="email" class="form-control" id="inputEmail" name="email" placeholder="Email"  />
                        </div>
                    </div>
               </div>
               <div className="d-flex justify-content-end">
               <button type="button" class="btn btn-primary">UPDATE</button>
               </div>

            </form>
          </div>
       </div>
    </div>

  );
}

export default CompanyEditProfile;
