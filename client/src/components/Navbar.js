import React from 'react'
import '../styles/navbar.css'
import logo from '../assets/ico.png'
import {useNavigate} from "react-router-dom"
export default function Navbar() {
   let navigate = useNavigate()
  return (
    <nav class="navbar navbar-expand-lg fs-5   py-3  bg-white">
     <div className="container col-sm-15">

      <a class="navbar-brand" href="/#">
      <i className="bi bi-flower1"></i>
        COOPCONNECT
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item  ">
            <a className="nav-link login" onClick={()=>{navigate("/login")}} href="#/"><i className="bi bi-person-fill" /> login</a>
       </li>
       <li className="nav-item dropdown ms-sm-3 d-inline-flex">
         <a className="nav-link signup dropdown-toggle"
           href="#/" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-check2-square"/>Signup</a>
         <ul className="dropdown-menu  ">
           <li>
             <a onClick={()=>{navigate("/signupcompanies")}} className="dropdown-item fw-bold" href="#/" >Employer </a>
           </li>
       <li>
         <a  onClick={()=>{navigate("/signuptalents")}} className="dropdown-item fw-bold" href="#/"
         >Job Seeker</a>
     </li>
 </ul>
  </li>

</ul>
</div>
    </div>




</nav>

  )
}

