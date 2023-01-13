import React, { useState } from "react";
import "../styles/login.css"
import {useNavigate} from "react-router-dom"
function Login({onLoginEmployer,onLoginSeeker,setSeeker,setEmployer}) {
  let link ="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
  let navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  function handleSubmit(e) {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email,password})
  })
  .then((r)=>{
      if(r.ok){
          r.json().then((user)=>{
             if (user.user_type === "Employer"){
              onLoginEmployer(user)
              navigate('/employerdash')
            }
             else{
               onLoginSeeker(user)
               navigate("/talentdashboard")
            }
          })
      }else{
          r.json().then((err) => setErrors(err.errors))
      }
  })
  }


  return (
    <section class="vh-80">
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-8 col-lg-7 col-xl-6">
          <img src={link}
            class="img-fluid" alt="Phone image"></img>
        </div>
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <h4 style={{color:"darkblue"}} className="text-center">Sign In To Your Account</h4>
          <form>

            <div class="form-outline mb-4">
            <label class="form-label" for="form1Example13">Email address:</label>
              <input onChange={(e) =>{
                setEmail(e.target.value)
                setErrors(null)
                }} value={email} type="email" id="form1Example13" class="form-control form-control-lg" required />
            </div>


            <div class="form-outline mb-4">
              <label class="form-label" for="form1Example23">Password:</label>
              <input  onChange={(e) =>{
                setPassword(e.target.value)
                setErrors(null)
                }} type="password" id="form1Example23" class="form-control form-control-lg" required />
            </div>

            <div class="d-flex justify-content-around align-items-center mb-4">

              
              <a href="#!">Forgot password?</a>
            </div>

           <div  >
           <button  onClick={(e)=>handleSubmit(e)} type="submit" class="btn btn-primary btn-lg btn-block" style={{width:"100%",backgroundColor: "#green"}}  >Sign in</button>
           </div>


            <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
            </div>
             <div>
            <a   onClick={()=>{navigate("/signuptalents")}} class="btn btn-primary btn-lg btn-block mb-1" style={{backgroundColor: "#3b5998",width:"100%"}} href="#!"
              role="button">
              Sign Up As JobSeeker
            </a>
            <a class="btn btn-primary btn-lg btn-block"  onClick={()=>{navigate("/signupcompanies")}}  style={{backgroundColor: " #55acee",width:"100%"}} href="#!"
              role="button">
               Sign Up As  Company</a>
</div>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Login
