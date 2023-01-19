import React from 'react'
import { useNavigate } from 'react-router'
export default function Companyappcard({employer}) {
  let navigate=(useNavigate)

  function handleClick(e){
    e.preventDefault()
    alert("s")
    fetch(`savedcompanies/${employer.id}`, {
method: 'DELETE'
})
.then(res => res.json())
.then(data => {
console.log(data)
})
  }
  return (
    <div class="card mt-3"  >
        <div class="card-body">
            <div className='d-flex flex-row'
                        style=  {{gap:"15px"}}>
                <div
                        style={{backgroundColor:"darkblue",  width:   "70px",  height: "70px", borderRadius: "50%",textAlign:"center",color:"white",lineHeight:"70px",fontSize:"2rem"}} class="circle-singleline mr-auto ">
                              {employer.employer.firstname.charAt(0)}  {employer.employer.secondname.charAt(0)}

                </div>
                <div>
                <p className='fw-bold'  style={{color:"darkblue"}}>{employer.employer.name}</p>
                     <p>{employer.employer.companytype} Company</p>

                </div>
          </div>
          <div className='mt-1'>
            <p><span className='fw-bold'>TOTAL JOBS POSTED:{employer.employer.totaljobsposted}</span></p>
            <p><span className='fw-bold'>TOTAL INTERNSHIPS POSTED:{employer.employer. totalinternshipsposted}</span></p>
          </div>

          <div className='mt-1'>
            <p>{employer.employer.description}</p>
          </div>
       </div>
       <div class="card-body d-flex flex-row justify-content-between"
            style=  {{backgroundColor:"#EEEEEE",height:"60px"}}>
          <div>

          </div>
          <div>
              <button className='btn btn-primary' onClick={()=>navigate(`/searchemployer/${employer.employer_id}`)}>VIEW</button>&nbsp;&nbsp;
              <button className='btn btn-danger' onClick={(e)=>handleClick(e)}   >DELETE</button>
          </div>
        </div>
    </div>
  )
}
