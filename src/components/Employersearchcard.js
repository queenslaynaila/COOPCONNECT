import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Employersearchcard({employer}) {
 let navigate = useNavigate()
  return (
    <>
      <div class="card shadow-sm mt-3">
    <div class="card-body">
      <div className="d-flex flex-row" style={{ gap: "15px" }}>
        <div
          style={{
            backgroundColor: "darkblue",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            textAlign: "center",
            color: "white",
            lineHeight: "150px",
            fontSize: "2rem",
          }}
          class="circle-singleline mr-auto "
        > {employer.name.charAt(0).toUpperCase(0)}
        </div>
        <div>
          <p>{employer.name}</p>
          <p className="fw-bold" style={{ color: "darkblue" }}>
            {employer.companytype} Company
          </p>
          <p> {employer.created_at}</p>

        </div>

      </div>
    </div>

    <div class="card-footer text-muted   d-flex flex-row justify-content-between" style={{gap:"30px",padding:"10px"}}>

     <div>Jobs Posted : 1</div>
     <div>Internships Posted:1</div>
     <div>Location:Nairobi</div>
     <div><button className='btn btn-primary' onClick={()=>{navigate(`/searchemployer/${employer.id}`)}}>VIEW MORE</button></div>
</div>
     </div>

    </>
  )
}

