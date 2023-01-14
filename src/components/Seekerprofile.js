import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/seeker.css"
export default function Seekerprofile({seeker}) {
  console.log(seeker)
  let navigate = useNavigate();
  return (
    <div class="container">

      <div class="row gutters mt-5 mb-5">

      <p  className="dash" onClick={() => {navigate("/talentdashboard")}} style={{cursor:"pointer"}}> <i class="bi bi-arrow-left"></i> Go to Dashboard
      </p>
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
                    {seeker.firstname.charAt(0)}{seeker.secondname.charAt(0)}
                  </div>
                  <h5 class="user-name">{seeker.firstname} {seeker.secondname}</h5>
                  <h6 class="user-email">{seeker.account.email}</h6>
                </div>
                <div class="about">
                  <h5>About</h5>
                  <p>
                  {seeker.about}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">

          <div class="card h-100">

            <div class="card-body">

              <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 class="mb-2 text-primary">Personal Details</h6>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                    <label for="fullName">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="fullName"
                      placeholder={seeker.firstname}
                    ></input>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                    <label for="eMail">Second Name</label>
                    <input
                      type="email"
                      class="form-control"
                      id="eMail"
                      placeholder={seeker.secondname}
                    ></input>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                    <label for="phone">Phone</label>
                    {seeker.phone ?  <input
                      type="text"
                      class="form-control"
                      id="phone"
                      placeholder={seeker.phone}
                    ></input> : <input
                      type="text"
                      class="form-control"
                      id="phone"
                      placeholder="Enter your phonenumber"
                    ></input>}

                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                    <label for="website">Email</label>
                    <input
                      type="url"
                      class="form-control"
                      id="website"
                      placeholder={seeker.account.email}
                    ></input>
                  </div>
                </div>
              </div>

		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 class="mt-3 mb-2 text-primary">Address</h6>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="Street">Country</label>
                 {seeker.country ?  <input
                      class="form-control"
                      placeholder={seeker.country}
                    ></input> : <input
                      type="text"
                      class="form-control"
                      id="phone"
                      placeholder="Enter your country"
                    ></input>}

				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="ciTy">City</label>
          {seeker.city ? <input type="name" class="form-control" id="ciTy" placeholder={seeker.city}></input>:<input type="name" class="form-control" id="ciTy" placeholder="Update City LOcation"></input>}

				</div>
			</div>

		</div>
        <div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 class="mb-2 text-primary">Education</h6>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="fullName">Level</label>
					<input type="text" class="form-control" id="fullName" placeholder="Enter full name"></input>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="eMail">Start Date</label>
					<input type="email" class="form-control" id="eMail" placeholder="Enter email ID"></input>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="phone">End Date</label>
					<input type="text" class="form-control" id="phone" placeholder="Enter phone number"></input>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="website">Cert Awarded</label>
					<input type="url" class="form-control" id="website" placeholder="Website url"></input>
				</div>
			</div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="website">Institution</label>
					<input type="url" class="form-control" id="website" placeholder="Website url"></input>
				</div>
			</div>

		</div>
        <div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 class="mb-2 text-primary">Work Experience</h6>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="fullName">Job Title</label>
					<input type="text" class="form-control" id="fullName" placeholder="Enter full name"></input>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="eMail">Description</label>
					<input type="email" class="form-control" id="eMail" placeholder="Enter email ID"></input>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="phone">Start Date</label>
					<input type="text" class="form-control" id="phone" placeholder="Enter phone number"></input>
				</div>
			</div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="phone">End Date</label>
					<input type="text" class="form-control" id="phone" placeholder="Enter phone number"></input>
				</div>
			</div>



		</div>

         <div className='row gutters'>
		     <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
			   <h6 class="mb-2 text-primary">About Me</h6>
			   <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
			       <div class="mb-3">

                         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
			   </div>
			 </div>
		 </div>
		 <div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="text-right">
					<button type="button" onClick={() => {navigate("/talentdashboard")}} id="submit" name="submit" class="btn btn-secondary me-1 mt-1">Cancel</button>
					<button type="button" id="submit" name="submit" class="btn btn-primary me-1 mt-1" >Update</button>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
</div>



  )
}
