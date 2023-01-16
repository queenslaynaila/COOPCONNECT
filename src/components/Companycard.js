import React from 'react'

export default function Companycard({company}) {
    console.log(company)
  return (

    <div class="card mt-3"  >
        <div class="card-body">
            <div className='d-flex flex-row'
                        style=  {{gap:"15px"}}>
                <div
                        style={{backgroundColor:"darkblue",  width:   "70px",  height: "70px", borderRadius: "50%",textAlign:"center",color:"white",lineHeight:"70px",fontSize:"2rem"}} class="circle-singleline mr-auto ">
                              {company.firstname.charAt(0)}  {company.secondname.charAt(0)}

                </div>
                <div>
                    <p>HR Executives</p>
                    <p className='fw-bold'  style={{color:"darkblue"}}>{company.name}</p>
                </div>
          </div>


          <div className='mt-1'>
            <p>{company.description}</p>
          </div>
       </div>
       <div class="card-body d-flex flex-row justify-content-between"
            style=  {{backgroundColor:"#EEEEEE",height:"60px"}}>
          <div>
             
          </div>
          <div>
             <a href="#" class="card-link">View Company</a>
             <a href="#" class="card-link">Save Company</a>
          </div>
        </div>
    </div>


  )
}
