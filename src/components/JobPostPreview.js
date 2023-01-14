import React from 'react'

export default function JobPostPreview() {
  return (
      <div className='container mt-4 mb-4'>
         <h5 style={{ color: "darkblue" }}>Job Post Preview</h5>
         <div class="card mt-3"  >
            <div class="card-body">
              <div>
                    <div>
                      <h6 style={{ color: "darkblue" }} className='fw-bold'>Lencare General Merchants HR</h6>
                      <p>Salary Range:10,000-50,000</p>
                      <p>Positions Available:2</p><p>Location: nairobi;Kenya</p>
                    </div>
                    <div>
                       <h6 style={{ color: "darkblue" }}className='fw-bold'>Responsibilities</h6>
                       <p>2 year experience</p>
                       <p>Must know JS</p>
                    </div>
                    <div><span style={{ color: "darkblue" }} className='fw-bold'>Key Skills:</span>&nbsp;&nbsp;Teamwork,Communication,php</div>
                    <div><span style={{ color: "darkblue" }} className='fw-bold'>Experience in Years:</span>&nbsp;&nbsp;2 years</div>
                    <div><span  style={{ color: "darkblue" }}className='fw-bold'>Seniority Level</span>:&nbsp;&nbsp;Expert</div>
                    <div><span style={{ color: "darkblue" }} className='fw-bold'>Minimum Educational Qualifications</span>:&nbsp;&nbsp;Expert</div>
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
