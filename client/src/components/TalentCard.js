import React from 'react'

export default function 
() {
  return (
 <div class="card mt-3"  >
        <div class="card-body d-flex justify-content-between    " style=  {{backgroundColor:"#EEEEEE",height:"60px"}}>
          <div>
            <p style={{lineHeight:"5px"}}>QUEENSLAY JEMA</p>
            <p style={{lineHeight:"5px",color:"darkblue"}} >Location:Nairobi</p>
          </div>
          <div  >
               <button type="button" class="btn btn-primary">VIEW PROFILE</button>
               </div>
        </div>
        <div class="card-body">
          <div>
                <div><span className='fw-bold'>Education:</span>&nbsp;&nbsp;Moringa,Software Engineering</div>
                <div><span className='fw-bold'>Key Skills:</span>&nbsp;&nbsp;React,Rails</div>
                <div><span className='fw-bold'>Proficiency</span>:&nbsp;&nbsp;Junior</div>
          </div>
          <div className='mt-1'>
            <div><span className='fw-bold'>About Me</span>:&nbsp;&nbsp;To start searching for jobs you can attend jobs fairs online or in person, use job boards, particopate in company surveys or reach out to recruiters to broaden network</div>
          </div>
       </div>
       <div class="card-body   "
            style=  {{backgroundColor:"#EEEEEE",height:"60px"}}>
          <div className="d-flex justify-content-end gap-2">
               <button type="button " class="btn btn-primary">SAVE PROFILE</button>
               <button type="button" class="btn btn-primary">SEND EMAIL</button>
               </div>
        </div>
        </div>  
  )
}

