import React from 'react'

export default function SavedJobs() {
  return (
    <div class="card shadow-sm">

 <div class="form-inline">
                      <div class="input-group">
                          <input id="search-input" type="search" class="form-control" placeholder="search a saved job"></input>
                          <button id="search-button" type="button" class="btn btn-primary">
                                 <i class="fa fa-search"></i>
                            </button>
                      </div>
                  </div>
      
            <div class="card-body">
                <div className='d-flex' style={{gap:"4px"}}>
                    <div
                        style={{backgroundColor:"darkblue",  width:   "100px",  height: "100px", borderRadius: "50%",textAlign:"center",color:"white",lineHeight:"100px",fontSize:"3rem"}} class="circle-singleline ">
                         user
                    </div>
                     <div>
                    <p>Here are the jobs you took intrest on</p>
                    </div>
                </div>

            </div>
      <div class="card-body" style={{ backgroundColor: "#EEEEEE", height: "60px" }}>
        <div className="d-flex justify-content-end gap-2">
          <div> 
            <p>saved on 01-01-2022</p>
             </div>
                     <button type="button" class="btn btn-primary">View job</button>
                     <button type="button" class="btn btn-primary">Apply now</button>
                     <button type="button" class="btn btn-primary">Remove Job</button>
                </div>
           </div>
        </div>
  )
}
