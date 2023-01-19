import React, { useState } from "react";
import {  useNavigate } from "react-router-dom"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import connect from "../assets/connect.png";
function SignUpJobSeekers({onSignUpSeeker}) {
  let navigate = useNavigate()
   const [startDate, setStartDate] = useState(new Date());
  const [firstname, setFirstName] = useState("");
  const [secondname, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender,setGender] = useState("")
  const [yearofbirth,SetYearofbirth] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

function handleSubmit(e) {
  e.preventDefault();
  if (password === passwordConfirmation ){
    fetch("/seekersignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
       secondname,
        email,
         gender,
         password,
         yearofbirth
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((seeker) =>{
          onSignUpSeeker(seeker)
         navigate("/talentdashboard")

        });
      }else{
        r.json().then((err) => {
          setErrors((err))

        })

    }
    });
  } else {
     setErrors({passwordconfirmation:"passwords dont match"})
  }
}

  return(
  <>
     <section class="vh-50">
    <div class="container py-5 h-100">

      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-8 col-lg-7 col-xl-6"  >
          <img src={connect}  alt="Phone profile" className="img-fluid" />
        </div>
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1"  >
          <form>
            <h4 style={{color:"darkblue"}} className="text-center">Job Seeker Registration</h4>
             <div className="row mb-2">
                    <div className="col">
                        <input onChange={(e) =>{
                         setFirstName(e.target.value)
                         setErrors([])
                          }}
                            type="text"
                            className="form-control form-control-lg"
                            id="password"
                            placeholder="First Name"
                            required
                            value={firstname}

                        />
                          {errors.firstname ? <p className="text-danger">{`firstname: ${errors.firstname}`}</p>:null}
                    </div>
                    <div className="col">
                        <input
                          onChange={(e) =>{
                         setSecondName(e.target.value)
                         setErrors([])
                           }}
                            type="text"
                            className="form-control form-control-lg"
                            id="confirmPassword"
                            placeholder="Second Name"
                            value={secondname}
                            required
                        />
                          {errors.secondname ? <p className="text-danger">{`secondname: ${errors.secondname}`}</p>:null}
                    </div>
             </div>
             <div className="col ">
                        <input
                        onChange={(e) =>{
                     setEmail(e.target.value)
                     setErrors([])
                      }}
                            type="text"
                            className="form-control form-control-lg"
                            id="confirmPassword"
                            placeholder="Email"
                            value={email}
                            required
                        />
                        {errors.email? <p className="text-danger">{`email: ${errors.email}`}</p>:null}
             </div>
             <div className="col mt-2">
                <select style={{color:"gray"}} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={gender} onChange={(e)=>{
                  setGender(e.target.value)
                }}>
                    <option selected  >Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
               {errors.gender ? <p  className="text-danger">{`gender: ${errors.gender}`}</p>:null}
             </div>
             <div className="row mt-2">
             <small style={{color:"grey"}}>ENTER DOB IN dd/mm/yyyy</small>
                    <div className="col">

                       <DatePicker

                          selected={startDate}
                          placeholderText="Choose DOB in dd/mm/yyyy"
                          onChange={date => {
                          setErrors([])
                         setStartDate(date)
                         SetYearofbirth(date)}}
                           name="startDate"
                           dateFormat="dd/MM/yyyy" />
                        {errors.yearofbirth ? <p  className="text-danger">{`dateofbirth: ${errors.yearofbirth}`}</p>:null}
                    </div>
             </div>
             <div className="row mt-2">
                    <div className="col">
                        <input
                        onChange={(e) =>{
                setPassword(e.target.value)
                setErrors([])
                }}
                            type="password"
                            className="form-control form-control-lg"
                            id="password"
                            placeholder="Password"
                            value = {password}
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                        onChange={(e) =>{
                setPasswordConfirmation(e.target.value)
                setErrors([])
                }}
                            type="password"
                            className="form-control form-control-lg"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            value={passwordConfirmation}
                            required
                        />


                    </div>
                    {errors.passwordconfirmation? <p className="text-danger">{` ${errors.passwordconfirmation}`}</p>:null}
                    {errors.password? <p className="text-danger">{`paswword: ${errors.password}`}</p>:null}
             </div>
             <div class="d-flex justify-content-around align-items-center mb-4">


              <a href="#!">Forgot password?</a>
             </div>
             <div>
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block"
                    style={{ width: "100%" }}
                    onClick={(e)=>{handleSubmit(e)}}
                  >
                    Create Account
                  </button>
             </div>
             <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0 text-muted">
                    HAVE AN ACCOUNT?
                  </p>
             </div>
             <div>
                  <a
                    class="btn btn-primary btn-lg btn-block mb-1"
                    style={{ backgroundColor: "#3b5998", width: "100%" }}
                    href="#!"
                    role="button"
                  >
                    Login
                  </a>
              </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUpJobSeekers;
