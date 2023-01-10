import React from 'react'

export default function Jobcard() {
  return (
 
    <div class="card mt-3"  >
        <div class="card-body">
            <div className='d-flex flex-row'
                        style=  {{gap:"15px"}}>
                <div
                        style={{backgroundColor:"darkblue",  width:   "70px",  height: "70px", borderRadius: "50%",textAlign:"center",color:"white",lineHeight:"70px",fontSize:"2rem"}} class="circle-singleline mr-auto ">
                                TS
                </div>
                <div>
                    <p>HR Executives</p>
                    <p className='fw-bold'  style={{color:"darkblue"}}>Tech Software</p>
                </div>
          </div>
          <div className='d-flex flex-row' style={{gap:"25px"}}>
                <div><span className='fw-bold'>Opennings:</span>&nbsp;&nbsp;7</div>
                <div><span className='fw-bold'>Category:</span>&nbsp;&nbsp;Software Engineering</div>
                <div><span className='fw-bold'> Salary Range</span>:&nbsp;&nbsp;10,000-20,000</div>
          </div>

          <div className='mt-1'>
            <p>To start searching for jobs you can attend job sfairs online or in person, use job boards, particopate in company surveys or reac out to recruiters to broaden network</p>
          </div>
       </div>
       <div class="card-body d-flex flex-row justify-content-between"
            style=  {{backgroundColor:"#EEEEEE",height:"60px"}}>
          <div>
            <p>Posted 16 days ago</p>
          </div>
          <div>
             <a href="#" class="card-link">View Job</a>
             <a href="#" class="card-link">Save Job</a>
          </div>
        </div>
    </div>


  )
}

