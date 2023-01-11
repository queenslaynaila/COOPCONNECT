import React from 'react'

export default function Pricing() {
  return (
      <div className="container mt-4 mb-4" >
          <h4 style={{ color: "darkblue" }}>Ready for upgrade?</h4>
          <h6 className='text-center'>We have monthly and Annual plans!</h6>
          <div class="container">
              <div class="row">
                  <div class="col">
                        <div class="card   ">
                          <div class="card-body">
                            <h6  className='text-center'>basic</h6>
                            <p className='text-center'>post upto 5 jobs</p>
                            <p  className='text-center'>$2 Monthly</p>
                            <div className='text-center'> <a href="#" class="btn btn-primary   ">Choose Plan</a></div>
                          </div>
                        </div>
                  </div>
                  <div class="col">
                        <div class="card ">
                          <div class="card-body">
                            <h6 className='text-center'>lite</h6>
                            <p  className='text-center'>post upto 15 jobs</p>
                            <p  className='text-center'>$4 Monthly</p>
                            <div className='text-center'> <a href="#" class="btn btn-primary   ">Choose Plan</a></div>
                          </div>
                        </div>
                  </div>
                  <div class="col">
                        <div class="card">
                          <div class="card-body">
                            <h6 className='text-center'>Pro</h6>
                            <p  className='text-center'>post upto 30 jobs</p>
                            <p  className='text-center'>$6 Monthly</p>
                            <div className='text-center'> <a href="#" class="btn btn-primary   ">Choose Plan</a></div>
                          </div>
                        </div>
                  </div>
              </div>
         </div>
     </div>
  )
}
