import React from 'react'

export default function JobPostPreview() {
  return (
      <div>
          
<div class="card mt-3"  >
        <div class>
          <h5 style={{ color: "darkblue" }}>Job Post Preview</h5>
        </div>

        <div class="card-body">
          <div>
                <div><span className='fw-bold'>Lencare General Merchants HR</span>:&nbsp;&nbsp;<p>Salary Range:10,000-50,000</p><p>Positions Available:2</p><p>Location: nairobi;Kenya</p></div>
                <div><span className='fw-bold'>Responsibilities</span>:&nbsp;&nbsp;<p>2 year experience</p><p>Must know JS</p></div>
                <div><span className='fw-bold'>Key Skills:</span>&nbsp;&nbsp;Teamwork,Communication,php</div>
                <div><span className='fw-bold'>Experience in Years:</span>&nbsp;&nbsp;2 years</div>
                <div><span className='fw-bold'>Seniority Level</span>:&nbsp;&nbsp;Expert</div>
                <div><span className='fw-bold'>Minimum Educational Qualifications</span>:&nbsp;&nbsp;Expert</div>
          </div>
       </div>
       <div class="card-body   "
            style=  {{backgroundColor:"#EEEEEE",height:"60px"}}>
          <div className="d-flex justify-content-end gap-2">
               <button type="button " class="btn btn-primary">EDIT POST</button>
            <button type="button" class="btn btn-primary">SAVE POST</button>
            <button type="button" class="btn btn-primary">CANCEL</button>
               </div>
        </div>
        </div>  

          
    </div>
  )
}
